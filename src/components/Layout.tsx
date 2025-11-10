import { ReactNode, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import SkipLink from './SkipLink';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
}

const Layout = ({ 
  children, 
  title = "Gibb Lawyers - Legal Excellence Since 1892", 
  description = "Gibb & Co. Advocates & Solicitors - Over 130 years of legal expertise in Malaysia. Specializing in corporate law, litigation, property, and family matters.",
  ogImage = "/images/og-image.jpg"
}: LayoutProps) => {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    // Set page title
    document.title = title;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }

    // Open Graph meta tags for social sharing
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Gibb Lawyers' }
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (tag) {
        tag.setAttribute('content', content);
      } else {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        tag.setAttribute('content', content);
        document.head.appendChild(tag);
      }
    });

    // Twitter Card meta tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage }
    ];

    twitterTags.forEach(({ name, content }) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (tag) {
        tag.setAttribute('content', content);
      } else {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        tag.setAttribute('content', content);
        document.head.appendChild(tag);
      }
    });

    // Ensure responsive viewport meta
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      viewport.setAttribute('content', 'width=device-width, initial-scale=1');
      document.head.appendChild(viewport);
    }

    // Add/update canonical link
    if (typeof window !== 'undefined') {
      const canonicalUrl = `${window.location.origin}${window.location.pathname}`;
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (canonical) {
        canonical.setAttribute('href', canonicalUrl);
      } else {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        canonical.setAttribute('href', canonicalUrl);
        document.head.appendChild(canonical);
      }
    }

    // Disable context menu (right-click) site-wide and prevent image dragging
    const handleContextMenu = (e: Event) => {
      e.preventDefault();
    };
    const handleDragStart = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target && target.tagName === 'IMG') {
        e.preventDefault();
      }
    };
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);

    // Inject style to further discourage copying/downloading images
    let antiCopyStyle = document.getElementById('anti-copy-style');
    if (!antiCopyStyle) {
      antiCopyStyle = document.createElement('style');
      antiCopyStyle.id = 'anti-copy-style';
      antiCopyStyle.textContent = `
        img { -webkit-user-drag: none; user-select: none; -webkit-user-select: none; }
        body { -webkit-touch-callout: none; }
      `;
      document.head.appendChild(antiCopyStyle);
    }

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, [title, description, ogImage]);

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