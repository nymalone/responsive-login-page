import styled from 'styled-components';

import { device } from '../../../utils/breakpoints';

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  padding: 0.9rem;
  div {
    a {
      cursor: pointer;
      transition: filter 0.2s;
      font-size: 0.85rem;
      &:hover {
        filter: brightness(0.9);
      }

      @media ${device.desktop} {
        margin-left: 20rem;
        font-size: 1.1rem;
      }
      @media ${device.laptopL} {
        margin-left: 13rem;
        font-size: 0.8rem;
      }
      @media ${device.laptopM} {
        margin-left: 12rem;
        font-size: 0.75rem;
      }
      @media ${device.ipad} {
        margin-left: 23rem;
        font-size: 1.1rem;
      }
      @media ${device.tablet} {
        margin-left: 10rem;
      }
      @media ${device.mobileL} {
        visibility: hidden;
      }
    }
  }
  @media ${device.laptopM} {
    padding: 0.8rem;
  }
  @media ${device.ipad} {
    color: #fff;
    padding: 1.6rem;
  }
  @media ${device.tablet} {
    a {
      font-size: 1.06rem;
    }
  }
  @media ${device.mobileL} {
    display: inline;
    text-align: center;
    padding: 0;
  }
`;

export const Text = styled.div`
  p,
  span {
    font-size: 0.85rem;
    font-family: 'Inter';
    font-weight: 400;

    span {
      color: var(--green-light);
    }
  }
  @media ${device.desktop} {
    p,
    span {
      font-size: 1.1rem;
    }
  }
  @media ${device.laptopL} {
    p,
    span {
      font-size: 0.8rem;
    }
  }
  @media ${device.laptopM} {
    p,
    span {
      font-size: 0.75rem;
    }
  }
  @media ${device.ipad} {
    p,
    span {
      font-size: 1.1rem;
    }
  }
  @media ${device.mobileL} {
    p,
    span {
      font-size: 0.8rem;
    }
  }
`;
