import { createContext } from "react";

export const ModalContext = createContext({
  displayModal: {
    display: false,
    identifier: "",
  },
  modalDisplayHandler: (identifier) => {},
  modalHideHandler: () => {},
});
