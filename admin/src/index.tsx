import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AuthTemplate from "./templates/AuthTemplate";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/configStore";
import AdminLayout from "./HOC/Layout";
import ManageProduct from "./pages/ManageProduct";
import ManageOrder from "./pages/ManageOrder";
import ManageUser from "./pages/ManageUser";
import Setting from "./pages/Setting";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}></PersistGate>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<AdminLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/manage-product" element={<ManageProduct />}></Route>
          <Route path="/manage-order" element={<ManageOrder />}></Route>
          <Route path="/manage-user" element={<ManageUser />}></Route>
          <Route path="/setting" element={<Setting />}></Route>
        </Route>
        <Route path="" element={<AuthTemplate />}>
          <Route path="/login" element={<Login />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
