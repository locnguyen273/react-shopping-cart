import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import { store, persistor } from "./redux/configStore";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import UserTemplate from "./template/UserTemplate";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import Detail from "./pages/Detail";
import News from "./pages/News";
import StoreSystem from "./pages/StoreSystem";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthTemplate from "./template/AuthTemplate";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./template/ProtectedRoute";
import "swiper/css";
import "swiper/css/navigation";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <BrowserRouter>
        <Routes>
          <Route path="" element={<UserTemplate />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile />}></Route>
            </Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/product/:id" element={<Detail />}></Route>
            <Route path="/news" element={<News />}></Route>
            <Route path="/he-thong-cua-hang" element={<StoreSystem />}></Route>
            <Route path="*" element={<Home />}></Route>
          </Route>
          <Route path="" element={<AuthTemplate />}>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

reportWebVitals();
