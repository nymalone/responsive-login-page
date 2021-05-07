import styled from 'styled-components';

import { device } from '../../../utils/breakpoints';

export const Top = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  max-width: 43.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.87rem;
  font-family: 'Playfair';
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.04rem;

  img {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 0.43rem;
  }

  div {
    display: flex;
    align-items: center;
  }

  @media ${device.desktop} {
    width: 50%;
    max-width: 100%;
    font-size: 1.2rem;
    img {
      width: 3.3rem;
      height: 3.3rem;
      margin-right: 0.43rem;
    }
  }

  @media ${device.laptopL} {
    font-size: 0.9rem;
    img {
      width: 2.5rem;
      height: 2.5rem;
      margin-right: 0.43rem;
    }
  }
  @media ${device.laptopM} {
    font-size: 0.85rem;
    img {
      width: 2.3rem;
      height: 2.3rem;
      margin-right: 0.43rem;
    }
  }
  @media ${device.ipad} {
    width: 100%;
    max-width: 100%;
    color: var(--green-light);
    font-size: 1.4rem;

    img {
      width: 3.5rem;
      height: 3.5rem;
      margin-right: 0.43rem;
    }
  }
  @media ${device.tablet} {
    font-size: 1.15rem;

    img {
      width: 3.5rem;
      height: 3.5rem;
      margin-right: 0.43rem;
    }
  }
  @media ${device.mobileL} {
    font-size: 0.8rem;

    img {
      width: 3rem;
      height: 3rem;
      margin-right: 0.43rem;
    }
  }
  @media ${device.mobileS} {
    font-size: 0.75rem;
    img {
      width: 2.2rem;
      height: 2.2rem;
      margin-right: 0.43rem;
    }
  }
`;

export const Cart = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--green-lighter);
  width: 2.5rem;
  height: 2.5rem;
  border: 0;
  outline: none;
  border-radius: 0.375rem;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
  > svg {
    color: var(--green-shape);
  }
  @media ${device.desktop} {
    width: 3.3rem;
    height: 3.3rem;
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  @media ${device.laptopL} {
    width: 2.5rem;
    height: 2.5rem;
    svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
  @media ${device.laptopM} {
    width: 2.4rem;
    height: 2.4rem;
    svg {
      width: 1.1rem;
      height: 1.1rem;
    }
  }
  @media ${device.ipad} {
    width: 3.6rem;
    height: 3.6rem;
    background: rgb(255 255 255 / 0.7);
    svg {
      width: 1.625rem;
      height: 1.625rem;
    }
  }
  @media ${device.tablet} {
    width: 3.3rem;
    height: 3.3rem;
    svg {
      width: 1.58rem;
      height: 1.58rem;
    }
  }
  @media ${device.mobileL} {
    width: 2.6rem;
    height: 2.6rem;
    svg {
      width: 1.4rem;
      height: 1.4rem;
    }
  }
  @media ${device.mobileM} {
    width: 2.3rem;
    height: 2.3rem;
    svg {
      width: 1.3rem;
      height: 1.3rem;
    }
  }
  @media ${device.mobileS} {
    width: 2rem;
    height: 2rem;
    svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;
