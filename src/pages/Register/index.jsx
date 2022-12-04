import { Button } from "../../Components/Buttons";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import {
  ContainerForms,
  DivContainerForm,
} from "../../Components/ContainerForms";
import { Forms } from "../../Components/Forms";
import { Inputs } from "../../Components/Forms/Inputs";
import { Selects } from "../../Components/Forms/Select";
import { Logo } from "../../Components/Logo";
import { DivRegister } from "./styled";
import { useState } from "react";
import { ButtonsForm } from "../../Components/Forms/ButtonsForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormRegisterSchema } from "./FormRegisterSchema";
import { ErrorMessage } from "../../Components/ErrorMessage";
import { toast } from "react-toastify";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";

export function Register() {
  const [isHidePassword, setIsHidePassword] = useState(true);
  const [isHidePasswordConfirm, setIsHidePasswordConfirm] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(FormRegisterSchema),
  });

  async function registerSubmit(data) {
    try {
      setIsDisabled(true);

      let request = await api.post("/users", {
        email: data.email,
        password: data.password,
        name: data.name,
        bio: data.bio,
        contact: data.contact,
        course_module: data.course_module,
      });

      toast.success("Registrado!");
      reset();
      navigate("/");
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
        <DivRegister>
          <Logo>Kenzie Hub</Logo>
          <Button normalbutton={"normal"} to={"/"}>
            Voltar
          </Button>
        </DivRegister>
        <Forms onSubmit={handleSubmit(registerSubmit)}>
          <p>Crie sua conta</p>
          <p className="subP">Rapido e grátis, vamos nessa</p>

          <label htmlFor="name">Nome</label>
          <Inputs
            id="name"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
          {errors.name?.message && (
            <ErrorMessage aria-label="error">
              {errors.name.message}
            </ErrorMessage>
          )}

          <label htmlFor="email">Email</label>
          <Inputs
            id="email"
            placeholder="Digite aqui seu Email"
            {...register("email")}
          />
          {errors.email?.message && (
            <ErrorMessage aria-label="error">
              {errors.email.message}
            </ErrorMessage>
          )}

          <label htmlFor="password">Senha</label>
          <div className="Eye-container">
            <Inputs
              type={isHidePassword ? "password" : "text"}
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

          <label htmlFor="confirmPassword">Confirmar senha</label>
          <div className="Eye-container">
            <Inputs
              type={isHidePasswordConfirm ? "password" : "text"}
              id="confirmPassword"
              placeholder="Digite novamente a senha"
              {...register("confirmPassword")}
            />
            <div
              className="eye"
              onClick={() => setIsHidePasswordConfirm(!isHidePasswordConfirm)}
            >
              {isHidePasswordConfirm ? (
                <AiFillEye cursor="pointer" size={20} color="white" />
              ) : (
                <AiFillEyeInvisible cursor="pointer" size={20} color="gray" />
              )}
            </div>
          </div>
          {errors.confirmPassword?.message && (
            <ErrorMessage aria-label="error">
              {errors.confirmPassword.message}
            </ErrorMessage>
          )}

          <label htmlFor="bio">Bio</label>
          <Inputs
            id="bio"
            placeholder="Fale um pouco sobre você"
            {...register("bio")}
          />
          {errors.bio?.message && (
            <ErrorMessage aria-label="error">{errors.bio.message}</ErrorMessage>
          )}

          <label htmlFor="contact">Contato</label>
          <Inputs
            id="contact"
            placeholder="Opção de contato"
            {...register("contact")}
          />
          {errors.contact?.message && (
            <ErrorMessage aria-label="error">
              {errors.contact.message}
            </ErrorMessage>
          )}

          <label htmlFor="course_module">Selecionar módulo</label>
          <Selects id="course_module" {...register("course_module")}>
            <option value="">Escolha um módulo</option>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo (Backend Avançado)
            </option>
          </Selects>
          {errors.course_module?.message && (
            <ErrorMessage aria-label="error">
              {errors.course_module.message}
            </ErrorMessage>
          )}
          <ButtonsForm
            disabled={isDisabled}
            type="submit"
            buttonStyle={isDisabled ? "red-negative" : "primary"}
          >
            {isDisabled ? "Cadastrando" : "Cadastrar"}
          </ButtonsForm>
        </Forms>
      </DivContainerForm>
    </ContainerForms>
  );
}
