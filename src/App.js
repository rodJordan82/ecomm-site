
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TshirtsPage from "./containers/TshirtsPage";
import TshirtPage from "./containers/TshirtPage";
import TshirtCreatePage from "./containers/TshirtCreatePage";
import Nav from "./containers/Nav";

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                {/* <Route path="/" element={<App />}> */}
                {/* <Route index element={<Home />} /> */}
                <Route path="tshirt" element={<TshirtsPage />} />
                <Route path="tshirts/:id" element={<TshirtPage />} />
                <Route
                    path="tshirts/create"
                    element={<TshirtCreatePage />}
                />
                {/* </Route> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
