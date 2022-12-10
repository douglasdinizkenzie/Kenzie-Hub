import styled from "styled-components";

export const ListTech = styled.ul`
  width: 100%;
  height: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 4px;
  background-color: var(--gray-3);

  @media (max-width: 540px) {
    padding: 1rem 0.5rem;
  }
`;
