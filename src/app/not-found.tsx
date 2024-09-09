export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-red-100 text-gray-900 py-20">
      <h1 className="text-6xl font-bold mb-6">404</h1>
      <p className="text-xl mb-6">
        Oops! The page you are looking for was not found.
      </p>
      <a
        href="/"
        className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300"
      >
        Go back to Home
      </a>
    </section>
  );
}
