import { useState } from "react";
import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { TechContext } from "../../contexts/TechContext";
import { ModalComponent } from "../modal";
import { CardTech } from "./styled";
import { Inputs } from "../Forms/Inputs";
import { Selects } from "../Forms/Select";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editModalSchema } from "./editModalSchema";
import { ErrorMessage } from "../ErrorMessage";
import { api } from "../../api/api";
import { toast } from "react-toastify";

export function TechCard({ elem }) {
  const { removeTech, tech, setTech } = useContext(TechContext);
  const [isOpenModal, setIsOpenModal] = useState(false);
  let token = localStorage.getItem("@TOKEN");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(editModalSchema),
  });

  async function editTech(data) {
    try {
      const request = await api.put(`/users/techs/${elem.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(request.data);
      toast.success("Editado com sucesso!");
      setIsOpenModal(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <CardTech onClick={() => setIsOpenModal(true)}>
        <p>{elem.title}</p>
        <div>
          <p>{elem.status}</p>
        </div>
      </CardTech>
      <ModalComponent isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
        <form onSubmit={handleSubmit(editTech)} className="form-modal">
          <label htmlFor="">Nome do projeto</label>
          <Inputs disabled type="text" placeholder={elem.title} />
          <label htmlFor="">Status</label>
          <Selects {...register("status")} id="status">
            <option value="">Altere o status</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Selects>
          {errors.status?.message && (
            <ErrorMessage>{errors.status.message}</ErrorMessage>
          )}
          <div className="container-button-form-modal-edit">
            <button type="submit" className="button-save-edit">
              Salvar alterações
            </button>
            <button
              type="button"
              onClick={() => removeTech(elem.id)}
              className="button-save-delete"
            >
              Excluir
            </button>
          </div>
        </form>
      </ModalComponent>
    </>
  );
}
