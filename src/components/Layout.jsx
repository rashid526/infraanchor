import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import { PageCurtain } from './PageCurtain.jsx';
import { MotionConfig } from 'framer-motion';

export function Layout({ pageKey, children }) {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">Skip to content</a>
      <PageCurtain />
      <Header pageKey={pageKey} />
      <main id="main">{children}</main>
      <Footer />
    </MotionConfig>
  );
}
