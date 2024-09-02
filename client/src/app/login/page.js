'use client';
import { redirect } from 'next/navigation';

export default function LoginPage() {
  async function login(formData) {
    try {
      let data = await fetch('http://localhost:8000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.get('email'),
          password: formData.get('password'),
        }),
        credentials: 'include',
      });

      if (data.status != 200) {
        return;
      }

      window.location.replace('/dashboard');
    } catch (e) {
      console.error(e);
    }
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
    </form>
  );
}
