import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Instagram } from "lucide-react"
import { getWhatsAppLink, getPhoneLink, getInstagramLink } from "@/lib/contact-config"

interface ContactButtonsProps {
  size?: "sm" | "lg" | "default"
  variant?: "default" | "outline"
  className?: string
  showAll?: boolean
}

export function ContactButtons({
  size = "default",
  variant = "default",
  className = "",
  showAll = true,
}: ContactButtonsProps) {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${className}`}>
      {/* WhatsApp Button */}
      <Button size={size} className="bg-green-600 hover:bg-green-700 w-full sm:w-auto" asChild>
        <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="h-5 w-5 mr-2" />
          Book Now on WhatsApp
        </a>
      </Button>

      {showAll && (
        <>
          {/* Phone Button */}
          <Button
            size={size}
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full sm:w-auto bg-transparent"
            asChild
          >
            <a href={getPhoneLink()}>
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </a>
          </Button>

          {/* Instagram Button */}
          <Button
            size={size}
            variant="outline"
            className="border-orange-600 text-orange-600 hover:bg-orange-50 w-full sm:w-auto bg-transparent"
            asChild
          >
            <a href={getInstagramLink()} target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5 mr-2" />
              Instagram
            </a>
          </Button>
        </>
      )}
    </div>
  )
}
