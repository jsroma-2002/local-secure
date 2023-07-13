import { signIn } from 'next-auth/client';

export default function LoginPage() {
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = event.currentTarget.username.value;
    const password = event.currentTarget.password.value;

    const result = await signIn('credentials', {
      username,
      password,
      redirect: false,
    });

    if (result.error) {
      console.log(result.error);
    } else {
      console.log(result);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
