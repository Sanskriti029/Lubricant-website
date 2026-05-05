import { useParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id == id);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-6">
      <img src={product.image} alt={product.name} />
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="mt-2">{product.description}</p>

      <button className="mt-4 bg-orange text-white px-4 py-2 rounded">
        Contact for Quote
      </button>
    </div>
  );
}