import styled from 'styled-components';

import { device } from '../../../utils/breakpoints';

export const Container = styled.button`
  height: 3.5rem;
  border-radius: 0.375rem;
  border: 0;
  background: var(--green-dark);
  color: #fff;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 2.125rem;
  transition: filter 0.2s;
  margin-bottom: 1rem;
  &:hover {
    filter: brightness(0.9);
  }

  @media ${device.laptopL} {
    height: 2.8rem;
    font-size: 1.1rem;
  }
  @media ${device.laptopM} {
    height: 2.7rem;
    font-size: 1.05rem;
  }
  @media ${device.ipad} {
    height: 3.4rem;
    font-size: 1.3rem;
  }
  @media ${device.ipad} {
    height: 3.3rem;
  }
  @media ${device.mobileL} {
    height: 3.1rem;
    font-size: 1.2rem;
  }
  @media ${device.mobileL} {
    height: 2.9rem;
    font-size: 1.1rem;
  }
  @media ${device.mobileS} {
    height: 2.8rem;
    font-size: 1.05rem;
  }
`;
