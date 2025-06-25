'use client'

export default function LoadingSkeleton({ lines = 5, width = 'w-full' }) {
  return (
    <section className="animate-pulse space-y-3">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`h-4 bg-gray-300 dark:bg-gray-700 rounded ${i === 0 ? 'w-1/2' : i === lines - 1 ? 'w-3/4' : width}`}
        />
      ))}
    </section>
  )
}