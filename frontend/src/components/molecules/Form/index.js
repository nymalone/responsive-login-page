import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '../../../context/AuthContext';

import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import Loader from 'react-loader-spinner';

import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';
import { Checkbox } from '../../atoms/Checkbox';

import { Container, Label } from './styles';
import { Error } from '../../atoms/Input/styles';

const loginFormSchema = yup.object().shape({
  email: yup.string().required('Email is required').email('Invalid email'),
  password: yup.string().required('Password is required'),
});

export function Form() {
  const { Login, error, loading } = useAuth();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(loginFormSchema),
  });
  const [checked, setChecked] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const { errors } = formState;

  const handleSignIn = ({ email, password }) => {
    Login({ email, password });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <h1>Login</h1>
        <Input
          name="email"
          type="email"
          placeholder="Email"
          error={errors.email}
          {...register('email')}
          data-cy="input-email"
        />
        <Input
          name="password"
          type={passwordShown ? 'text' : 'password'}
          placeholder="Password"
          icon={passwordShown ? IoEyeOffOutline : IoEyeOutline}
          togglePasswordVisibility={togglePasswordVisibility}
          error={errors.password}
          {...register('password')}
          data-cy="input-password"
        />
        {error && <Error> {error.message} </Error>}

        <Label>
          <label>
            <Checkbox checked={checked} onChange={handleCheckboxChange} />
            <p>Remember me</p>
          </label>
          <a href="forgot">Forget Password?</a>
        </Label>

        <Button type="submit">
          {loading ? (
            <Loader
              type="ThreeDots"
              color="#FFF"
              height={35}
              width={35}
              timeout={3000}
            />
          ) : (
            <p>Login</p>
          )}
        </Button>
        <a href="forgot">
          Don’t have an account? <strong>Get Started</strong>
        </a>
      </form>
    </Container>
  );
}
