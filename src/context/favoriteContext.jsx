import { createContext, useState, useEffect } from "react";

export const FavoriteContext = createContext({});

export function FavoriteContextProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favoritesLocal = localStorage.getItem("favorites");

    if (favoritesLocal && favoritesLocal.length > 0) {
      setFavorites(JSON.parse(favoritesLocal));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  console.log(favorites);

  function handleAddNewFavorite(favoriteItem) {
    setFavorites([...favorites, favoriteItem]);
  }

  function handleRemoveFavorite(favoriteItem) {
    const newFavorites = favorites.filter(
      (element) => element.id !== favoriteItem
    );
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
  return (
    <FavoriteContext.Provider
      value={{ favorites, handleAddNewFavorite, handleRemoveFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}
