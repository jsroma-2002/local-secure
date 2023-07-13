import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from '../src/LoginPage';
import { signIn } from 'next-auth/client';

jest.mock('next-auth/client');

describe('LoginPage', () => {
  let signInMock: jest.Mock;

  beforeEach(() => {
    signInMock = signIn as jest.Mock;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('logs in with the provided credentials', async () => {
    const username = 'testuser';
    const password = 'testpassword';
    const result = { message: 'Login successful' };

    signInMock.mockResolvedValueOnce(result);

    render(<LoginPage />);

    const usernameInput = screen.getByLabelText('Username:') as HTMLInputElement;
    const passwordInput = screen.getByLabelText('Password:') as HTMLInputElement;
    const submitButton = screen.getByRole('button', { name: 'Log In' });

    fireEvent.change(usernameInput, { target: { value: username } });
    fireEvent.change(passwordInput, { target: { value: password } });
    fireEvent.click(submitButton);

    expect(signInMock).toHaveBeenCalledWith('credentials', {
      username,
      password,
      redirect: false,
    });

    // Assert that the result is logged to the console
    expect(console.log).toHaveBeenCalledWith(result);
  });

  it('logs an error when login fails', async () => {
    const username = 'testuser';
    const password = 'testpassword';
    const error = { message: 'Invalid credentials' };

    signInMock.mockResolvedValueOnce({ error });

    render(<LoginPage />);

    const usernameInput = screen.getByLabelText('Username:') as HTMLInputElement;
    const passwordInput = screen.getByLabelText('Password:') as HTMLInputElement;
    const submitButton = screen.getByRole('button', { name: 'Log In' });

    fireEvent.change(usernameInput, { target: { value: username } });
    fireEvent.change(passwordInput, { target: { value: password } });
    fireEvent.click(submitButton);

    expect(signInMock).toHaveBeenCalledWith('credentials', {
      username,
      password,
      redirect: false,
    });

    // Assert that the error is logged to the console
    expect(console.log).toHaveBeenCalledWith(error);
  });
});