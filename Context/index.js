import { createContext } from "react";

export const ModalContext = createContext({
  displayModal: {
    display: false,
    identifier: "",
  },
  modalDisplayHandler: (identifier) => {},
  modalHideHandler: () => {},
});

export const AuthToken = createContext({
  authToken: false,
  authTokenProvider: () => {},
});
