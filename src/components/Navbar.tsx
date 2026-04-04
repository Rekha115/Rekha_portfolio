import { useState, useEffect, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

const navItems = [
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Skills", href: "/skills", sectionId: "skills" },
  { label: "Experience", href: "/experience", sectionId: "experience" },
  { label: "Projects", href: "/projects", sectionId: "projects" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll tracking on homepage
  useEffect(() => {
    if (location.pathname !== "/") {
      // On sub-pages, highlight the matching nav item
      const match = navItems.find((item) => item.href === location.pathname);
      if (match) setActiveSection(match.sectionId);
      return;
    }

    const sectionIds = ["about", "skills", "experience", "projects", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, item: (typeof navItems)[0]) => {
    if (menuOpen) setMenuOpen(false);

    if (item.href.startsWith("/#")) {
      e.preventDefault();
      const id = item.href.replace("/#", "");
      if (window.location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-0 right-0 z-50 px-4"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full bg-white/80 px-4 py-2 shadow-lg ring-1 ring-slate-200 backdrop-blur-md md:px-6">
        <Link to="/" className="font-heading font-semibold text-lg text-foreground tracking-tight">
          <span className="text-primary">R</span>ekha
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.sectionId;
            return (
              <Link
                key={item.label}
                to={item.href}
                onClick={(e) => handleClick(e, item)}
                className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300
                  ${isActive
                    ? "text-primary"
                    : "text-foreground/60 hover:text-primary hover:bg-primary/10"
                  }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-foreground shadow-lg ring-1 ring-slate-200 transition hover:bg-white md:hidden"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {menuOpen && (
        <div className="mx-auto mt-3 max-w-6xl rounded-xl bg-pink-100/90 p-4 shadow-lg backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.sectionId;
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={(e) => handleClick(e, item)}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300
                    ${isActive
                      ? "text-primary"
                      : "text-foreground/70 hover:text-primary hover:bg-white/80"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
