import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product Photo Background Remover Online',
  description:
    'Remove backgrounds from product photos automatically and create clean transparent images for ecommerce listings and ads.',
}

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">Product Photo Background Remover</h1>
      <p className="mt-4 text-lg text-gray-600">
        Clean up ecommerce product shots by removing distracting backgrounds and exporting transparent PNG files.
      </p>
      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900">Typical use cases</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
          <li>Marketplace product listings</li>
          <li>Store hero banners and catalog images</li>
          <li>Ad creatives that need flexible transparent assets</li>
        </ul>
      </div>
      <div className="mt-8">
        <a href="/" className="text-sm font-medium text-blue-600 hover:text-blue-700">
          ← Try the tool on the homepage
        </a>
      </div>
    </main>
  )
}
