import { ReactNode, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import SkipLink from './SkipLink';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Layout = ({ children, title = "Gibb Lawyers", description = "Experience you need. Achievements you get." }: LayoutProps) => {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }, [title, description]);

  return (
    <div className="min-h-screen flex flex-col">
      <SkipLink />
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;