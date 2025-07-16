import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  MessageCircle,
  Instagram,
  Smartphone,
  Truck,
  Wrench,
  ShoppingBag,
  MapPin,
  Clock,
  Shield,
  CheckCircle,
} from "lucide-react"
import ReviewForm from "@/components/ReviewForm";
import ReviewsDisplay from "@/components/ReviewsDisplay";

export default function LotchanLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            
              <img src="/logophone.png" className="h-12 w-12 text-white" />
            
            <div>
              <h1 className="text-2xl font-bold text-gray-900">LOTCHAN</h1>
              <p className="text-sm text-gray-600">Mobile Service Center</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button size="sm" className="bg-green-600 hover:bg-green-700" asChild>
              <a
                href="https://wa.me/+917092796463?text=Hi%20LOTCHAN,%20I%20need%20mobile%20repair%20service"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4 mr-1" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-orange-50 py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/Image_fx.jpg"
            alt="Mobile repair service"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Mobile Service at Your <span className="text-blue-600">Doorstep</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Professional mobile repair services with warranty. Fast, reliable, and honest service for 7+ years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4" asChild>
                <a
                  href="https://wa.me/+917092796463?text=Hi%20LOTCHAN,%20I%20need%20mobile%20repair%20service"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Book Now on WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                asChild
              >
                <a href="tel:+917092796463">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1 text-green-600" />
                Warranty Available
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1 text-orange-600" />
                Same Day Service as Possible
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1 text-blue-600" />
                10-20 km Coverage
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete mobile repair solutions with professional expertise and quality guarantee
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
              <CardContent className="p-0">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">On-Door Repair</h4>
                <p className="text-gray-600">We come to your location for convenient mobile repair services</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-2 hover:border-orange-200">
              <CardContent className="p-0">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-orange-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Pickup & Delivery</h4>
                <p className="text-gray-600">Free pickup and delivery service within our coverage area</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
              <CardContent className="p-0">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Screen/Software/Hardware</h4>
                <p className="text-gray-600">Expert repair for screens, softwares, batteries and internal components</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow border-2 hover:border-orange-200">
              <CardContent className="p-0">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="h-8 w-8 text-orange-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Accessories & Upgrades</h4>
                <p className="text-gray-600">Quality accessories and upgrade services for your mobile device</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose LOTCHAN */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose LOTCHAN?</h3>
            <p className="text-lg text-gray-600">Trusted mobile service provider with proven track record</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">7+</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Years Experience</h4>
              <p className="text-gray-600">Over 7 years of professional mobile repair experience</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Fast & Reliable</h4>
              <p className="text-gray-600">Quick turnaround time with honest and reliable service</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Wide Coverage</h4>
              <p className="text-gray-600">10-20 km service radius for maximum convenience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Service Areas</h3>
            <p className="text-lg text-gray-600">We provide mobile repair services in the following areas</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              "Karumathampatti",
              "Somanur",
              "Kaniyur",
              "Thekkalur",
              "Neelambur",
              "Annur Road",
            ].map((area, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-gray-900 font-medium">{area}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Badge variant="outline" className="text-sm px-4 py-2">
              Coverage Radius: 10-20 km from city center
            </Badge>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Customer Reviews</h3>
            <p className="text-lg text-gray-600">Real feedback from our satisfied customers</p>
          </div>

          <ReviewsDisplay />

          <div className="mt-12">
            <div className="text-center mb-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Had a great experience?</h4>
              <p className="text-gray-600">Share your feedback and help others choose LOTCHAN</p>
            </div>
            <ReviewForm />
          </div>
        </div>
      </section>

      {/* Warranty Notice */}
      <section className="py-12 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Shield className="h-12 w-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Warranty Available</h3>
            <p className="text-blue-100 text-lg">
              We provide warranty on our repair services.
              <span className="font-semibold text-white"> Condition: No physical damage and water damage</span>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h3>
            <p className="text-lg text-gray-600">Ready to fix your mobile? Contact us now!</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 w-full sm:w-auto" asChild>
              <a
                href="https://wa.me/+917092796463?text=Hi%20LOTCHAN,%20I%20need%20mobile%20repair%20service"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Us
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full sm:w-auto bg-transparent"
              asChild
            >
              <a href="tel:+917092796463">
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-600 text-orange-600 hover:bg-orange-50 w-full sm:w-auto bg-transparent"
              asChild
            >
              <a href="https://www.instagram.com/lotchan_mobileservice/" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 mr-2" />
                Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">LOTCHAN</h4>
                  <p className="text-gray-400 text-sm">Mobile Service Center</p>
                </div>
              </div>
              <p className="text-gray-400">
                Professional mobile repair services at your doorstep with 7+ years of experience.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-gray-400">
                <li>On-Door Repair</li>
                <li>Pickup & Delivery</li>
                <li>Screen Replacement</li>
                <li>Battery Replacement</li>
                <li>Software & Hardware Repair</li>
                <li>Accessories</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <div className="space-y-2 text-gray-400">
                <p>WhatsApp: Available 24/7</p>
                <p>Coverage: 10-20 km radius</p>
                <p>Service: Same day repair as possible</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 LOTCHAN Mobile Service Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
