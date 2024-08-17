import React, { Component, Suspense, lazy } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}

const HeroSection = lazy(() => import('./components/Hero/HeroSection'));
const AboutMeSection = lazy(() => import('./components/About/AboutMe'));
const Projects = lazy(() => import('./components/Experience/Projects'));
const ContactMe = lazy(() => import('./components/Contact/ContactMe'));

const App = () => (
  <ErrorBoundary>
    <Suspense fallback={<div>Loading...</div>}>
      <HeroSection />
      <AboutMeSection />
      <Projects />
      <ContactMe />
    </Suspense>
  </ErrorBoundary>
);

export default App;
