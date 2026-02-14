import { useState } from "react"
import { createPortal } from "react-dom" // 1. Import createPortal

type LightboxProps = {
  images: string[]
  startIndex?: number
  onClose: () => void
}

export default function Lightbox({ images, startIndex = 0, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(startIndex)

  const prev = () => setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1))

  // 2. Wrap the return in createPortal
  return createPortal(
    <div className="fixed inset-0 bg-black/95 z-[9999] flex flex-col items-center justify-center">
      <button
        className="absolute top-5 right-5 text-white text-4xl z-[10000] p-4"
        onClick={onClose}
      >
        ×
      </button>

      <button
        className="absolute left-5 top-1/2 -translate-y-1/2 text-white text-5xl p-4 z-[10000]"
        onClick={prev}
      >
        ‹
      </button>

      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
      />

      <button
        className="absolute right-5 top-1/2 -translate-y-1/2 text-white text-5xl p-4 z-[10000]"
        onClick={next}
      >
        ›
      </button>

      <div className="absolute bottom-10 text-white text-lg font-medium">
        {currentIndex + 1} / {images.length}
      </div>
    </div>,
    document.body
  )
}