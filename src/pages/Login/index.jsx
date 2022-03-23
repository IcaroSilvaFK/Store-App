import { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { Input } from "../../components/Input";

import LoginIcon from "../../assets/login.svg";

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
    <main>
      <section>
        <h2>Seção de Login</h2>
      </section>
      <div>
        <div>
          <img
            src={LoginIcon}
            alt="Imagen de Login com duas pessoas carregando uma chave"
          />
        </div>
        <div>
          <FormProvider {...props}>
            <form onSubmit={props.handleSubmit(handleSingIn)}>
              <div>
                <Input
                  name="email"
                  placeholder="Digite seu email"
                  type="email"
                />
              </div>
              <div>
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
              <button type="submit">Logar</button>
            </form>
          </FormProvider>
        </div>
      </div>
    </main>
  );
}
