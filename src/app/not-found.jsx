import Header from "@/components/ui/Header";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
    <Header/>
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-red-500">404</h1>

      <h2 className="text-2xl font-semibold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-2">
        দুঃখিত! আপনি যে route-এ এসেছেন সেটি আমাদের website-এ নেই।
      </p>

      <Link
        href="/"
        className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
      >
        Home এ ফিরে যান
      </Link>
    </div>
    </>
    
  );
}