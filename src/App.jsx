import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { PrimeReactProvider } from "primereact/api";
import SnackBarContextProvider from "./contexts/SnackBarContextProvider";
import { ModalContextProvider } from "./contexts/ModalContextProvider";

function App() {
  return (
    <>
      <PrimeReactProvider>
        <SnackBarContextProvider>
          <ModalContextProvider>
            <RouterProvider router={router}></RouterProvider>
          </ModalContextProvider>
        </SnackBarContextProvider>
      </PrimeReactProvider>
    </>
  );
}

export default App;
