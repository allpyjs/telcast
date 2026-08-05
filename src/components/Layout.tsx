import { useState, useEffect, useRef } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaArrowUp, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const navItems = [
  { name: "Projects", path: "/projects" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/about-us" },
];

const Layout = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const footerRef = useRef<HTMLDivElement>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen relative bg-stone-50">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-10 border-b border-stone-200/80 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2.5 text-stone-900 transition-colors hover:text-blue-600"
          >
            <img
              alt="Telcast Engineering logo"
              width={44}
              height={44}
              src="/telcast.jpg"
              className="h-11 w-11"
            />
            <span className="text-xl font-semibold tracking-tight">
              Telcast Engineering
            </span>
          </Link>

          <nav className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors sm:px-4 ${
                  pathname === item.path
                    ? "bg-blue-50 text-blue-700"
                    : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={scrollToFooter}
              className="ml-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 sm:ml-4"
            >
              Contact Us
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-1 pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer
        ref={footerRef}
        className="border-t border-stone-200 bg-white"
      >
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-5">
              <Link to="/" className="inline-flex items-center gap-2.5">
                <img
                  alt="Telcast Engineering logo"
                  width={44}
                  height={44}
                  src="/telcast.jpg"
                  className="h-11 w-11"
                />
                <span className="text-xl font-semibold tracking-tight text-stone-900">
                  Telcast Engineering
                </span>
              </Link>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-stone-600">
                Telcast Engineering employs licensed professional engineers across multiple states, delivering comprehensive Architectural, Civil, Structural, MEP, and HVAC engineering services throughout the United States. Partner with us for safe, sustainable, and code-compliant solutions.
              </p>
            </div>

            {/* Links */}
            <div className="lg:col-span-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-500">
                Quick links
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    to="/about-us"
                    className="text-sm text-stone-600 transition-colors hover:text-blue-600"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-sm text-stone-600 transition-colors hover:text-blue-600"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className="text-sm text-stone-600 transition-colors hover:text-blue-600"
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-500">
                Get in touch
              </h3>
              <p className="mt-4 mb-5 max-w-xs text-sm text-stone-600">
                Reach out for project inquiries, quotes, or to discuss how we can
                support your next build.
              </p>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:info@TelcastEngineering.com"
                    className="flex items-center gap-3 text-sm text-stone-700 transition-colors hover:text-blue-600"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-stone-100">
                      <FaEnvelope className="text-stone-500" size={14} />
                    </span>
                    info@TelcastEngineering.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+19295251450"
                    className="flex items-center gap-3 text-sm text-stone-700 transition-colors hover:text-blue-600"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-stone-100">
                      <FaPhone className="text-stone-500" size={14} />
                    </span>
                    (929) 525-1450
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/15096135320"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-stone-700 transition-colors hover:text-blue-600"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-stone-100">
                      <FaWhatsapp className="text-stone-500" size={14} />
                    </span>
                    (509) 613-5320
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-sm text-stone-700">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-stone-100">
                      <FaMapMarkerAlt className="text-stone-500" size={14} />
                    </span>
                    <div className="flex-1">
                      <p className="leading-relaxed">
                        125 NW 122nd St
                        <br />
                        North Miami, FL 33168
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-stone-200 pt-8 text-center text-sm text-stone-500">
            © {new Date().getFullYear()} Telcast Engineering. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Fixed contact strip – WhatsApp & Email only */}
      <div className="fixed bottom-6 left-4 z-50 flex gap-2">
        <a
          href="https://wa.me/15096135320"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md transition hover:bg-emerald-600"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={20} />
        </a>
        <a
          href="mailto:info@TelcastEngineering.com"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-700 text-white shadow-md transition hover:bg-stone-800"
          aria-label="Email"
        >
          <FaEnvelope size={18} />
        </a>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-stone-700 text-white shadow-md transition hover:bg-stone-800"
        >
          <FaArrowUp size={18} />
        </button>
      )}
    </div>
  );
};

export default Layout;
