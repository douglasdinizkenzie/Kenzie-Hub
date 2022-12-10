import "../../styles/modal.css";
import { ModalContainer } from "./styled";

export function ModalComponent({ isOpenModal, setIsOpenModal, children }) {
  if (isOpenModal) {
    return (
      <>
        <ModalContainer>
          <div className="modal-content">
            <div className="header-container">
              <p>Tecnologia detalhes</p>
              <button onClick={() => setIsOpenModal(false)}>x</button>
            </div>
            {children}
          </div>
        </ModalContainer>
      </>
    );
  } else {
    return;
  }
}
