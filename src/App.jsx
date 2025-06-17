import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import homeImage from './assets/natacha.JPG';
import about from './assets/about.JPG';
import semaza from './assets/semaza.JPG';


export default function App() {

    const galleryImages = [homeImage, about, semaza]; // Add as many as you want

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrev = () => {
      setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    };

    const goToNext = () => {
      setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    };

    const [formData, setFormData] = useState({
    name: '',
    email: '',
    consent: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('Please provide consent to proceed.');
      return;
    }
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you! We will contact you soon.');
    // Reset form
    setFormData({ name: '', email: '', consent: false });
  };
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Navigation */}
      <nav className="flex justify-between items-center py-4 px-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold">Natacha</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <a
            href="https://example.com/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Resume
          </a>
          <a
            href="https://example.com/coverletter.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Cover Letter
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight">
              Transform Your Look with 
              <span className="text-purple-400"> Professional Hair Artistry</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Hi, I'm Natacha IGIHOZO - a passionate hairdresser with 5+ years of experience creating stunning transformations. From classic cuts to bold color changes, I bring your hair dreams to life.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Book Consultation
              </button>
              <button className="border border-gray-600 hover:border-purple-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                View Portfolio
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="bg-gray-800 border border-gray-600 h-96 rounded-lg flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <img src={homeImage} alt="Home image" />
                <p className="text-gray-400">[Professional headshot photo here]</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-600 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-400 rounded-full opacity-30"></div>
          </div>
        </div>
      </section>

      <main className="px-4">
        {/* About Section */}
        <section className="py-16 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About Natacha</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                With a keen eye for detail and a passion for beauty, I specialize in creating personalized looks that enhance your natural features and boost your confidence. Every client is unique, and I believe your hairstyle should reflect your personality and lifestyle.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I stay current with the latest trends and techniques through continuous education, ensuring you receive cutting-edge styling that looks amazing and feels authentically you.
              </p>
            </div>
            <div className="bg-gray-800 border border-gray-600 h-72 rounded-lg flex items-center justify-center overflow-hidden">
              <img src={about} alt="About image" />
            </div>
          </div>
        </section>

        {/* Services/Strengths Section */}
        <section className="py-16 bg-gray-800 -mx-4 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">My Expertise</h2>
              <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">✂️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Precision Cutting</h3>
                <p className="text-gray-400">Expert cuts tailored to your face shape and style preferences</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Color Artistry</h3>
                <p className="text-gray-400">From subtle highlights to bold transformations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">💫</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Special Styling</h3>
                <p className="text-gray-400">Bridal, events, and special occasion styling</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Client Care</h3>
                <p className="text-gray-400">Personalized consultations and ongoing hair care advice</p>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Achievements & Experience</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-3"></div>
                <p className="text-gray-300">Styled over 500+ satisfied clients</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-3"></div>
                <p className="text-gray-300">Certified in Advanced Color Theory and Application</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-3"></div>
                <p className="text-gray-300">Featured stylist at 10+ fashion and bridal showcases</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-3"></div>
                <p className="text-gray-300">5-star average rating from client reviews</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-3"></div>
                <p className="text-gray-300">Specialized training in sustainable hair care practices</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-3"></div>
                <p className="text-gray-300">Recognized for excellence in customer service</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-gray-800 -mx-4 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Portfolio Gallery</h2>
              <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
              <p className="text-gray-400">See some of my recent transformations</p>
            </div>
            <div className="relative bg-gray-700 border border-gray-600 h-96 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src={galleryImages[currentIndex]}
                alt={`Gallery image ${currentIndex + 1}`}
                className="object-fill h-full w-full"
              />
              {/* Prev Button */}
              <button
                onClick={goToPrev}
                className="absolute left-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full"
              >
                ◀
              </button>
              {/* Next Button */}
              <button
                onClick={goToNext}
                className="absolute right-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full"
              >
                ▶
              </button>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-6">Ready for Your Hair Transformation?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let's work together to create the perfect look that makes you feel confident and beautiful. Book your consultation today!
            </p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-purple-100 font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-purple-100 font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-purple-100 font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
                  placeholder="Enter your message"
                />
              </div>
                

              {/* Consent Checkbox */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-4 h-4 text-purple-600 bg-white border-gray-300 rounded focus:ring-purple-500"
                />
                <label htmlFor="consent" className="text-purple-100 text-sm leading-relaxed">
                  I consent to being contacted by Sarah's Hair Studio regarding my inquiry. I understand that my personal information will be handled according to the privacy policy. *
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-white text-purple-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-300"
              >
                📞 Send My Request
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 px-4 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">© 2024 Natacha's Hair Studio. All rights reserved.</p>
          <p className="text-gray-500 mt-2">Crafted with care for beautiful transformations</p>
        </div>
      </footer>
    </div>
  )
}
