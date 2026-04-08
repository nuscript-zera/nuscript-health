import { Toaster } from "@/components/ui/toaster"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import ZeraScribe from './pages/ZeraScribe';
import ZeraRCM from './pages/ZeraRCM';
import HowItWorks from './pages/HowItWorks';
import WhyNuScript from './pages/WhyNuScript';
import SolutionsASC from './pages/SolutionsASC';
import SolutionsPractices from './pages/SolutionsPractices';
import ContactDemo from './pages/ContactDemo';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/ZeraScribe" element={<ZeraScribe />} />
          <Route path="/ZeraRCM" element={<ZeraRCM />} />
          <Route path="/HowItWorks" element={<HowItWorks />} />
          <Route path="/WhyNuScript" element={<WhyNuScript />} />
          <Route path="/SolutionsASC" element={<SolutionsASC />} />
          <Route path="/SolutionsPractices" element={<SolutionsPractices />} />
          <Route path="/ContactDemo" element={<ContactDemo />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsOfUse" element={<TermsOfUse />} />
        </Route>
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App
