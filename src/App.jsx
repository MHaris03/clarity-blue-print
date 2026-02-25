import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Page/Home";
import OracleDeck from "./Page/OracleDeck";
import RemembranceJournal from "./Page/RemembranceJournal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* All pages use Layout */}
        <Route path="/" element={<Layout />}>
          {/* Home page */}
          <Route index element={<Home />} />

          {/* Other pages */}
          <Route path="remembrance-journal" element={<RemembranceJournal />} />
          <Route path="oracle-deck" element={<OracleDeck />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;