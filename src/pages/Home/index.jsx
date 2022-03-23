import { useEffect } from "react";
import { Link } from "react-router-dom";

import { HiOutlineLogin } from "react-icons/hi";
import { RiArrowRightSFill } from "react-icons/ri";

import "./styles.scss";

export function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <main className="container">
      <h1>
        Olá Bem Vindo a <span>ShoesStore</span>
      </h1>
      <nav>
        <button className="login">
          <Link to="/login">
            Criar conta ou Logar
            <HiOutlineLogin size={15} color="#fff" />
          </Link>
        </button>
        <button className="products">
          <Link to="/products">
            Ir para Produtos
            <RiArrowRightSFill size={15} color="#fff" />
          </Link>
        </button>
      </nav>
    </main>
  );
}
