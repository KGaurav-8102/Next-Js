import Link from 'next/link';

function Product({ productId = 100 }) {
    return (
        <>
            <Link href='/'>
                <a>Home</a>
            </Link>
            <h1>
                <Link href='/product/1'>
                    <a>Product 1</a>
                </Link>
            </h1>
            <h1>
                <Link href='/product/2'>
                    <a>Product2</a>
                </Link>
            </h1>
            <h1>
                <Link href='/product/3' replace>
                    <a>Product 3</a>
                </Link>
            </h1>
            <h1>
                <Link href={`/product/${productId}`}>
                    <a>Product {productId}</a>
                </Link>
            </h1>
        </>
    );
}

export default Product;