import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { PrimeReactProvider } from "primereact/api";
import SnackbarProvider from "react-simple-snackbar";
import SnackBarContextProvider from "./contexts/SnackBarContextProvider";

function App() {
  return (
    <>
      <SnackBarContextProvider>
        <PrimeReactProvider>
          <SnackbarProvider>
            <RouterProvider router={router}></RouterProvider>
          </SnackbarProvider>
        </PrimeReactProvider>
      </SnackBarContextProvider>
    </>
  );
}

export default App;
