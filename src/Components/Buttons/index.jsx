import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  ${({ normalbutton }) => {
    switch (normalbutton) {
      case "normal":
        return css`
          background-color: var(--gray-3);
          color: var(--gray-0);
          padding: 0.7rem 1rem;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          text-decoration: none;

          @media (max-width: 400px) {
            padding: 0.5rem 1.5rem;
          }
        `;

      case "form":
        return css`
          margin-top: 0.5rem;
          width: 100%;
          padding: 1rem;
          font-size: 1rem;
          color: white;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          background-color: var(--gray-1);
          text-decoration: none;
          text-align: center;
        `;
    }
  }}
`;
