import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portrait Background Remover Online',
  description:
    'Remove portrait backgrounds online and create clean cutouts for profile photos, resumes, presentations, and marketing assets.',
}

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">Portrait Background Remover</h1>
      <p className="mt-4 text-lg text-gray-600">
        Remove portrait backgrounds online to create simple transparent cutouts for profile pictures, resumes, and team pages.
      </p>
      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900">Works well for</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
          <li>Profile photos and personal branding</li>
          <li>Presentation and pitch deck visuals</li>
          <li>Simple content design workflows</li>
        </ul>
      </div>
      <div className="mt-8">
        <a href="/" className="text-sm font-medium text-blue-600 hover:text-blue-700">
          ← Use the tool now
        </a>
      </div>
    </main>
  )
}
