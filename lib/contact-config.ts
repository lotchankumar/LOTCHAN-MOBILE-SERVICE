// Contact Configuration - Update these with your actual details
export const contactConfig = {
  // Replace with your actual WhatsApp number (include country code, no + sign)
  whatsapp: {
    number: "1234567890", // Example: "919876543210" for Indian number
    message: "Hi LOTCHAN, I need mobile repair service",
  },

  // Replace with your actual phone number
  phone: "+1234567890", // Example: "+919876543210"

  // Replace with your actual Instagram handle
  instagram: "lotchan_mobile", // Just the username, not the full URL

  // Replace with your actual business address/location
  location: {
    address: "Your Business Address Here",
    city: "Your City",
    pincode: "123456",
  },
}

// Helper functions to generate links
export const getWhatsAppLink = () =>
  `https://wa.me/${contactConfig.whatsapp.number}?text=${encodeURIComponent(contactConfig.whatsapp.message)}`

export const getPhoneLink = () => `tel:${contactConfig.phone}`

export const getInstagramLink = () => `https://instagram.com/${contactConfig.instagram}`
