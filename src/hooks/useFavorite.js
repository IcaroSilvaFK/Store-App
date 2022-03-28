import { useContext } from "react";

import { FavoriteContext } from "../context/favoriteContext";

export function useFavorites() {
    const data = useContext(FavoriteContext);

    return data;
}