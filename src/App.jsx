import { Routes, Route } from "react-router-dom";
import Mainlayout from "./layout/Mainlayout"
import Home from "./pages/Home"
import Document from "./pages/Document";
import Interview from "./pages/Interview";
import Photographs from "./pages/Gallery";
import Contact from "./pages/Contact";



const App = () => {
  return (
    <>
    <Routes>
      <Route

       path="/" element={<Mainlayout/>}>
      <Route index element={<Home/>} />
      <Route path="/documents" element={<Document/>} />
      <Route path="/interviews" element={<Interview/>} />
      <Route path="/gallery" element={<Photographs/>} />
      <Route path="/contact" element={<Contact/>} />

      </Route>
    </Routes>
    </>
  )
}

export default App