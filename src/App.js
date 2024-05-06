import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import Decode from "./pages/StegImg/Decode";
import Encode from "./pages/StegImg/Encode";
import StegImg from "./pages/StegImg/StegImg";
import StegoState from "./pages/StegImg/StegoState";
import StegText from "./pages/Stega/StegText";
import Checker from "./pages/checker";
import Deception from "./pages/de";
import Encryption from "./pages/en";
import Hasher from "./pages/hasher";
import PasswordGenerator from "./pages/pg";
import Quiz from "./pages/quizzes";
import Tools from "./pages/tools";
import Whois from "./pages/whois/whois";
function App() {
  return (
    <div>
      <StegoState>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/checker" element={<Checker />} />
            <Route path="/pg" element={<PasswordGenerator />} />
            <Route path="/en" element={<Encryption />} />
            <Route path="/de" element={<Deception />} />
            <Route path="/hasher" element={<Hasher />} />
            <Route path="/tools/geolocator" element={<Whois />} />
            <Route path="/tools/secret" element={<StegText />} />
            <Route path="/tools/Steganography" element={<StegImg />} />
            <Route path="/tools/Steganography/encode" element={<Encode />} />
            <Route path="/tools/Steganography/decode" element={<Decode />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </StegoState>
    </div>
  );
}

export default App;
