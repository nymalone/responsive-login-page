import styled, {css} from 'styled-components';

import { device } from '../../../utils/breakpoints';

export const Container = styled.div`
  border: 2px solid var(--green-dark);
  border-radius: 0.375rem;
  height: 3.5rem;
  padding: 0.813rem 1.25rem;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 1.25rem;
  }

  ${props => props.hasError && css`
    border: 2px solid var(--danger);
  `}

  input {
    flex: 1;
    border: 0;
    outline: none;
    font-size: 1.1rem;
    color: var(--green-dark);
    background: transparent;
    &::placeholder {
      color: var(--green-dark);
      font-weight: 600;
      letter-spacing: -0.021rem;
      line-height: 2.125rem;
      opacity: 0.6;

      ${props => props.isFocused && css`
      opacity: 0.3;
     `}
    }
  }
  button {
    border: 0;
    background: transparent;
    transition: filter 0.2s;
    outline: none;
    svg {
      color: var(--green-dark);
      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  @media ${device.laptopL} {
    height: 3rem;
    input {
      font-size: 0.95rem;
    }
    button {
      svg {
        width: 1.4rem;
        height: 1.4rem;
      }
    }
  }
  @media ${device.laptopM} {
    height: 2.8rem;
    button {
      svg {
        width: 1.3rem;
        height: 1.3rem;
      }
    }
  }
  @media ${device.ipad} {
    height: 3.4rem;
    input {
      font-size: 1.3rem;
    }
    button {
      svg {
        width: 1.8rem;
        height: 1.8rem;
      }
    }
  }
  @media ${device.mobileL} {
    height: 3.1rem;
    input {
      font-size: 1.1rem;
    }
    button {
      svg {
        width: 1.6rem;
        height: 1.6rem;
      }
    }
  }
  @media ${device.mobileM} {
    height: 3rem;
    input {
      font-size: 1rem;
    }
    button {
      svg {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
  @media ${device.mobileM} {
    height: 2.8rem;
    input {
      font-size: 0.86rem;
    }
    button {
      svg {
        width: 1.2rem;
        height: 1.2rem;
      }
    }
  }
`;

export const Error = styled.p`
  color: var(--danger);
  font-weight: 600;
  font-size: 0.74rem;
  display: inline-block;
  margin: 0.23rem 0  0.7rem 0.2rem;

  @media ${device.desktop} {
    font-size: 0.9rem;
  }
  @media ${device.laptopL} {
    font-size: 0.8rem;
  }
  @media ${device.ipad} {
    font-size: 1.1rem;
  }
  @media ${device.tablet} {
    font-size: 1rem;
  }
  @media ${device.mobileL} {
    font-size: 0.9rem;
  }
  @media ${device.mobileL} {
    font-size: 0.85rem;
  }
  @media ${device.mobileL} {
    font-size: 0.75rem;
  }
`
