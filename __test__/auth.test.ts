import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import handler from '../src/auth';

jest.mock('next-auth');

describe('Auth Handler', () => {
  let nextAuthMock: jest.Mock;

  beforeEach(() => {
    nextAuthMock = NextAuth as jest.Mock;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('calls NextAuth with the correct parameters', async () => {
    const req = {} as NextApiRequest;
    const res = {} as NextApiResponse;
    const options = {
      providers: [
        {
          credentials: {
            username: { label: 'Username', type: 'text' },
            password: { label: 'Password', type: 'password' },
          },
          authorize: async (credentials) => {
            const user = { id: 1, name: 'John Doe', email: 'john@example.com' };
            return Promise.resolve(user);
          },
        },
      ],
    };

    await handler(req, res);

    expect(nextAuthMock).toHaveBeenCalledWith(req, res, options);
  });
});