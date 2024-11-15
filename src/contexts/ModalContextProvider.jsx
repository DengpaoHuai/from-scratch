import { createContext } from "react";
import CustomModal from "../components/CustomModal";
import { useState } from "react";
import { useContext } from "react";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

const ModalContextProvider = ({ children }) => {
  const [display, setDisplay] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const displayModal = (title, content) => {
    setTitle(title);
    setContent(content);
    setDisplay(true);
  };

  const closeModal = () => {
    setDisplay(false);
  };

  return (
    <ModalContext.Provider value={{ displayModal }}>
      {children}
      {display && (
        <CustomModal title={title} message={content} close={closeModal} />
      )}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalContextProvider };
