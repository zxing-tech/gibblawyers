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
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border/50 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 min-w-0 flex-shrink-0 group">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Award className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold">
                <span className="text-primary">GIBB</span>
                <span className="text-accent">&co</span>
              </div>
            </div>
          </Link>

          {/* Est. 1892 Badge - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-4 px-4 py-2 border border-primary/20 rounded-full bg-primary/5">
            <div className="w-8 h-px bg-primary/40"></div>
            <span className="text-sm font-semibold text-primary tracking-wider uppercase">EST. 1892</span>
            <div className="w-8 h-px bg-primary/40"></div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary relative ${
                  isActive(item.href)
                    ? 'text-primary'
                    : 'text-foreground'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full"></div>
                )}
              </Link>
            ))}
            <div className="flex items-center space-x-4 text-xs ml-4">
              <Link 
                to="/chinese" 
                className={`transition-colors cursor-pointer ${
                  isActive('/chinese') ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                }`}
              >
                中文
              </Link>
              <Link 
                to="/korean" 
                className={`transition-colors cursor-pointer ${
                  isActive('/korean') ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                }`}
              >
                한국어
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden min-w-[44px] min-h-[44px] p-2 hover:bg-primary/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border/50 bg-gradient-to-b from-background to-primary/5">
            <nav className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-base font-medium transition-all duration-300 hover:text-primary py-3 px-4 rounded-lg min-h-[44px] flex items-center ${
                    isActive(item.href) 
                      ? 'text-primary bg-primary/10 border-l-4 border-primary' 
                      : 'text-foreground hover:bg-primary/5'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Est. 1892 Badge and Languages */}
              <div className="flex items-center justify-between pt-4 px-4">
                <div className="flex items-center space-x-3 px-3 py-2 border border-primary/20 rounded-full bg-primary/5">
                  <div className="w-6 h-px bg-primary/40"></div>
                  <span className="text-xs font-semibold text-primary tracking-wider uppercase">EST. 1892</span>
                  <div className="w-6 h-px bg-primary/40"></div>
                </div>
                <div className="flex items-center space-x-4 text-xs">
                  <Link 
                    to="/chinese" 
                    className={`transition-colors cursor-pointer ${
                      isActive('/chinese') ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    中文
                  </Link>
                  <Link 
                    to="/korean" 
                    className={`transition-colors cursor-pointer ${
                      isActive('/korean') ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    한국어
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;