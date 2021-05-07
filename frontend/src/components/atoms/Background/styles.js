import styled from 'styled-components';

import { device } from '../../../utils/breakpoints';

import backgroundImg from '../../../assets/background.png';

export const Container = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
  color: #fff;
  display: flex;
  justify-content: center;

  div {
    margin-top: -1.8rem;
    padding-bottom: 1rem;
    span {
      display: inline-block;
      width: 0.85rem;
      height: 0.23rem;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 0.156rem;
      margin-right: 0.25rem;
    }
    @media ${device.ipad} {
      visibility: hidden;
    }
  }

  & + span {
    margin-right: 2.5rem;
  }

  span:nth-child(2) {
    background: var(--shape);
  }

  @media ${device.ipad} {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  @media ${device.tablet} {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const Text = styled.div`
  p {
    font-family: 'Playfair Display';
    font-size: 2.1rem;
    font-weight: 600;
    line-height: 4.375rem;
    letter-spacing: -0.04rem;
    text-align: center;
    & + p {
      font-size: 1rem;
      font-family: 'Inter';
      margin-top: -1.6rem;
    }
  }

  @media ${device.laptopL} {
    p {
      font-size: 1.9rem;
    }
  }
  @media ${device.laptopM} {
    p {
      font-size: 1.75rem;
    }
  }
  @media ${device.ipad} {
    visibility: hidden;
  }
`;

export const Content = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  bottom: 0;
  position: absolute;
`;
