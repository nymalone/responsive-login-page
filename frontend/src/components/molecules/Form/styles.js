import styled from 'styled-components';

import { device } from '../../../utils/breakpoints';

export const Container = styled.div`
  width: 50%;
  form {
    display: flex;
    flex-direction: column;

    h1 {
      font-family: 'Playfair Display';
      font-size: 3.75rem;
      line-height: 4.375rem;
      margin: 2rem 0 2.4rem 0;
      display: inline-block;
    }
    > a,
    strong {
      text-decoration: none;
      color: var(--green-dark);
      font-size: 1rem;
      line-height: 2.125rem;
      transition: filter 0.2s;
      &:hover {
        filter: brightness(0.9);
      }
      strong {
        color: var(--green-light);
      }
    }
  }

  @media ${device.laptopL} {
    form {
      h1 {
        font-size: 3.5rem;
      }
      > a,
      strong {
        font-size: 0.84rem;
      }
    }
  }
  @media ${device.laptopM} {
    form {
      > a,
      strong {
        font-size: 0.76rem;
      }
    }
  }

  @media ${device.ipad} {
    width: 80%;
    padding: 2.6rem;
    background: rgb(255 255 255 / 0.8);
    border-radius: 0.625rem;
    margin: 3.125rem;

    form {
      h1 {
        margin: 0rem;
        margin-bottom: 2rem;
      }
      > a, strong {
        font-size: 1.3rem;
      }
    }
  }

  @media ${device.mobileL} {
    width: 90%;
    margin: 1rem;
    padding: 1.2rem 2.2rem;
    form {
      h1 {
        font-size: 3.2rem;
      }
      > a, strong {
        margin:0;
        font-size: 1rem;
      }
    }
  }
  @media ${device.mobileS} {
    padding: 0.5rem 2rem;
    form {
      h1 {
        font-size: 2.9rem;
      }
      > a, strong {
        margin:0;
        font-size: 0.9rem;
      }
    }
  }
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 0.688rem;

  label {
    display: flex;
    align-items: center;
    p {
      font-size: 1rem;
      font-family: 'Inter';
      font-weight: 400;
      margin-left: 0.625rem;
    }
  }

  > a {
    text-decoration: none;
    color: var(--green-dark);
    text-align: left;
    font-size: 1rem;
    line-height: 2.125rem;
  }

  @media ${device.laptopL} {
    label {
      p {
        font-size: 0.9rem;
      }
    }
    a {
      font-size: 0.9rem;
    }
  }

  @media ${device.ipad} {
    label {
      p {
        font-size: 1.3rem;
      }
    }
    a {
      font-size: 1.3rem;
    }
  }

  @media ${device.mobileL} {
    label {
      p {
        font-size: 1rem;
      }
    }
    a {
      font-size: 1rem;
    }
  }
  @media ${device.mobileS} {
    label {
      p {
        font-size: 0.9rem;
      }
    }
    a {
      font-size: 0.9rem;
    }
  }
`;
