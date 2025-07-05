"use client";

import { useState } from "react";

export default function ReviewForm() {
  const [form, setForm] = useState({ name: "", message: "", rating: 5 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      alert("Thanks for your review!");
      setForm({ name: "", message: "", rating: 5 });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6 bg-white p-6 shadow-xl rounded-2xl">
  <div className="relative">
    <input
      id="name"
      type="text"
      value={form.name}
      onChange={(e) => setForm({ ...form, name: e.target.value })}
      className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 focus:outline-none focus:border-blue-500"
      placeholder=" "
      required
    />
    <label
      htmlFor="name"
      className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
    >
      Your Name
    </label>
  </div>

  <div className="relative">
    <textarea
      id="message"
      value={form.message}
      onChange={(e) => setForm({ ...form, message: e.target.value })}
      className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 min-h-[120px] focus:outline-none focus:border-blue-500 resize-none"
      placeholder=" "
      required
    />
    <label
      htmlFor="message"
      className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
    >
      Your Review
    </label>
  </div>

  <div className="relative">
    <select
      value={form.rating}
      onChange={(e) => setForm({ ...form, rating: +e.target.value })}
      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 bg-white"
    >
      <option value="" disabled>Select Rating</option>
      {[5, 4, 3, 2, 1].map((r) => (
        <option key={r} value={r}>
          {r} Star{r > 1 ? "s" : ""}
        </option>
      ))}
    </select>
  </div>

  <button
    type="submit"
    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
  >
    Submit Review
  </button>
</form>

  );
}
