import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Nav from "./Nav"
import Footer from "./Footer"

function App() {
  return (
    <div>

      <BrowserRouter>
        <Nav />
              <Routes>
                <Route path="/" exact element={<Home />} />

              </Routes>
        < Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;