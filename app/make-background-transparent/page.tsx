import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Make Image Background Transparent Online',
  description:
    'Make image backgrounds transparent online. Upload a supported image and download a transparent PNG in seconds.',
}

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">Make Image Background Transparent</h1>
      <p className="mt-4 text-lg text-gray-600">
        Turn supported image files into transparent PNG assets for websites, creative work, ecommerce, and presentations.
      </p>
      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900">What you get</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
          <li>Transparent PNG output</li>
          <li>Fast online processing</li>
          <li>No image storage in the app workflow</li>
        </ul>
      </div>
      <div className="mt-8">
        <a href="/" className="text-sm font-medium text-blue-600 hover:text-blue-700">
          ← Start from the homepage
        </a>
      </div>
    </main>
  )
}
