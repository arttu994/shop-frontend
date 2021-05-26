import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='login__container'>
          <div className='login__username'>
            <label htmlFor='username'>
              <input {...register("username")} />
            </label>
          </div>
          <div className='login__password'>
            <label htmlFor='password'>
              <input {...register("password")} />
            </label>
          </div>
          <div className='login__submit'>
            <button type='submit'>Log In</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
