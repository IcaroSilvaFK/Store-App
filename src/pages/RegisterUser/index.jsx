import { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { Input } from "../../components/Input";

import RegisterIcon from "../../assets/register.svg";

import "./styles.scss";

export function RegisterUser() {
  const [type, setType] = useState("password");
  const navigate = useNavigate();

  const props = useForm();

  useEffect(() => {
    document.title = "Registro";
  }, []);

  function handleCreateNewUser(data) {
    console.log(data);
    navigate("/products");
  }

  function handleChangeInput() {
    return type === "password" ? setType("text") : setType("password");
  }

  return (
    <main className="containerRegisterUser">
      <section className="containerImage">
        <img src={RegisterIcon} alt="Icone de registro de usuario" />
      </section>
      <section className="containerMainRegister">
        <div>
          <h2>Create Account</h2>
        </div>
        <div className="containerForm">
          <FormProvider {...props}>
            <form onSubmit={props.handleSubmit(handleCreateNewUser)}>
              <div className="row">
                <Input name="name" placeholder="Nome completo" type="text" />
              </div>
              <div className="row">
                <Input
                  name="email"
                  placeholder="Digite seu Email"
                  type="email"
                />
              </div>
              <div className="row">
                <Input
                  name="email"
                  placeholder="Digite sua Senha"
                  type={type}
                />
                {type === "password" ? (
                  <AiFillEye onClick={handleChangeInput} />
                ) : (
                  <AiFillEyeInvisible onClick={handleChangeInput} />
                )}
              </div>
              <button>Registrar</button>
            </form>
          </FormProvider>
        </div>
      </section>
    </main>
  );
}
