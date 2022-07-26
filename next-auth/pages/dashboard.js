import { useState, useEffect } from 'react'
import { getSession, signIn } from 'next-auth/react'


function Dashboard() {
    const [status, setStatus] = useState('authenticated')

    useEffect(() => {
        const securePage = async () => {
            const session = await getSession()
            if (!session) {
                signIn()
            } else {
                setStatus('unauthenticated')
            }
        }
        securePage()
    }, [])

    if (status) {
        return <h1>Loading</h1>
    }

    return(
        <h1>Dashboard Page</h1>
    ) 
}

export default Dashboard