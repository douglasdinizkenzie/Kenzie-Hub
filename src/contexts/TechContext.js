import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../api/api";
import Modal from "react-modal";
Modal.setAppElement("#root");

export const TechContext = createContext({});

export function TechProvider({ children }) {
  const [tech, setTech] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  let token = localStorage.getItem("@TOKEN");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    async function getTech() {
      let request = await api.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTech(request.data.techs);
    }
    getTech();
  }, []);

  async function removeTech(id) {
    try {
      const techToRemove = await api.delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("removido com sucesso");
      let techFiltred = tech.filter((elem) => {
        return elem.id !== id;
      });

      setTech(techFiltred);
    } catch (error) {
      console.log(error);
    }
  }

  async function newTechSubmit(data) {
    try {
      const addTech = await api.post("/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(addTech);
      toast.success("Registrado!");
      setTech([...tech, addTech.data]);
      setIsOpen(false);
    } catch (error) {
      console.log(error);
      toast.error("Nome de tecnologia já existente!");
    }
  }

  return (
    <TechContext.Provider
      value={{
        tech,
        setTech,
        removeTech,
        openModal,
        closeModal,
        modalIsOpen,
        setIsOpen,
        newTechSubmit,
      }}
    >
      {children}
    </TechContext.Provider>
  );
}
