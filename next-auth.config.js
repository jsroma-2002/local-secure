import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.Credentials({
      // The name to display on the sign-in form (e.g., "Sign in with...").
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        // Implement your own authentication logic here.
        // Validate the provided username and password against your user database.
        // Return user object if authentication is successful, otherwise throw an error.
        const user = { id: 1, name: 'John Doe', email: 'john@example.com' };
        return Promise.resolve(user);
      },
    }),
  ],
  pages: {
    signIn: '/login', // The URL of your custom login page
  },
};

export default (req, res) => NextAuth(req, res, options);
