import { useContext } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Modal from "react-modal";
import { api } from "../../api/api";
import { Button } from "../../Components/Buttons";
import { Header } from "../../Components/Header";
import { Logo } from "../../Components/Logo";
import { TechList } from "../../Components/TechList";
import { TechContext } from "../../contexts/TechContext";
import { UserContext } from "../../contexts/UserContext";
import { Body, Container, HeaderContents, Infos } from "./styled";

import "../../styles/modal.css";
import { Forms } from "../../Components/Forms";
import { Inputs } from "../../Components/Forms/Inputs";
import { Selects } from "../../Components/Forms/Select";
import { ButtonsForm } from "../../Components/Forms/ButtonsForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormRegisterTechSchema } from "./FormRegisterTechSchema";
import { ErrorMessage } from "../../Components/ErrorMessage";

export function Dashboard() {
  const [module, setModule] = useState("");

  const { user, setUser, logOut } = useContext(UserContext);
  const { tech, closeModal, openModal, modalIsOpen, newTechSubmit } =
    useContext(TechContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(FormRegisterTechSchema),
  });

  async function getUserModule() {
    let token = localStorage.getItem("@TOKEN");

    let request = await api.get("/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setModule(request.data.course_module);
  }
  getUserModule();

  return (
    <>
      <Header>
        <HeaderContents>
          <Logo>Kenzie Hub</Logo>
          <Button onClick={() => logOut()} normalbutton="normal" to={"/"}>
            Sair
          </Button>
        </HeaderContents>
      </Header>
      <Container borderbottom={"border"}>
        <Infos>
          <h1>Olá, {user.name}</h1>
          <p>{module}</p>
        </Infos>
      </Container>
      <Container>
        <Body>
          <div className="container-add">
            <h1>Tecnologias</h1>
            <Button onClick={() => openModal()} normalbutton="AddButton">
              +
            </Button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Modal"
              overlayClassName="modal-overlay"
              className="modal-content"
            >
              <div className="header-container">
                <p>Cadastrar tecnologia</p>
                <button onClick={() => closeModal()}>x</button>
              </div>
              <form
                onSubmit={handleSubmit(newTechSubmit)}
                className="form-modal"
              >
                <label htmlFor="title">Nome</label>
                <Inputs
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Nome da tecnologia"
                  {...register("title")}
                />
                {errors.title?.message && (
                  <ErrorMessage aria-label="error">
                    {errors.title.message}
                  </ErrorMessage>
                )}

                <label htmlFor="status">Selecione o status</label>
                <Selects id="status" {...register("status")}>
                  <option value="">Selecionar status</option>
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </Selects>
                {errors.status?.message && (
                  <ErrorMessage aria-label="error">
                    {errors.status.message}
                  </ErrorMessage>
                )}
                <ButtonsForm type="submit" buttonStyle="primary">
                  Cadastrar tecnologia
                </ButtonsForm>
              </form>
            </Modal>
          </div>

          <TechList />
        </Body>
      </Container>
    </>
  );
}
