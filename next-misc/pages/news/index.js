function News({ data }) {
    return <h1></h1>
}

export default News

export async function getStaticProps() {
    return {
        props: {
            data: 'List of published articles',
        },
    }
}