import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Remove Background from Image Online Free',
  description:
    'Remove background from image online in seconds. Create transparent PNG files for presentations, marketing, and ecommerce use.',
}

export default function Page() {
  return renderPage({
    title: 'Remove Background from Image Online',
    intro:
      'Upload an image, remove the background automatically, and download a transparent PNG in a few seconds.',
  })
}

function renderPage({ title, intro }: { title: string; intro: string }) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">{title}</h1>
      <p className="mt-4 text-lg text-gray-600">{intro}</p>
      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900">Best for</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
          <li>Quick background removal for everyday images</li>
          <li>Transparent PNG exports for websites and design work</li>
          <li>Users who want a fast online workflow without software installs</li>
        </ul>
      </div>
      <div className="mt-8">
        <a href="/" className="text-sm font-medium text-blue-600 hover:text-blue-700">
          ← Back to the main tool
        </a>
      </div>
    </main>
  )
}
