import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectTODB } from "@/utility/database";
import user from "@/models/user";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
        try {
          await connectTODB();
  
          // Check if the user exists
          const userExists = await user.findOne({
            email: profile?.email,
          });
  
          // If not, create a new user
          if (!userExists) {
            await user.create({
              email: profile?.email,
              userName: profile?.name?.replace(" ", "").toLowerCase(),
              image: profile?.image,
            });
          }
  
          return true;
        } catch (error) {
          console.error("Error during sign-in:", error);
          return false; // Return false to indicate the sign-in failed
        }
      },
    async session({ session }) {
      try {
        await connectTODB();

        const usersession = await user.findOne({
          email:session.user.email,
        });

        if (usersession) {
          session.user.id = usersession._id.toString();
        }

        return session;
      } catch (error) {
        console.error("Error fetching user session:", error);
        return session;
      }
    },
  },
  debug: true, // Enable debug to get more information
});

export { handler as GET, handler as POST };
