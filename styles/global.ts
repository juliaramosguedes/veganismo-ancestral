import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    body {
        font: 300 16px Roboto, sans-serif;
    }

    h2 {
      font-weight: 800;
      font-size: 1.875rem;
      line-height: 2.25rem;
    }

    h2 {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 2rem;
    }

    p {
        margin-bottom: 1rem;
        line-height: 1.5rem;
    }

    a {
        color: inherit;
        text-decoration: none;
        transition: color 0.3s;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
          text-underline-position: under;
        }
    }

    button {
        cursor: pointer;
    }
`;
