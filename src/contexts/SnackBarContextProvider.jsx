import { createContext } from "react";
import CustomSnackBar from "../components/CustomSnackBar";
import { useState } from "react";

export const SnackBarContext = createContext(null);

const SnackBarContextProvider = ({ children }) => {
  const [display, setDisplay] = useState(false);

  const showSnack = () => {
    setDisplay(true);
  };

  return (
    <SnackBarContext.Provider value={{ showSnack }}>
      {children}
      {display && (
        <CustomSnackBar
          message={"Hello from the snackbar!"}
          close={() => {
            setDisplay(false);
          }}
        />
      )}
    </SnackBarContext.Provider>
  );
};

export default SnackBarContextProvider;
