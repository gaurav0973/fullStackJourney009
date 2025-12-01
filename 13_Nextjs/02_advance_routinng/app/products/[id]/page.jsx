import Link from "next/link";

const reviews = [
  { id: '1', content: 'Great product!' },
  { id: '2', content: 'Not bad.' },
  { id: '3', content: 'Would not recommend.' },
];

async function ProductById({ params }) {
  const { id } = await params;
  console.log(id);

  return (
    <div>
      <h1>Product ID: {id}</h1>

      <h2 className="mt-4 text-2xl font-bold">Reviews:</h2>
      <ul className="list-disc list-inside mt-2">
        {reviews.map((review) => (
          <Link href={`/products/${id}/reviews/${review.id}`} key={review.id}>
            <li className="mb-2">{review.content}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default ProductById;
