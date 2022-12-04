import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../api/api";
import { Button } from "../../Components/Buttons";
import {
  ContainerForms,
  DivContainerForm,
} from "../../Components/ContainerForms";
import { ErrorMessage } from "../../Components/ErrorMessage";
import { Forms } from "../../Components/Forms";
import { ButtonsForm } from "../../Components/Forms/ButtonsForm";
import { Inputs } from "../../Components/Forms/Inputs";
import { Logo } from "../../Components/Logo";
import { FormLoginSchema } from "./FormLoginSchema";
import { DivLogin } from "./styled";

export function Login({ setUser }) {
  const [isHidePassword, setIsHidePassword] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(FormLoginSchema),
  });

  async function loginSubmit(data) {
    try {
      setIsDisabled(true);
      let request = await api.post("/sessions", data);
      toast.success(`Seja bem vindo ${request.data.user.name}!`);
      localStorage.setItem("@TOKEN", request.data.token);
      localStorage.setItem("@USERID", request.data.user.id);
      setUser(request.data.user.name);
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error("Ops, alguma coisa deu errado!");
    } finally {
      setIsDisabled(false);
    }
  }

  return (
    <ContainerForms>
      <DivContainerForm>
        <DivLogin>
          <Logo>Kenzie Hub</Logo>
        </DivLogin>

        <Forms onSubmit={handleSubmit(loginSubmit)}>
          <p>Login</p>

          <label htmlFor="email">E-mail</label>
          <Inputs
            name="email"
            id="email"
            placeholder="Insira seu email"
            {...register("email")}
          />
          {errors.email?.message && (
            <ErrorMessage aria-label="error">
              {errors.email.message}
            </ErrorMessage>
          )}

          <label htmlFor="">Senha</label>
          <div className="Eye-container">
            <Inputs
              type={isHidePassword ? "password" : "text"}
              name="password"
              id="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            <div
              className="eye"
              onClick={() => setIsHidePassword(!isHidePassword)}
            >
              {isHidePassword ? (
                <AiFillEye cursor="pointer" size={20} color="white" />
              ) : (
                <AiFillEyeInvisible cursor="pointer" size={20} color="gray" />
              )}
            </div>
          </div>
          {errors.password?.message && (
            <ErrorMessage aria-label="error">
              {errors.password.message}
            </ErrorMessage>
          )}

          <ButtonsForm
            disabled={isDisabled}
            type="submit"
            buttonStyle={isDisabled ? "red-negative" : "primary"}
          >
            {isDisabled ? "Entrando" : "Entrar"}
          </ButtonsForm>

          <p className="subP">Ainda não possui uma conta?</p>

          <Button to={"/register"} normalbutton={"form"}>
            Cadastre-se
          </Button>
        </Forms>
      </DivContainerForm>
    </ContainerForms>
  );
}
