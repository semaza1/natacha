import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import homeImage from './assets/natacha1.JPG';
import about from './assets/about.JPG';
import natacha from './assets/natacha.JPG';
import image1 from './assets/Image1.JPG';
import image2 from './assets/Image2.JPG';
import image3 from './assets/image3.JPG';
import image4 from './assets/image4.JPG';
import image5 from './assets/image5.JPG';
import image6 from './assets/image6.JPG';
import image7 from './assets/image7.JPG';


export default function App() {

    const galleryImages = [image1, image2, image3, image4, image5, image6, image7]; // Add as many as you want
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      galleryImages.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    }, []);
    const openModal = () => {
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };
    useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;

      if (e.key === "ArrowLeft") {
        goToPrev();
      } else if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "Escape") {
        closeModal();
      }
    };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [isModalOpen]);


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
      <nav className="flex flex-wrap justify-between items-center py-4 px-4 border-b border-gray-700 bg-gray-900">
        {/* Left Side: Image + Name */}
        <div className="flex items-center space-x-3">
          <img
            src={natacha} // Adjust path as needed
            alt="Igihozo Natacha"
            className="w-10 h-10 rounded-full object-cover"
          />
          <h1 className="text-xl font-bold text-white">IGIHOZO Natacha</h1>
        </div>

        {/* Right Side: Navigation Links */}
        <div className="space-x-4 mt-4 md:mt-0">
          <Link
            to="/"
            className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Home
          </Link>
          <a
            href="/recomandation.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Recommendation Letter
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
              Hi, I'm Natacha IGIHOZO - a Passionate and skilled aspiring hairdresser with hands-on experience in styling, braiding, and shaving. Eager to be on high quality of styling and became a professional hairdressing . Dedicated to quality service, hygiene, and customer satisfaction.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                <a 
                href="resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                >
                  View Resume
                </a>
              </button>
              <button className="border border-gray-600 hover:border-purple-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                <a 
                href="coverletter.pdf"
                target="_blank"
                rel="noopener noreferrer"
                >
                  View Cover Letter
                </a>
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
                I am a creative and hardworking young person with strong skills in hairdressing, like braiding, styling, and shaving. I also take part in leadership, public speaking, art, and managing small projects. While I study Math, Physics, and Computer Science, I also work to build my skills and help others.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My dream is to start a hairdressing company that trains and supports young people, and to run other small projects that grow creativity and business in my community.
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
                  <span className="text-2xl"></span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Hair Dressing</h3>
                <p className="text-gray-400">Braiding, Styling, and Shaving: Skilled in hair care and grooming for both men and women, offering services like neat braids, stylish cuts, and clean shaves.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Glam and Gourmet Project</h3>
                <p className="text-gray-400">Led and organized small business projects that combined beauty services and food sales to raise income and build entrepreneurship skills.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">💫</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Robotic Arm Creation</h3>
                <p className="text-gray-400">Participated in building a robotic arm, learning how to use engineering tools and solve real-world problems.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Peer Teaching</h3>
                <p className="text-gray-400">Helped classmates understand different subjects by sharing knowledge and guiding them</p>
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
                <p className="text-gray-300">Provided shaving and hairdressing services in my community, helping people feel confident and look their best.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-3"></div>
                <p className="text-gray-300">Managed a student-run business that offered beauty services and food, building teamwork and business skills.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-3"></div>
                <p className="text-gray-300">Successfully participated in a STEM project where I helped design and build a robotic arm using engineering tools.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-3"></div>
                <p className="text-gray-300">Taught young girls in my community about women’s health, hygiene, and self-care, promoting confidence and awareness.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-3"></div>
                <p className="text-gray-300">Created pencil drawings and designed products using graphic design and SolidWorks software for 3D/2D printing</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-3"></div>
                <p className="text-gray-300">Took part in debate and speaking events, improving my confidence and communication skills.</p>
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
            <div className="relative h-64 w-full border border-gray-600 rounded-lg overflow-hidden">
              <img
                src={galleryImages[currentIndex]}
                alt={`Gallery ${currentIndex + 1}`}
                className="w-full h-full object-cover cursor-pointer transition-all duration-300"
                onClick={openModal}
              />

              {/* Prev/Next Buttons */}
              <button
                onClick={goToPrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-purple-600 text-white px-3 py-2 rounded-full hover:bg-purple-700"
              >
                ◀
              </button>
              <button
                onClick={goToNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-purple-600 text-white px-3 py-2 rounded-full hover:bg-purple-700"
              >
                ▶
              </button>
            </div>
          </div>
          {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="relative max-w-4xl w-full mx-4">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-purple-400 transition"
              >
                &times;
              </button>
              <img
                src={galleryImages[currentIndex]}
                alt={`Full Gallery ${currentIndex + 1}`}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </div>
)}
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
                  I consent to being contacted by Natacha's Hair Studio regarding my inquiry. I understand that my personal information will be handled according to the privacy policy. *
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
