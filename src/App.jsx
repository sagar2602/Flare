import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      {/* <h1 className="text-red-400">Hello World!</h1> */}
      <BrowserRouter basename="/">
        <Routes>
          {/* below Route is added to avoid error - [hook.js:608 No routes matched location "/"  Error Component Stack:]*/}
          <Route path="/" element={<div></div>}></Route>
          <Route path="/login" element={<div>Login Page Jsx component</div>}></Route>
        </Routes>
      </BrowserRouter>
      <NavBar />
    </>
  );
}

export default App;
