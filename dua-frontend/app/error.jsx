"use client"; // Error boundaries must be Client Components

export default function GlobalError({ error, reset }) {
  return (
    // global-error must include html and body tags
    // <html>
    <div className="text-center mt-6">
      <h2 className="text-3xl font-bold">{error.message}</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
    // </html>
  );
}
