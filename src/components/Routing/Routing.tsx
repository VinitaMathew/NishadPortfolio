import React, { useRef } from "react";
import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "../homePage/HomePage";
import Projects from "../homePage/Projects/Projects";
import "./Routing.scss";

export default function Routing() {
  const ref = useRef<HTMLDivElement>(null);
  const scrollToProjects = () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="routingContainer">
      <HashRouter>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink end to="/" className="link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="link">
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/"
              element={<HomePage workClick={scrollToProjects} projectRef={ref} />}
            />
            {/* <Route path="/about" element={<Projects ref={ref} />} /> */}
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}
