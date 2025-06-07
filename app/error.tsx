"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">500</h1>
        <h2 className="text-2xl mb-6">Something went wrong!</h2>
        <p className="text-gray-300 mb-8">An error occurred while loading this page.</p>
        <Button onClick={reset} className="bg-gradient-to-r from-blue-600 to-purple-600">
          Try again
        </Button>
      </div>
    </div>
  )
}
