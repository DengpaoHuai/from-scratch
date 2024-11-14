import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";

function App() {
  return (
    <>
      <PrimeReactProvider>
        <RouterProvider router={router}></RouterProvider>
      </PrimeReactProvider>
    </>
  );
}

export default App;
