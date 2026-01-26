import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Inicio", path: "/" },
    { name: "Jurados", path: "/jurados" },
    { name: "Speakers", path: "/speakers" },
    { name: "Mentores", path: "/mentores" },
    { name: "Equipo", path: "/equipo" },
    { name: "Aliados", path: "/aliados" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-terminal-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 py-2.5 no-underline group">
            <img
              src="/assets/Jaguar.png"
              alt="Soberan.IA Jaguar Logo"
              className="h-[35px] md:h-[45px] w-auto object-contain transition-transform duration-300 drop-shadow-[0_0_8px_rgba(138,43,226,0.4)] group-hover:scale-105"
            />
            <span className="font-mono font-bold text-base md:text-xl text-white tracking-wider leading-none">
              HACKATHON <span className="block text-xs md:text-[0.8em] font-normal text-[#00E5FF]">YOUNG AI LEADERS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-primary p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-terminal-border animate-fade-in-up">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;