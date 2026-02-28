import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Page/Home";
import RelationalArchitecturePage from "./Page/Services/RelationalArchitecture";
import ProfessionalAlignment from "./Page/Services/ProfessionalAlignment";
import ClarityAI from "./Page/Services/ClarityAi";
import Executive from "./Page/Services/Executive";
import OperatingSyatem from "./Page/Services/OperatingSyatem";
import AboutPage from "./Page/About";
import ContactPage from "./Page/ContactUs";
import ScrollToTop from "./components/Scroll";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="relational-architecture" element={<RelationalArchitecturePage />} />
          <Route path="professional-aligement" element={<ProfessionalAlignment />} />
          <Route path="clarity-ai" element={<ClarityAI />} />
          <Route path="executive-aligement" element={<Executive />} />
          <Route path="operating-system" element={<OperatingSyatem />} />
          <Route path="about-us" element={<AboutPage />} />
          <Route path="contact-us" element={<ContactPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;