import { BiCommentError } from "react-icons/bi";

import "./styles.scss";

export function ErrorComponent() {
  return (
    <div className="containerError">
      <BiCommentError size={30} color="#F56565" />
      <h2>Desculpe algo inesperado aconteceu</h2>
    </div>
  );
}
