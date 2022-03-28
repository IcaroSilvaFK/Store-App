import { RiEmotionSadLine } from "react-icons/ri";

import "./styles.scss";

export function NotFound() {
  return (
    <div className="containerNoFound">
      <div>
        <RiEmotionSadLine size={40} color="#4a5568" />
        <h3>Desculpe Infelismente Estamos sem produtos no momento</h3>
      </div>
    </div>
  );
}
