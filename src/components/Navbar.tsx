import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoSvg from '@/assets/hero/Logo.svg';

interface NavbarProps {
  onLoginClick?: () => void;
}

const Navbar = ({ onLoginClick }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detectar seção ativa
      const sections = ['hero', 'comunidade', 'sobre', 'pricing', 'faq'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { label: 'Início', id: 'hero' },
    { label: 'Comunidade', id: 'comunidade' },
    { label: 'Sobre nós', id: 'sobre' },
    { label: 'Preços', id: 'pricing' },
    { label: 'FAQ', id: 'faq' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-[80px]">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img 
              src={logoSvg} 
              alt="Rise Community" 
              className="h-[45px] w-auto"
            />
          </button>

          {/* Desktop Menu - dentro de container arredondado escuro */}
          <div className="hidden md:flex items-center">
            <ul 
              className="flex items-center gap-1.5 px-2 py-2 rounded-full"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}
            >
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`px-5 py-2 rounded-full text-[15px] font-medium transition-all duration-200 ${
                      activeSection === item.id
                        ? 'bg-white/10 text-white'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                    style={{ fontFamily: "'Articulat CF', sans-serif" }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Login Button - Desktop */}
          <button
            onClick={onLoginClick}
            className="hidden md:block bg-white text-black rounded-full font-medium text-[15px] hover:scale-105 hover:shadow-xl transition-all duration-300"
            style={{
              padding: '16px 41px',
              borderRadius: '49px',
              fontFamily: "'Articulat CF', sans-serif",
            }}
          >
            Login
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div 
            className="py-4 rounded-2xl mb-4 px-4"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left transition-colors py-3 px-4 rounded-xl text-[15px] ${
                      activeSection === item.id
                        ? 'text-white bg-white/10'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                    style={{ fontFamily: "'Articulat CF', sans-serif" }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="pt-3">
                <button
                  onClick={() => {
                    onLoginClick?.();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-white text-black px-6 py-3.5 rounded-full font-medium hover:scale-[1.02] transition-transform text-[15px]"
                  style={{ fontFamily: "'Articulat CF', sans-serif" }}
                >
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
