export default function ArticlesListByCategory({ articles, category }) {
    return (
        <>
             <h1>Showing news for category "{category}"</h1>
            {articles.map(article => {
                return (
                <div key={article.id}>
                    <h2>
                    {article.id} {article.title}
                    </h2>
                    <p>{article.description}</p>
                    <hr />
                </div>
                )
            })}
        </>
    )
}

export async function getServerSideProps(context) {

    const { params, req, res } = context
    console.log(req.headers.cookie);
    res.setHeader('set-Cookie', ['name=Gaurav'])
    const { category } = params

    const response = await fetch(
        `http://localhost:4000/news?category=${category}`
    )

    const data = await response.json()
    console.log(data);
    return {
        props: {
            articles: data,
            category,
        }
    }


}