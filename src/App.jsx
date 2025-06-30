import "./App.css";
import Home from "./pages/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import Detail from "./pages/Detail.jsx";
import "./app/globals.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* Navbar */}
      <NavBar />

      {/* Main */}
      <main className="main-content bg-white">
        <Routes>
          <Route
            path="/"
            element={
              <Home />
            }
          />
          <Route
            path="/detail/:id"
            element={
              <Detail />
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
