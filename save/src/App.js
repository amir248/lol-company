import { Routes, Route, Link } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import About from "./routes/About";
// import Contact from "./routes/Contact";
// import Home from "./routes/Home";
// import Project from "./routes/Project";

const App = () => {

  return (
    <>

      <div>One text</div>
    
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>

      <hr />
      <Routes>
        <Route path="/" element={<div>LOL_ok</div>}></Route>
        <Route path="/about" element={<div>oLl</div>}></Route>
        <Route path="/project" element={<div>fsd</div>}></Route>
        <Route path="/contact" element={<div>My</div>}></Route>
      </Routes>
    </>
  );
};

export default App;
