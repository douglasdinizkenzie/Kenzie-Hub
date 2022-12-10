import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  .modal-content {
    width: 90%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
  }

  .header-container {
    background-color: var(--gray-2);
    border-radius: 4px 4px 0 0;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .form-modal {
    background-color: var(--gray-3);
    height: auto;
    width: 100%;
    border-radius: 0 0 4px 4px;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }

  .form-modal > label {
    color: var(--gray-0);
    font-size: 13px;
  }

  .container-button-form-modal-edit {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 0.5rem;
  }

  .button-save-edit {
    margin-top: 0.5rem;
    width: 100%;
    max-width: 250px;
    padding: 1rem;
    font-size: 1rem;
    color: white;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    background-color: var(--Color-primary);
  }

  .button-save-delete {
    margin-top: 0.5rem;
    width: 100%;
    max-width: 100px;
    padding: 1rem;
    font-size: 1rem;
    color: white;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    background-color: var(--gray-1);
  }
`;
