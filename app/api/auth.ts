import { NextApiHandler } from 'next';
import { NextAuthOptions } from 'next-auth';
import { CredentialsOptions } from 'next-auth/providers';
import NextAuth from 'next-auth';

const options: NextAuthOptions = {
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
    } as CredentialsOptions,
  ],
};

const handler: NextApiHandler = (req, res) => NextAuth(req, res, options);

export default handler;
