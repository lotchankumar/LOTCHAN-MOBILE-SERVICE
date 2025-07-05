"use client";

import { useEffect, useState } from "react";

export default function ReviewsDisplay() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data.reviews));
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {reviews.map((review) => (
        <div key={review._id} className="p-4 border bg-white shadow rounded">
          <p className="font-semibold text-gray-800">{review.name}</p>
          <p className="text-yellow-500">{"⭐".repeat(review.rating)}</p>
          <p className="text-gray-600">{review.message}</p>
        </div>
      ))}
    </div>
  );
}
