import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./layouts/MainLayout.jsx";
import HomePage from "./components/HomePage.jsx";
import About from "./components/About.jsx";
import ProfessionalJourny from "./components/ProfessionalJourny.jsx";
import SkillSection from "./components/SkillSection.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "professional",
        Component: ProfessionalJourny,
      },
      {
        path: "skill",
        Component: SkillSection,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
