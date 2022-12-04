import styled, { css } from "styled-components";

export const ButtonsForm = styled.button`
  margin-top: 0.5rem;
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  color: white;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  ${({ buttonStyle }) => {
    switch (buttonStyle) {
      case "red-negative":
        return css`
          background-color: var(--Color-primary-Negative);
        `;
      case "primary":
        return css`
          background-color: var(--Color-primary);
        `;

      case "gray-button":
        return css`
          background-color: var(--gray-1);
        `;
    }
  }}
`;
