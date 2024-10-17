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
  console.log(user);

  const loginMutation = useMutation({
    mutationFn: async ({ email, password }) => {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
        credentials: 'include',
      });
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

  async function login(formData) {
    const email = formData.get('email');
    const password = formData.get('password');
    loginMutation.mutate({ email, password });
  }

  async function signUp(formData) {}

  return (
    <form>
      <label htmlFor='email'>Email:</label>
      <input id='email' name='email' type='email' required />
      <label htmlFor='password'>Password:</label>
      <input id='password' name='password' type='password' required />
      <button
        formAction={(e) => {
          login(e);
        }}
      >
        Log in
      </button>
      <button
        formAction={(e) => {
          signUp(e);
        }}
      >
        Sign up
      </button>
      {loginMutation.isPending && <div>Loading..</div>}
    </form>
  );
}
