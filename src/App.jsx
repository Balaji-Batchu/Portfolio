import AboutMeSection from "./components/About/AboutMe"
import ContactMe from "./components/Contact/ContactMe"
import { Projects } from "./components/Experience/Projects"
import HeroSection from "./components/Hero/HeroSection"

const App = () => {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <Projects />
      <ContactMe />
    </>
  )
}
export default App