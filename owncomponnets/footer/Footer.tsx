import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-gray-300 py-12 md:px-8 px-2 relative overflow-hidden">
      {/* Grid and Dots Background */}
      <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(20,minmax(0,1fr))] opacity-10">
        {[...Array(400)].map((_, i) => (
          <div key={i} className="flex items-center justify-center">
            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className=" p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">About Us</h2>
            <p className="text-sm mb-4">
              We provide innovative solutions across various industries. Explore our cutting-edge services and products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className=" p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Quick Links</h2>
            <ul className="space-y-2">
              {["Home", "Services", "Products", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div className=" p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Support</h2>
            <ul className="space-y-2">
              {["Help Center", "FAQs", "Privacy Policy", "Terms of Service"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

         
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">© {currentYear} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

