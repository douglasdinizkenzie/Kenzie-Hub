import { useState } from "react";

import { api } from "../../api/api";
import { Button } from "../../Components/Buttons";
import { Header } from "../../Components/Header";
import { Logo } from "../../Components/Logo";
import { Body, Container, HeaderContents, Infos } from "./styled";

export function Dashboard({ user, setUser }) {
  const [module, setModule] = useState("");

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

  function logOut() {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUser(null);
  }

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
          <h1>Olá, {user}</h1>
          <p>{module}</p>
        </Infos>
      </Container>
      <Container>
        <Body>
          <h1>Que pena! Estamos em desenvolvimento :(</h1>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades!
          </p>
        </Body>
      </Container>
    </>
  );
}
