import { Route, Routes } from "react-router-dom";
import "./App.css";
import Lottie from "react-lottie";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Work from "./components/Work";
import Talk from "./components/Talk";
import About from "./components/About";
import Footer from "./components/Footer";
import { Context } from "./Helpers/Helper";
import loadings from "./images/loading.json";
import { useEffect, useState } from "react";

function App() {
  const [changeMode, setChangeMode] = useState(false);
  const [loadingPage, setLoadingPage] = useState(true);
  useEffect(() => {
    const pageTimer = setTimeout(() => {
      setLoadingPage(false);
    }, [2000]);
    return () => clearTimeout(pageTimer);
  }, [loadingPage]);

  return (
    <div className={`${changeMode ? "bg-white text-black" : "bg-slate-800 text-white"}`}>
      {loadingPage ? (
        <h1>
          {" "}
          <span className="flex items-center gap-0 justify-center p-[25%]">
            Wait! Loading...
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: loadings,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              width={100}
              height={100}
            />
          </span>
        </h1>
      ) : (
        <div>
          <Context.Provider value={{ changeMode, setChangeMode }}>
            <Navigation />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/talk" element={<Talk />} />
            </Routes>
            <Footer />
          </Context.Provider>
        </div>
      )}
    </div>
  );
}

export default App;
