import Link from "next/link"

const products = [{ id : 1, name : "Apple" }, { id : 2, name : "Banana" }]

function Products() {
  return (
    <div className="flex items-center justify-center h-screen">
        <div>
            {products.map(product => {
                return (
                <Link href={`/products/${product.id}`} key={product.id}>
                <div className="m-4 p-4 border border-gray-300 rounded">
                    <h2 className="text-2xl font-bold">{product.name}</h2>
                    <p>Product ID: {product.id}</p>
                </div>
                </Link>
            )})}
        </div>
    </div>
  )
}
export default Products