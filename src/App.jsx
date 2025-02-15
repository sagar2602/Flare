import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          {/* below Route is added to avoid error - [hook.js:608 No routes matched location "/"  Error Component Stack:]*/}
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/my-profile" element={<Profile />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
