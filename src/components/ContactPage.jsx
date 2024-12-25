import React, { useState } from 'react';

const countries = [
  { code: '+971', name: 'UAE' },
  { code: '+92', name: 'Pakistan' },
  { code: '+968', name: 'Oman' },
  { code: '+47', name: 'Norway' },
  { code: '+970', name: 'Palestine' },
];

const ContactUs = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Details */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Details</h2>
          <div className="grid gap-4">
            <div className="bg-gray-100 p-4 rounded-md shadow">
              <h3 className="text-lg font-semibold text-gray-700">Email Address</h3>
              <p className="text-gray-600">info@tssuae.ae</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow">
              <h3 className="text-lg font-semibold text-gray-700">Phone Numbers</h3>
              <p className="text-gray-600">+971 52 683 8910</p>
            <p className="text-gray-600">+971 55 947 0823</p>
            <p className="text-gray-600">+971 56 390 7559</p>
            <p className="text-gray-600">+971 4392 1234</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Have Any Questions? Let's Start to Talk</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="full-name">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="full-name"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="contact-number">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center mt-1">
                <select
                  className="inline-flex items-center px-3 rounded-l-md border border-gray-300 bg-gray-100 text-gray-600 focus:ring-red-500 focus:border-red-500"
                  value={selectedCountry.code}
                  onChange={(e) =>
                    setSelectedCountry(
                      countries.find((country) => country.code === e.target.value)
                    )
                  }
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name} ({country.code})
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  id="contact-number"
                  className="w-full p-2 border border-gray-300 rounded-r-md focus:ring-red-500 focus:border-red-500"
                  placeholder="Enter your contact number"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                placeholder="Enter the subject"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="comments">
                Comments / Questions
              </label>
              <textarea
                id="comments"
                rows="4"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                placeholder="Enter your comments or questions"
              ></textarea>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="not-robot"
                className="h-4 w-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
              />
              <label htmlFor="not-robot" className="ml-2 text-sm text-gray-700">
                I&apos;m not a robot
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-red-500 text-white font-medium py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Location</h2>
          <div className="overflow-hidden rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.3665552958845!2d55.2789422150105!3d25.224731783890024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43412e4d5197%3A0x6e1249f272408fa8!2sLatifa%20Tower!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
