import styled from "styled-components";

export const Selects = styled.select`
  background-color: var(--gray-2);
  border-radius: 4px;
  color: var(--gray-0);
  padding: 1rem;
  border: 1px solid transparent;
  cursor: pointer;

  :focus {
    border: 1px solid var(--gray-0);
  }
`;
