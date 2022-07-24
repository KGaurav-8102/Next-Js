function News({ data }) {
    return <h1 className='content'>{data}</h1>
}

export default News

export async function getStaticProps() {
    return {
        props: {
            data: 'List of published articles',
        },
    }
}