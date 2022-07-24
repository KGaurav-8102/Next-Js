import Head from 'next/head'
import Footer from  '../components/Footer'

function About() {
    return (
        <>
            <Head>
               <title>Code KgSoftech</title>
               <meta name='description' content='free tutorials on web development' />
            </Head>
            <h1 className='content'>About Page is Simple</h1>
        </>
    )
}

export default About

About.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
            <Footer />
        </>
    )
}