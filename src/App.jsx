import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          {/* below Route is added to avoid error - [hook.js:608 No routes matched location "/"  Error Component Stack:]*/}
          <Route path="/" element={<Body />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
