import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
    providers: [
        Providers.Github({
            clientId: '',
            clientSecret: '',
        })
    ]
})


