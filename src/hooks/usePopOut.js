import { useContext } from "react";

import { PopOutContext } from "../context/popOut";

export function usePopOut() {
    const data = useContext(PopOutContext);

    return data;
}