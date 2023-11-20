import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Nav from "./Nav"
import Footer from "./Footer"

function App() {
  return (
    <div>

      <BrowserRouter>

        <Nav />
        <main>

          <div className="album py-5 bg-light">
            <div className="container">
              <Routes>
                <Route path="/" exact element={<Home />} />

              </Routes>
            </div>
          </div>

        </main>
        < Footer />

      </BrowserRouter>

    </div>
  );
}

export default App;