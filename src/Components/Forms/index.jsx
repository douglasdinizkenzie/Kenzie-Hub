import styled from "styled-components";

export const Forms = styled.form`
  background-color: var(--gray-3);
  height: auto;
  width: 100%;
  border-radius: 4px;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  & > p {
    color: var(--gray-0);
    font-size: 1rem;
    font-weight: bold;
    align-self: center;
  }

  .subP {
    color: var(--gray-1);
    align-self: center;
    font-size: 12px;
    font-weight: normal;
  }

  & > label {
    color: var(--gray-0);
    font-size: 13px;
  }

  .Eye-container {
    position: relative;
    width: 100%;
  }

  .eye {
    top: 30%;
    right: 2%;
    position: absolute;
  }

  @media (min-width: 400px) {
    p {
      font-size: 1.2rem;
    }

    .subP {
      font-size: 14px;
    }

    label {
      font-size: 15px;
    }
  }
`;
