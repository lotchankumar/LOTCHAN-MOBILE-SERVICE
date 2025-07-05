import { type Review, mockReviews } from "./reviews-config"

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// Mock API functions - replace with actual API calls
export async function fetchReviews(): Promise<Review[]> {
  await delay(1000) // Simulate network delay

  // In production, this would fetch from your database or Google Places API
  return mockReviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function submitReview(reviewData: Omit<Review, "id" | "date" | "verified">): Promise<Review> {
  await delay(500)

  const newReview: Review = {
    ...reviewData,
    id: Date.now().toString(),
    date: new Date().toISOString().split("T")[0],
    verified: false, // New reviews need verification
  }

  // In production, save to database
  console.log("New review submitted:", newReview)

  return newReview
}

// Google Places API integration (requires server-side implementation)
export async function fetchGoogleReviews(): Promise<Review[]> {
  try {
    // This should be implemented on your backend to avoid exposing API keys
    const response = await fetch("/api/google-reviews")
    const data = await response.json()

    return data.reviews.map((review: any) => ({
      id: review.time.toString(),
      name: review.author_name,
      rating: review.rating,
      review: review.text,
      service: "Google Review",
      date: new Date(review.time * 1000).toISOString().split("T")[0],
      verified: true,
      avatar: review.profile_photo_url,
    }))
  } catch (error) {
    console.error("Failed to fetch Google reviews:", error)
    return []
  }
}
