import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold gradient-text mb-4">404</h1>
        <p className="text-xl text-white/40 mb-8">Vehicle not found</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-medium text-white bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 hover:opacity-90 transition-opacity"
        >
          Return to Collection
        </Link>
      </div>
    </div>
  );
}