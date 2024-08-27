import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import SecondPage from "./components/SecondPage.jsx";
import ThirdPage from "./components/ThirdPage.jsx";
import Services from "./components/Services.jsx";
import Work from "./components/Work.jsx";
import Packages from "./components/Packages.jsx";
import Branding from "./components/Branding.jsx";
import Questions from "./components/Questions.jsx";
import Contact from "./components/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/second",
    element: <SecondPage />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/third",
    element: <ThirdPage />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/services",
    element: <Services />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/work",
    element: <Work />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/packages",
    element: <Packages />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/branding",
    element: <Branding />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/faqs",
    element: <Questions />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <div>404 Not Found</div>,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
