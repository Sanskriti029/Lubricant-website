import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-primary px-6 py-4 flex justify-between gap-4 ">
      <h1 className="font-bold text-lg">Vikas Automobiles</h1>
      <div className="space-x-4 ">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/achievements">Achievements</Link>
       
      </div>
    </nav>
  );
}