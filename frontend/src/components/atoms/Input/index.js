import React, { forwardRef, useState } from 'react';
import { Container, Error } from './styles.js';

const InputBase = (
  { icon: Icon, togglePasswordVisibility, error, ...rest },
  ref,
) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <Container isFocused={isFocused}>
        <input
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          ref={ref}
          {...rest}
        />
        {Icon && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            onFocus={() => setIsFocused(true)}
          >
            <Icon size={25} />
          </button>
        )}
      </Container>
      {error && <Error> {error.message} </Error>}
    </>
  );
};

export const Input = forwardRef(InputBase);
