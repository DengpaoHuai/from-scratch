import { createBrowserRouter } from "react-router-dom";
import WelcomeScreen from "../pages/WelcomeScreen";
import MainLayout from "../components/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomeScreen></WelcomeScreen>,
  },
  {
    path: "dashboard",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "",
        element: <div>Dashboard</div>,
      },
      {
        path: "profile",
        element: <div>Profile</div>,
      },
    ],
  },
]);

export default router;
