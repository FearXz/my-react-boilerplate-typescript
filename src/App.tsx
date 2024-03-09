import "./assets/css/mybootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyMain from "./components/MyMain";
import ANewComponent from "./components/ANewComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MyMain />
              <ANewComponent />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
