import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Lawyers', href: '/lawyers' },
    { name: 'Services', href: '/services' },
    { name: 'History', href: '/history' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-background/50 backdrop-blur-xl supports-[backdrop-filter]:bg-background/30 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-3 min-w-0 flex-shrink-0 group hover-magnetic">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img 
                  src="/images/gibb-logo.png" 
                  alt="Gibb & Co Lawyers Logo" 
                  className="h-8 w-auto lg:h-10 group-hover:scale-110 transition-all duration-500 gpu-accelerated"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded"></div>
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold group-hover:scale-105 transition-transform duration-300">
                <span className="text-primary hover:text-primary/80 transition-all duration-500">GIBB</span>
                <span className="text-accent group-hover:text-primary transition-colors duration-300">&co</span>
              </div>
            </div>
          </Link>

          {/* Enhanced Heritage Badge */}
          <div className="hidden md:flex items-center space-x-4 glass px-4 py-2 rounded-full hover-lift group">
            <div className="w-8 h-px bg-primary/40 group-hover:bg-primary transition-colors duration-300"></div>
            <span className="text-sm font-heading font-semibold text-primary tracking-wider uppercase group-hover:text-primary/80 transition-all duration-300">
              EST. 1892
            </span>
            <div className="w-8 h-px bg-primary/40 group-hover:bg-primary transition-colors duration-300"></div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-body font-medium transition-all duration-500 hover:text-primary relative group micro-bounce ${
                  isActive(item.href)
                    ? 'text-primary'
                    : 'text-foreground hover:scale-105'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <span className="relative z-10">{item.name}</span>
                {isActive(item.href) && (
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-primary to-accent rounded-full animate-glow"></div>
                )}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 -z-10"></div>
              </Link>
            ))}
            
            {/* Enhanced Language Selector */}
            <div className="flex items-center space-x-4 text-xs ml-4 glass px-3 py-1 rounded-full">
              <Link 
                to="/chinese" 
                className={`transition-all duration-300 hover-magnetic ${
                  isActive('/chinese') ? 'text-primary font-bold' : 'text-muted-foreground hover:text-primary hover:scale-110'
                }`}
              >
                中文
              </Link>
              <div className="w-px h-3 bg-border"></div>
              <Link 
                to="/korean" 
                className={`transition-all duration-300 hover-magnetic ${
                  isActive('/korean') ? 'text-primary font-bold' : 'text-muted-foreground hover:text-primary hover:scale-110'
                }`}
              >
                한국어
              </Link>
            </div>
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden min-w-[44px] min-h-[44px] p-2 glass rounded-full hover-lift micro-bounce group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="relative w-6 h-6">
              <X className={`absolute inset-0 h-6 w-6 text-primary transition-all duration-300 ${
                isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-75'
              }`} />
              <Menu className={`absolute inset-0 h-6 w-6 text-primary transition-all duration-300 ${
                isMenuOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
              }`} />
            </div>
          </Button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 glass-intense rounded-2xl mt-4 border border-primary/20">
            <nav className="flex flex-col space-y-1 px-4">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-base font-medium transition-all duration-300 hover:text-primary py-3 px-4 rounded-xl min-h-[44px] flex items-center hover-lift micro-bounce ${
                    isActive(item.href) 
                      ? 'text-primary glass border-l-4 border-primary shadow-lg' 
                      : 'text-foreground hover:glass'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Enhanced Mobile Footer */}
              <div className="flex items-center justify-between pt-4 px-4">
                <div className="glass px-4 py-2 rounded-full hover-lift">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-px bg-primary/40"></div>
                    <span className="text-xs font-semibold text-primary tracking-wider uppercase">
                      EST. 1892
                    </span>
                    <div className="w-6 h-px bg-primary/40"></div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-xs glass px-3 py-1 rounded-full">
                  <Link 
                    to="/chinese" 
                    className={`transition-all duration-300 hover-magnetic ${
                      isActive('/chinese') ? 'text-primary font-bold' : 'text-muted-foreground hover:text-primary'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    中文
                  </Link>
                  <Link 
                    to="/korean" 
                    className={`transition-all duration-300 hover-magnetic ${
                      isActive('/korean') ? 'text-primary font-bold' : 'text-muted-foreground hover:text-primary'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    한국어
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;