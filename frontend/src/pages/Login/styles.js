import styled, { keyframes } from 'styled-components';

import { device } from '../../utils/breakpoints';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  flex-direction: column;

  @media ${device.ipad} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    z-index: 1;
  }
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-3.125rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimatedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  animation: ${appearFromLeft} 1.5s;
`;

export const Title = styled.p`
  font-family: 'Playfair Display';
  font-weight: 600;
  line-height: 2.75rem;
  span {
    color: var(--green-light);
  }

  @media ${device.desktop} {
    font-size: 2.3rem;
    margin-right: 1rem;
  }
  @media ${device.laptopL} {
    font-size: 1.68rem;
    margin-right: 0;
  }
  @media ${device.laptopM} {
    font-size: 1.56rem;
    margin-right: 0;
  }
  @media ${device.ipad} {
    color: white;
    font-size: 3.6rem;
    font-weight: 700;
    span {
      font-weight: 700;
    }
  }
  @media ${device.tablet} {
    font-size: 2.7rem;
  }
  @media ${device.mobileL} {
    font-size: 1.75rem;
  }
  @media ${device.mobileM} {
    font-size: 1.6rem;
  }
  @media ${device.mobileS} {
    font-size: 1.4rem;
  }
`;
