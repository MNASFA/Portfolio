import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    message: ''
  });
  // State to handle and display submission feedback to the user
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default HTML form submission (page refresh)
    
    setSubmissionStatus(null); // Clear previous status

    const form = e.target;
    const data = new FormData(form);

    // Netlify requires data in URL-encoded format for client-side submissions
    const encodedData = new URLSearchParams(data).toString();

    fetch("/", {
      method: "POST",
      // CRITICAL: Must include this header for Netlify to process the data
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodedData
    })
    .then((response) => {
      if (response.status === 200 || response.ok) {
        setSubmissionStatus('success');
        // Reset form fields on successful submission
        setFormData({ fullname: '', email: '', phone: '', message: '' }); 
      } else {
        setSubmissionStatus('error');
      }
    })
    .catch((error) => {
      console.error('Submission error:', error);
      setSubmissionStatus('error');
    });
  };

  return (
    <section id="contact" className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Section */}
        <div className="about_title w-full p-4 sm:p-8 mb-8 sm:mb-12">
          <h2 className="w-fit m-auto text-2xl sm:text-4xl md:text-5xl font-bold text-gray tracking-widest mb-4">
            Contact Me
          </h2>
          <p className="text-gray-400 text-center text-base sm:text-lg md:text-xl mt-6">
            Have a project in mind? Let's work together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl p-6 sm:p-8 ">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray mb-6">
                Send me a message <span className='text-orange-600 font-bold'>:</span>
              </h3>
              
              {/* === NETLIFY FORM CONFIGURATION === */}
              <form 
                name="contact" // 👈 CRITICAL: Tells Netlify to recognize this form
                method="POST" // 👈 REQUIRED: Specifies the method
                data-netlify="true" // 👈 CRITICAL: Activates the Netlify Forms feature
                data-netlify-honeypot="bot-field" // 👈 RECOMMENDED: Spam protection
                onSubmit={handleSubmit} 
                className="space-y-5 sm:space-y-6"
              >
                {/* HIDDEN FIELDS REQUIRED BY NETLIFY */}
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
              
                {/* Full Name */}
                <div>
                  <label htmlFor="fullname" className="block text-gray-300 text-sm sm:text-base font-medium mb-2">
                    Full Name <span className="text-orange-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname" // 👈 Netlify captures this field name
                    value={formData.fullname}
                    onChange={handleChange}
                    required
                    className="w-full bg-neutral-800 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition-all duration-300"
                    placeholder="Houssam Mnasfa"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-gray-300 text-sm sm:text-base font-medium mb-2">
                    Email Address <span className="text-orange-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email" // 👈 Netlify captures this field name
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-neutral-800 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition-all duration-300"
                    placeholder="hmnasfa@example.com"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-gray-300 text-sm sm:text-base font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone" // 👈 Netlify captures this field name
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-neutral-800 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-2 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition-all duration-300"
                    placeholder="+212 6XX XXX XXX"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-gray-300 text-sm sm:text-base font-medium mb-2">
                    Message <span className="text-orange-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message" // 👈 Netlify captures this field name
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-neutral-800 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                {/* Submission Status Message */}
                {submissionStatus === 'success' && (
                  <p className="text-green-500 font-semibold mt-4">
                    ✅ Success! Your message has been sent.
                  </p>
                )}
                {submissionStatus === 'error' && (
                  <p className="text-red-500 font-semibold mt-4">
                    ❌ Submission failed. Please try again.
                  </p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:cursor-pointer text-white font-semibold py-3 sm:py-4 px-6 rounded-lg text-base sm:text-lg transition-all duration-300 hover:scale-105"
                >
                  <i className="fa-solid fa-paper-plane mr-2"></i>
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Details (Unchanged) */}
          <div className="order-1 lg:order-2">
            <div className="bg-gradient-to-br rounded-2xl p-6 sm:p-8 h-full">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray mb-6">
                Contact Information
              </h3>
              
              <p className="text-gray-400 text-sm sm:text-base mb-8 leading-relaxed">
                Feel free to reach out to me for any inquiries, collaborations, or just to say hello. 
                I'm always open to discussing new projects and opportunities.
              </p>

              <div className="space-y-6 sm:space-y-8">
                {/* Email */}
                <div className="flex items-start group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-600/20 rounded-xl flex items-center justify-center group-hover:bg-orange-600 transition-all duration-300 mr-4 flex-shrink-0">
                    <i className="fa-solid fa-envelope text-orange-600 group-hover:text-white text-lg sm:text-xl transition-colors duration-300"></i>
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm sm:text-base font-medium mb-1">Email</h4>
                    <a 
                      href="mailto:houssammnasfa2@gmail.com" 
                      className="text-gray-300 hover:text-orange-600 text-base sm:text-lg transition-colors duration-300"
                    >
                      houssammnasfa2@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-600/20 rounded-xl flex items-center justify-center group-hover:bg-orange-600 transition-all duration-300 mr-4 flex-shrink-0">
                    <i className="fa-solid fa-phone text-orange-600 group-hover:text-white text-lg sm:text-xl transition-colors duration-300"></i>
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm sm:text-base font-medium mb-1">Phone</h4>
                    <a 
                      href="https://wa.me/623581831" 
                      className="text-gray-300 hover:text-orange-600 text-base sm:text-lg transition-colors duration-300"
                    >
                      +212 623 581 831
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-600/20 rounded-xl flex items-center justify-center group-hover:bg-orange-600 transition-all duration-300 mr-4 flex-shrink-0">
                    <i className="fa-solid fa-location-dot text-orange-600 group-hover:text-white text-lg sm:text-xl transition-colors duration-300"></i>
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm sm:text-base font-medium mb-1">Location</h4>
                    <p className="text-gray-300 text-base sm:text-lg">
                      Casablanca, Morocco
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-4 sm:pt-6">
                  <h4 className="text-gray-400 text-sm sm:text-base font-medium mb-4">Follow me</h4>
                  <div className="flex gap-4">
                    <a 
                      href="https://github.com/MNASFA" 
                      className="w-12 h-12 bg-orange-600/20 hover:bg-orange-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                      aria-label="GitHub"
                    >
                      <i className="fa-brands fa-github text-orange-600 group-hover:text-white text-xl transition-colors duration-300"></i>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/houssam-mnasfa-80056b247/" 
                      className="w-12 h-12 bg-orange-600/20 hover:bg-orange-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                      aria-label="LinkedIn"
                    >
                      <i className="fa-brands fa-linkedin text-orange-600 group-hover:text-white text-xl transition-colors duration-300"></i>
                    </a>
                    <a 
                      href="https://discord.com/users/1087333504775376896" 
                      className="w-12 h-12 bg-orange-600/20 hover:bg-orange-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                      aria-label="Discord"
                    >
                      <i className="fa-brands fa-discord text-orange-600 group-hover:text-white text-xl transition-colors duration-300"></i>
                    </a>
                    <a 
                      href="https://www.instagram.com/houssa_mn/" 
                      className="w-12 h-12 bg-orange-600/20 hover:bg-orange-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                      aria-label="Instagram"
                    >
                      <i className="fa-brands fa-instagram text-orange-600 group-hover:text-white text-xl transition-colors duration-300"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact