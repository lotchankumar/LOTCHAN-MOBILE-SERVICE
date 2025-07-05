import { NextResponse } from "next/server"

// This is a server-side API route to fetch Google Reviews
// You'll need to set up Google Places API and add your API key to environment variables
export async function GET() {
  try {
    const placeId = process.env.GOOGLE_PLACE_ID
    const apiKey = process.env.GOOGLE_PLACES_API_KEY

    if (!placeId || !apiKey) {
      return NextResponse.json({ error: "Google Places API not configured" }, { status: 500 })
    }

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`,
    )

    const data = await response.json()

    if (data.status !== "OK") {
      throw new Error(`Google Places API error: ${data.status}`)
    }

    return NextResponse.json({
      reviews: data.result.reviews || [],
      status: "success",
    })
  } catch (error) {
    console.error("Google Reviews API error:", error)
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 })
  }
}
