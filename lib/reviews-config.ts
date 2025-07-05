export interface Review {
  id: string
  name: string
  rating: number
  review: string
  service: string
  date: string
  verified: boolean
  avatar?: string
}

// Mock reviews data - replace with your actual reviews
export const mockReviews: Review[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    rating: 5,
    review:
      "Excellent service! Fixed my phone screen at my doorstep. Very professional and honest pricing. Highly recommend LOTCHAN!",
    service: "Screen Repair",
    date: "2024-01-15",
    verified: true,
  },
  {
    id: "2",
    name: "Priya Sharma",
    rating: 5,
    review:
      "Quick and reliable service. Battery replacement was done perfectly with warranty. The technician was very knowledgeable.",
    service: "Battery Replacement",
    date: "2024-01-10",
    verified: true,
  },
  {
    id: "3",
    name: "Amit Patel",
    rating: 5,
    review:
      "Great experience with LOTCHAN. Pickup and delivery service is very convenient. Quality work and fair pricing!",
    service: "Camera Repair",
    date: "2024-01-08",
    verified: true,
  },
  {
    id: "4",
    name: "Sneha Reddy",
    rating: 4,
    review:
      "Good service overall. Fixed my charging port issue quickly. Only minor delay in pickup time but worth the wait.",
    service: "Charging Port Repair",
    date: "2024-01-05",
    verified: true,
  },
  {
    id: "5",
    name: "Vikram Singh",
    rating: 5,
    review: "Outstanding service! They came to my office and fixed my phone within 30 minutes. Very professional team.",
    service: "On-Door Repair",
    date: "2024-01-03",
    verified: true,
  },
]

// Google Reviews integration configuration
export const googleReviewsConfig = {
  placeId: "YOUR_GOOGLE_PLACE_ID", // Replace with your actual Google Place ID
  apiKey: "YOUR_GOOGLE_PLACES_API_KEY", // Replace with your Google Places API key
}
