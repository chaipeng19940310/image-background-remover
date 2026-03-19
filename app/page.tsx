'use client'

import { useCallback, useState } from 'react'

type State = 'idle' | 'loading' | 'done' | 'error'

export default function Home() {
  const [state, setState] = useState<State>('idle')
  const [original, setOriginal] = useState<string | null>(null)
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [dragging, setDragging] = useState(false)

  const process = useCallback(async (file: File) => {
    setOriginal(URL.createObjectURL(file))
    setResult(null)
    setError(null)
    setState('loading')

    const fd = new FormData()
    fd.append('image', file)

    try {
      const res = await fetch('/api/remove-bg', { method: 'POST', body: fd })
      if (!res.ok) {
        const json = await res.json()
        throw new Error(json.error ?? 'Something went wrong')
      }
      const blob = await res.blob()
      setResult(URL.createObjectURL(blob))
      setState('done')
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Unknown error')
      setState('error')
    }
  }, [])

  const handleFile = (file: File) => {
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
      setError('Unsupported format. Use JPG, PNG or WEBP.')
      setState('error')
      return
    }
    process(file)
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) handleFile(file)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragging(false)
    const file = e.dataTransfer.files?.[0]
    if (file) handleFile(file)
  }

  const handleDownload = () => {
    if (!result) return
    const a = document.createElement('a')
    a.href = result
    a.download = 'removed-bg.png'
    a.click()
  }

  const reset = () => {
    setOriginal(null)
    setResult(null)
    setError(null)
    setState('idle')
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Image Background Remover</h1>
      <p className="text-gray-500 mb-10">Upload an image and get a transparent PNG instantly</p>

      {/* Upload area */}
      {state === 'idle' && (
        <label
          className={`w-full max-w-lg h-56 flex flex-col items-center justify-center border-2 border-dashed rounded-2xl cursor-pointer transition-colors ${
            dragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white hover:border-blue-400'
          }`}
          onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
        >
          <svg className="w-12 h-12 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-gray-500">Drag & drop or <span className="text-blue-500 font-medium">browse</span></p>
          <p className="text-gray-400 text-sm mt-1">JPG, PNG, WEBP · Max 10MB</p>
          <input type="file" accept="image/jpeg,image/png,image/webp" className="hidden" onChange={handleInput} />
        </label>
      )}

      {/* Loading */}
      {state === 'loading' && (
        <div className="flex flex-col items-center gap-4">
          {original && <img src={original} alt="original" className="w-64 h-64 object-contain rounded-xl shadow" />}
          <div className="flex items-center gap-2 text-gray-500">
            <svg className="animate-spin w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Removing background…
          </div>
        </div>
      )}

      {/* Result */}
      {state === 'done' && (
        <div className="flex flex-col items-center gap-6 w-full max-w-2xl">
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="flex flex-col items-center gap-2">
              <p className="text-sm text-gray-400 font-medium">Original</p>
              {original && <img src={original} alt="original" className="w-full rounded-xl shadow object-contain max-h-64" />}
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-sm text-gray-400 font-medium">Result</p>
              <div className="w-full rounded-xl shadow overflow-hidden max-h-64 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZTVlN2ViIi8+PHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNlNWU3ZWIiLz48cmVjdCB4PSIxMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZjlmYWZiIi8+PHJlY3QgeT0iMTAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0iI2Y5ZmFmYiIvPjwvc3ZnPg==')]">
                {result && <img src={result} alt="result" className="w-full object-contain max-h-64" />}
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleDownload}
              className="px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl transition-colors"
            >
              Download PNG
            </button>
            <button
              onClick={reset}
              className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-colors"
            >
              New Image
            </button>
          </div>
        </div>
      )}

      {/* Error */}
      {state === 'error' && (
        <div className="flex flex-col items-center gap-4">
          <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl px-6 py-4 text-sm">
            {error}
          </div>
          <button onClick={reset} className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-colors">
            Try Again
          </button>
        </div>
      )}
    </main>
  )
}
