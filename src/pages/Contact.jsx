import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">Contact Us</h1>
      <Link to="/" className="text-blue-500 hover:underline mb-2">Go to Main Page</Link>
      <Link to="/home" className="text-blue-500 hover:underline">Go to Home</Link>
    </div>
  );
}