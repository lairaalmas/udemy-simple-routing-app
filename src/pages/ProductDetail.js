import { Link, useParams } from "react-router-dom";

const ProductDetailPage = (props) => {
  const params = useParams();

  return (
    <>
      <h1>Product details</h1>
      <p>{params.productId}</p>
      <p>
        <Link to=".." relative="path">
          Back to previous page
        </Link>
      </p>
      <p>
        {
          // default is route
        }
        <Link to=".." relative="route">
          Back to Home
        </Link>
      </p>
    </>
  );
};

export default ProductDetailPage;
