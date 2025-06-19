import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      <h1 className="text-4xl font-bold text-green-500 mb-4">Welcome to the Home Page</h1>
      <Link to="/" className="text-blue-500 hover:underline mb-2">Go to Main Page</Link>
      <Link to="/contact" className="text-blue-500 hover:underline">Go to Contact</Link>
    </div>
  );
}