import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from "./pages/Contacts";
import Contact from "./pages/Contact";

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Contacts />} />
            <Route path="/contact/" element={<Contact />} />
            <Route path="/contact/:id" element={<Contact />} />
        </Routes>
    </BrowserRouter>
);

export default App;
