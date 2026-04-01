/**
 * App.jsx — Full routing structure
 * Liam Hilton Designs
 *
 * FOLDER STRUCTURE CHANGE:
 * Create src/pages/ folder for all page components.
 * Components stay in src/components/.
 * Pages are thin wrappers that compose components.
 * App.jsx handles routing only — no layout logic here.
 *
 * FILES TO CREATE:
 * src/pages/CaseStudyPage.jsx  ← the main build today
 * src/pages/WorkPage.jsx       ← simple wrapper (built below)
 * src/pages/ServicesPage.jsx   ← simple wrapper (built below)
 * src/pages/ContactPage.jsx    ← simple wrapper (built below)
 *
 * ScrollToTop renders null but scrolls to top on every route change.
 * Place it as the FIRST child inside BrowserRouter.
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar         from './components/Navbar/Navbar'
import Footer         from './components/Footer/Footer'
import ScrollToTop    from './components/ScrollToTop'
import HeroSection    from './components/Sections/HeroSection'
import MarqueeStrip   from './components/Sections/MarqueeStrip'
import ServicesSection from './components/Sections/ServicesSection'
import WorkSection    from './components/Sections/WorkSection'
import ProcessSection from './components/Sections/ProcessSection'
import CaseStudyPage  from './pages/CaseStudyPage'
import WorkPage       from './pages/WorkPage'
import ServicesPage   from './pages/ServicesPage'
import ContactPage    from './pages/ContactPage'
import { tools, valueProps } from './constants/marqueeData'
import './styles/variables.css'
import './App.css'

// ─── Homepage ─────────────────────────────────────────────────────────────────

function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeStrip items={valueProps} variant="values" speed="medium" separator="·" />
      <MarqueeStrip items={tools} variant="tools" speed="slow" separator="·" direction="right" />
      <ServicesSection />
      <WorkSection />
      <ProcessSection />
    </>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"           element={<HomePage />}     />
          <Route path="/work"       element={<WorkPage />}     />
          <Route path="/work/:id"   element={<CaseStudyPage />} />
          <Route path="/services"   element={<ServicesPage />} />
          <Route path="/contact"    element={<ContactPage />}  />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App