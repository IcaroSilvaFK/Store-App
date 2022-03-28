import { createContext, useState, useEffect } from "react";

export const PopOutContext = createContext({});

export function PopOutContextProvider({ children }) {
  const [popOut, setPopOut] = useState(false);
  const [infos, setInfos] = useState("");

  function handleOpenPopOut() {
    setPopOut(true);
  }

  function handleClosePopOut() {
    setPopOut(false);
  }

  function handleOpenInfos(info) {
    if (info === "Favorite") {
      setInfos("Favorite");
    }
    if (info === "Cart") {
      setInfos("Cart");
    }
  }

  useEffect(() => {
    (() => {
      window.addEventListener("keydown", (key) => {
        if (key.key === "Escape") {
          handleClosePopOut();
        }
      });
    })();
  }, []);

  return (
    <PopOutContext.Provider
      value={{
        handleClosePopOut,
        handleOpenPopOut,
        popOut,
        infos,
        handleOpenInfos,
      }}
    >
      {children}
    </PopOutContext.Provider>
  );
}
