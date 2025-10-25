import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Markets from "./pages/Markets";
import MediaInnovation from "./pages/MediaInnovation";
import Insights from "./pages/Insights";
import Founders from "./pages/Founders";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work/>} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/mediainnovation" element={<MediaInnovation />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/founders" element={<Founders />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
