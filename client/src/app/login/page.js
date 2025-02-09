'use client';
import { useMutation } from '@tanstack/react-query';
import { redirect } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '@/lib/slices/authSlice';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.auth.user);

  const loginMutation = useMutation({
    mutationFn: async ({ email, password }) => {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + '/api/users/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
          credentials: 'include',
        }
      );
      if (!response.ok) {
        throw new Error('Login failed');
      }
      return await response.json();
    },
    onSuccess: (data) => {
      dispatch(authActions.login(data));
      router.push('/dashboard');
    },
  });

  const registerMutation = useMutation({
    mutationFn: async ({ email, password }) => {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + '/api/users/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      if (!response.ok) {
        throw new Error('Register failed');
      }
      return await response.json();
    },
    onSuccess: (data) => {
      dispatch(authActions.login(data));
      router.push('/dashboard');
    },
  });

  async function login(formData) {
    const email = formData.get('email');
    const password = formData.get('password');
    loginMutation.mutate({ email, password });
  }

  async function signUp(formData) {
    const email = formData.get('email');
    const password = formData.get('password');
    registerMutation.mutate({ email, password });
  }

  return (
    <div className='h-svh flex flex-col items-center justify-center'>
      <form className='flex flex-col items-center justify-center space-y-2'>
        <div className='space-x-2'>
          <label htmlFor='email'>Email:</label>
          <input
            className='bg-transparent rounded-md border-2 border-primary p-1'
            id='email'
            name='email'
            type='email'
            required
          />
        </div>
        <div className='space-x-2'>
          <label htmlFor='password'>Password:</label>
          <input
            className='bg-transparent rounded-md border-2 border-primary p-1'
            id='password'
            name='password'
            type='password'
            required
          />
        </div>
        <div className='space-x-2'>
          <button
            className='bg-primary rounded-md px-3 py-1'
            formAction={(e) => {
              login(e);
            }}
          >
            Log in
          </button>
          <button
            className='bg-primary rounded-md px-3 py-1'
            formAction={(e) => {
              signUp(e);
            }}
          >
            Sign up
          </button>
        </div>
        {loginMutation.isPending && <div>Loading..</div>}
      </form>
    </div>
  );
}
