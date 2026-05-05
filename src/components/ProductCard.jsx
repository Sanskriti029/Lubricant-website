import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded-lg shadow">
      <img src={product.image} alt={product.name} />
      <h2 className="font-semibold mt-2">{product.name}</h2>
      <p className="text-sm text-muted">{product.description}</p>

      <Link
        to={`/products/${product.id}`}
        className="inline-block mt-3 text-accent"
      >
        View Details →
      </Link>
    </div>
  );
}