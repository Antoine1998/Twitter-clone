import NextAuth from "next-auth"
// import GoogleProvider from "next-auth/providers/google"
import TwitterProvider from "next-auth/providers/twitter"


export default NextAuth({
  secret: process.env.SECRET,
  providers: [
    // OAuth authentication providers
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
    
  ],
})