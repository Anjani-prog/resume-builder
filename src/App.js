import React from "react";
import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditResumePage from "./Pages/EditResumePage";
import ViewResumePage from "./Pages/ViewResumePage";
import "bootstrap/dist/css/bootstrap.css";
import "./Styles/custom.css";
import { Provider } from "react-redux";
import store from "./Redux/store";

const Layout = () => {
  return <div></div>;
};

const NoPage = () => {
  return <div></div>;
};

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <h1 className="d-flex justify-content-center align-items-center text-secondary my-4">
          Resume Builder
        </h1>
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
          <Route>
            <Route index element={<EditResumePage />} />
            <Route path="view" element={<ViewResumePage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
