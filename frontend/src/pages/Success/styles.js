import styled from 'styled-components';

import { device } from '../../utils/breakpoints';

import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url(${backgroundImg}) repeat center;
  background-size: 80%;
  h1 {
    font-family: 'Playfair';
    color: white;
    font-weight: 700;
  }
  button {
    height: 4rem;
    padding: 0 3rem;
    font-size: 1.5rem;
    cursor: pointer;
    margin-top: 2rem;
  }

  @media ${device.mobileM} {
    h1 {
      font-size: 1.5rem;
    }
  }
`
