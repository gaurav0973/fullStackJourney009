async function ProductReviews({ params }) {
    const {reviewId} = await params;
  return (
    <div>ProductReviews : {reviewId}</div>
  )
}
export default ProductReviews