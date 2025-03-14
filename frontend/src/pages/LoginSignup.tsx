import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState<boolean>(true); // Toggle between Login and Signup forms

  const submitLogin = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    // formData.preventDefault();
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    interface Credentials {
      email: string;
      password: string;
    }

    const body: Credentials = {
      email: formData.get('email') as string,
      password: formData.get('pass') as string,
    };

    if (isLogin === true) {
      try {
        const result = await fetch('/auth/verify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });

        const results = await result.json();
        console.log(results);
        if (results.message) {
          navigate('/preferences');
        }
      } catch (error) {
        console.log(error);
      }
    }
    // create a tabel to input user
  };

  return (
    <div className='flex justify-center items-center min-h-screen w-full'>
      <div className='bg-white p-8 rounded-lg w-full max-w-md shadow-lg flex flex-col items-center'>
        <h2 className='text-2xl font-semibold text-center mb-6'>
          {isLogin ? 'Welcome Back!' : 'Sign Up Now'}
        </h2>

        <form
          className='bg-white p-6 rounded-lg shadow-lg w-96 space-y-4 flex flex-col items-center'
          onSubmit={submitLogin}
        >
          {/* Email */}
          <div className='mb-4'>
            <label
              className='block text-sm font-medium text-gray-600 mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              name='email'
              type='email'
              id='email'
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter your email'
            />
          </div>

          {/* Password */}
          <div className='mb-6'>
            <label
              className='block text-sm font-medium text-gray-600 mb-2'
              htmlFor='password'
            >
              Password
            </label>
            <input
              name='pass'
              type='password'
              id='password'
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter your password'
            />
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='w-full bg-gray-400 text-blue-900 py-2 rounded-md hover:bg-orange-400 transition duration-300'
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        {/* Toggle between Login/SignUp */}
        <div className='mt-4 text-center'>
          <p className='text-sm text-gray-600'>
            {isLogin ? 'Don’t have an account?' : 'Already have an account?'}
            <span
              onClick={() => setIsLogin(!isLogin)}
              className='text-blue-500 cursor-pointer'
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
