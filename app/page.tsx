import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Image Background Remover – Remove Background from Images Online',
  description:
    'Remove backgrounds from images online in seconds. Create transparent PNGs for product photos, portraits, and more. No software required.',
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            Free online tool
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Image Background Remover
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Remove backgrounds from images online in seconds. Create transparent PNGs for product photos,
            portraits, and more.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-500">
            <span>Fast processing</span>
            <span>•</span>
            <span>Transparent PNG output</span>
            <span>•</span>
            <span>Images are not stored</span>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <UploaderCard />
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Why people use it</h2>
            <div className="mt-6 space-y-4 text-sm text-gray-600">
              <Feature
                title="Product photos"
                text="Clean up ecommerce product images for marketplaces, ads, and landing pages."
              />
              <Feature
                title="Portraits"
                text="Create profile photos, headshots, and simple cutouts without design tools."
              />
              <Feature
                title="Transparent PNGs"
                text="Generate PNG files with transparent backgrounds for reuse in websites and designs."
              />
            </div>
          </div>
        </div>

        <section className="grid gap-6 md:grid-cols-3">
          <InfoCard
            title="How it works"
            text="Upload a JPG, PNG, or WEBP image. The app sends it to remove.bg and returns a transparent PNG."
          />
          <InfoCard
            title="Privacy"
            text="Images are processed only for the request and are not stored by this app."
          />
          <InfoCard
            title="Limits"
            text="Single image upload, supported formats only, and a maximum file size of 10MB."
          />
        </section>

        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900">Frequently asked questions</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <FaqItem
              question="Is this image background remover free?"
              answer="Yes, the tool can be offered as a free MVP. Usage limits can be added later if needed."
            />
            <FaqItem
              question="Do you store uploaded images?"
              answer="No. The app is designed to process images in request memory only and does not keep image history."
            />
            <FaqItem
              question="What file types are supported?"
              answer="JPG, PNG, and WEBP are supported in the MVP version."
            />
            <FaqItem
              question="What do I download?"
              answer="You download a transparent PNG after the background has been removed."
            />
          </div>
        </section>
      </section>
    </main>
  )
}

function UploaderCard() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-xl font-semibold text-gray-900">Upload your image</h2>
      <p className="mt-2 text-sm text-gray-600">JPG, PNG, WEBP · Max 10MB · Transparent PNG output</p>

      <form action="/api/remove-bg" method="post" encType="multipart/form-data" className="mt-6">
        <label className="flex min-h-72 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 px-6 py-10 text-center transition hover:border-blue-400 hover:bg-blue-50">
          <div className="text-base font-medium text-gray-800">Drag and drop or browse</div>
          <div className="mt-2 text-sm text-gray-500">Choose one image to remove its background</div>
          <input
            type="file"
            name="image"
            accept="image/jpeg,image/png,image/webp"
            className="mt-6 block w-full max-w-xs text-sm text-gray-600 file:mr-4 file:rounded-xl file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-blue-700"
          />
        </label>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="submit"
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Remove Background
          </button>
          <a
            href="/privacy"
            className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
          >
            Privacy Policy
          </a>
        </div>
      </form>
    </div>
  )
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h3 className="font-medium text-gray-900">{title}</h3>
      <p className="mt-1 leading-6">{text}</p>
    </div>
  )
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-gray-600">{text}</p>
    </div>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
      <h3 className="font-medium text-gray-900">{question}</h3>
      <p className="mt-2 text-sm leading-6 text-gray-600">{answer}</p>
    </div>
  )
}
