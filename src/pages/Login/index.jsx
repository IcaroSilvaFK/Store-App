import { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { Input } from "../../components/Input";

import LoginIcon from "../../assets/login.svg";

import "./styles.scss";

export function LoginPage() {
  const [type, setType] = useState("password");

  const props = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    document.title = "Login";
  }, []);

  function handleSingIn(data) {
    console.log(data);
  }

  function handleChangeInput() {
    return type === "text" ? setType("password") : setType("text");
  }

  return (
    <main className="containerlogin">
      <div className="containerMain">
        <div className="containerImage">
          <img
            src={LoginIcon}
            alt="Imagen de Login com duas pessoas carregando uma chave"
          />
        </div>
        <div className="separator"></div>
        <div className="containerForm">
          <h2>Login</h2>
          <FormProvider {...props}>
            <form onSubmit={props.handleSubmit(handleSingIn)}>
              <div className="row">
                <Input
                  name="email"
                  placeholder="Digite seu email"
                  type="email"
                />
              </div>
              <div className="column">
                <div className="row">
                  <Input
                    name="password"
                    placeholder="Digite sua senha"
                    type={type}
                  />
                  {type === "password" ? (
                    <AiFillEye onClick={handleChangeInput} />
                  ) : (
                    <AiFillEyeInvisible onClick={handleChangeInput} />
                  )}
                </div>
                <Link to="/">Esqueceu sua senha ?</Link>
              </div>
              <button type="submit">Logar</button>
            </form>
          </FormProvider>
          <Link to="/">Não possui conta?</Link>
        </div>
      </div>
    </main>
  );
}
