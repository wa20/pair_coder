import NextAuth from "next-auth"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "@/db"
import GoogleProvider  from "next-auth/providers/google";
import type { Adapter } from 'next-auth/adapters'

const handler = NextAuth({
    //we use this to connect to the database, in our case we are using drizzle so have to install a drizzle adapter
    adapter: DrizzleAdapter(db) as Adapter,
    providers: [ 
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ]
}) 

export { handler as GET, handler as POST }