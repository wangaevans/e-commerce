import { compare } from 'bcryptjs';
import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import DBConnect from '../../../db/DBConection';
import Users from '../../../models/User.model';

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        DBConnect().catch((error) => {
          console.log('Connection Failed...!');
        });

        // check user existance
        const result = await Users.findOne({ email: email });
        if (!result) {
          throw new Error('No user Found with Email Please Sign Up...!');
        }

        // compare()
        const checkPassword = await compare(password, result.password);

        // incorrect password
        if (!checkPassword || result.email !== email) {
          throw new Error("Username or Password doesn't match");
        }

        return result;
      },
    }),
  ],
  secret: 'XH6bp/TkLvnUkQiPDEZNyHc0CV+VV5RL/n+HdVHoHN0=',
  session: {
    strategy: 'jwt',
  },
};

export default NextAuth(authOptions);
