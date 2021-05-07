import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 0.125rem;
`;
export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 0.063rem;
  margin: -0.063rem;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 0.063rem;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background: ${props =>
    props.checked ? 'var(--green-light)' : 'var(--green-lighter)'};
  margin-top: 0.125rem;
  cursor: pointer;
  transition: all 150ms;

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`;
