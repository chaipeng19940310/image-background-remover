import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for the Image Background Remover app.',
}

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">Terms of Service</h1>
      <div className="mt-8 space-y-6 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm text-gray-700">
        <section>
          <h2 className="text-xl font-semibold text-gray-900">Use of the service</h2>
          <p className="mt-2 leading-7">
            You may use this tool to upload supported images and generate transparent PNG files. You are responsible for
            ensuring you have the right to use any images you upload.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900">Availability</h2>
          <p className="mt-2 leading-7">
            Service availability and image processing quality may depend on third-party providers, including remove.bg.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900">Limits and abuse</h2>
          <p className="mt-2 leading-7">
            Excessive automated use, abuse, or attempts to disrupt the service may result in blocking or other protective
            actions.
          </p>
        </section>
      </div>
    </main>
  )
}
