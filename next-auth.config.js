const options = {
  providers: [
    {
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        // Validate the provided username and password against your user database
        const { username, password } = credentials;
        const user = await yourDatabase.findUserByUsername(username);

        if (!user) {
          throw new Error('User not found');
        }

        const isValidPassword = await yourPasswordValidationFunction(password, user.password);

        if (!isValidPassword) {
          throw new Error('Invalid password');
        }

        // If authentication is successful, return the user object
        return Promise.resolve(user);
      },
    },
  ],
  pages: {
    signIn: '/login',
  },
};

module.exports = options;
