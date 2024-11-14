import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const links = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/dashboard",
    text: "Dashboard",
  },
  {
    url: "/dashboard/profile",
    text: "Profile",
  },
];

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header links={links}></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
