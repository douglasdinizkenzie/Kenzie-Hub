import styled from "styled-components";

export const CardTech = styled.li`
  background-color: var(--gray-4);
  padding: 1rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  cursor: pointer;

  & > p {
    font-size: 15px;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  & > div > p {
    color: var(--gray-0);
    font-size: 12px;
  }

  @media (max-width: 540px) {
    padding: 1rem 0.5rem;
  }
`;
