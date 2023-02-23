import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Technologies from "../test123/pages/name 123/section 1/Technologies";
import MAINPAGE from "./public/pages/MAINPAGE";
import SignUp from "../test123/pages/SignUp";
import Login from "../test123/pages/Login";
import ContactUs from "../test123/pages/ContactUs";
import Component from "../test123/pages/Component";
import FrameComponent from "./public/pages/FrameComponent";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/main-page":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us":
        title = "";
        metaDescription = "";
        break;
      case "/2":
        title = "";
        metaDescription = "";
        break;
      case "/frame-782":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Technologies />} />

      <Route path="/main-page" element={<MAINPAGE />} />

      <Route path="/sign-up" element={<SignUp />} />

      <Route path="/login" element={<Login />} />

      <Route path="/contact-us" element={<ContactUs />} />

      <Route path="/2" element={<Component />} />

      <Route path="/frame-782" element={<FrameComponent />} />
    </Routes>
  );
}
export default App;
