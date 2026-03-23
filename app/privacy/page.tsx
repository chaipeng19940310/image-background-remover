import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for the Image Background Remover app.',
}

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">Privacy Policy</h1>
      <div className="mt-8 space-y-6 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm text-gray-700">
        <section>
          <h2 className="text-xl font-semibold text-gray-900">Image processing</h2>
          <p className="mt-2 leading-7">
            Uploaded images are processed only to remove backgrounds. This app is designed not to permanently store
            original images or generated result images.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900">Third-party processing</h2>
          <p className="mt-2 leading-7">
            Image background removal is performed through the remove.bg API. Uploaded files are sent to that service in
            order to complete the request.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900">Operational logs</h2>
          <p className="mt-2 leading-7">
            Minimal technical logs may be retained for security, abuse prevention, and troubleshooting. These logs are
            not intended to contain image contents.
          </p>
        </section>
      </div>
    </main>
  )
}
