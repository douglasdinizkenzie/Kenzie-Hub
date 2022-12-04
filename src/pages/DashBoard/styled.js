import styled, { css } from "styled-components";

export const HeaderContents = styled.div`
  max-width: 1100px;
  width: 100%;
  padding: 0rem 0.5rem;
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin: 0 auto;
  z-index: 1;
`;

export const Container = styled.div`
  ${({ borderbottom }) => {
    switch (borderbottom) {
      case "border":
        return css`
          border-bottom: 1px solid var(--gray-3);
        `;

      case "none":
        return css`
          border-bottom: none;
        `;
    }
  }}

  margin-top: 80px;
  padding: 0rem 0.5rem;
`;

export const Infos = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  width: 100%;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  padding: 2rem 0rem;

  & > h1 {
    font-size: 18px;
    color: var(--gray-0);
  }

  & > p {
    color: var(--gray-1);
    font-size: 13px;
  }

  @media (min-width: 600px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Body = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  width: 100%;
  gap: 1rem;
  display: flex;
  flex-direction: column;

  & > h1 {
    font-size: 18px;
    color: var(--gray-0);
  }

  & > p {
    color: var(--gray-0);
    font-size: 13px;
  }
`;
