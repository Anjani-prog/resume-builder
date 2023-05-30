import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditResumePage from "./EditResumePage";
import ViewResumePage from "./ViewResumePage";
import "bootstrap/dist/css/bootstrap.css";
import "./custom.css";
const Layout = () => {
  return <div></div>;
};

const NoPage = () => {
  return <div></div>;
};

function App() {
  return (
    <BrowserRouter>
      <h1 className="d-flex justify-content-center align-items-center">
        Resume Builder
      </h1>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route>
          {/* <Route index element={<EditResumePage />} /> */}
          <Route path="view" element={<ViewResumePage />} />
          <Route path="edit" element={<EditResumePage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
