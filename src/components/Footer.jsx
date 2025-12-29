import { Link } from 'react-router-dom'
import Logo from './Logo'
import '../App.css'

function Footer() {
  return (
   <footer className="py-12 bg-gray-100 border-t border-gray-300">
  <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
    <div className="flex flex-wrap -m-6">
      {/* Brand Section */}
      <div className="w-full p-6 md:w-1/2 lg:w-5/12">
        <div className="flex flex-col h-full justify-between">
          <div>
            <div className="mb-4 inline-block">
              <Logo width="180px" />
            </div>
            <div>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                &copy; Copyright 2026. All Rights Reserved by DevUI.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Links Sections */}
      {[
        { title: "Company", links: ["Features", "Pricing", "Affiliate Program", "Press Kit"] },
        { title: "Support", links: ["Account", "Help", "Contact Us", "Customer Support"] },
        { title: "Legals", links: ["Terms & Conditions", "Privacy Policy", "Licensing"] },
      ].map((section, idx) => (
        <div key={section.title} className={`w-full p-6 md:w-1/2 ${idx === 2 ? 'lg:w-3/12' : 'lg:w-2/12'}`}>
          <div className="h-full">
            <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400">
              {section.title}
            </h3>
            <ul className="space-y-4">
              {section.links.map((link) => (
                <li key={link}>
                  <Link
                    className="text-base font-medium text-gray-600 hover:text-purple-600 transition-colors duration-200"
                    to="/"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
</footer>
  )
}

export default Footer