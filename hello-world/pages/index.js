import Link from 'next/link';

function App() {
    return <>
        <h1>NextJs Pre-rendering</h1>
        <Link href='/users'>
            <a>Users</a>
        </Link>
        <Link href='/posts'>
            <a>Posts</a>
        </Link>
    </>
}

export default App;