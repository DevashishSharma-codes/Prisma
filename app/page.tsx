 
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Clock, Utensils, Star, Leaf } from "lucide-react"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] max-h-[800px]">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image 
            src="/hero-bg.jpg" 
            alt="Restaurant interior"
            fill
            className="object-cover"
            priority
          />
          <div className="container relative z-20 h-full flex flex-col justify-center items-start text-white mx-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Authentic Flavors, <br />
              <span className="text-green-400">Exceptional</span> Dining
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Experience the finest culinary creations made with locally-sourced ingredients and passion.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg">
                <Link href="/menu">
                  View Menu <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-black border-white hover:bg-white/10 hover:text-white">
                <Link href="/reservations">
                  Make Reservation
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto py-16 bg-secondary/10">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background">
                <Clock className="h-10 w-10 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Open Daily</h3>
                <p className="text-muted-foreground">
                  Monday - Sunday: 11am - 10pm
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background">
                <Utensils className="h-10 w-10 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Diverse Menu</h3>
                <p className="text-muted-foreground">
                  50+ dishes crafted by our master chefs
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background">
                <Leaf className="h-10 w-10 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Fresh Ingredients</h3>
                <p className="text-muted-foreground">
                  Locally-sourced, organic produce
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Preview Section */}
        <section className="container mx-auto py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Signature Dishes</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A selection of our most popular dishes loved by our customers
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Truffle Pasta",
                  description: "Handmade pasta with black truffle cream sauce",
                  price: 18.99,
                  image: "/truffle-pasta.webp",
                  rating: 4.9
                },
                {
                  name: "Grilled Salmon",
                  description: "Fresh salmon with lemon butter sauce",
                  price: 22.50,
                  image: "/grilled-salmon.jpg",
                  rating: 4.8
                },
                {
                  name: "Chocolate Soufflé",
                  description: "Warm chocolate dessert with vanilla ice cream",
                  price: 9.99,
                  image: "/chocolate-souffle.jpg",
                  rating: 5.0
                }
              ].map((item, index) => (
                <div key={index} className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative h-64">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-6 bg-background">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{item.name}</h3>
                      <span className="font-bold text-primary">${item.price.toFixed(2)}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm">{item.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link href="/menu">
                  View Full Menu <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container mx-auto py-16 bg-secondary/10">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Guests Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it - hear from our satisfied customers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  comment: "The best dining experience I've had this year! The truffle pasta is to die for.",
                  rating: 5
                },
                {
                  name: "Michael Chen",
                  comment: "Consistently excellent food and service. Our go-to spot for special occasions.",
                  rating: 5
                },
                {
                  name: "Emily Rodriguez",
                  comment: "The ambiance is perfect and every dish we tried was flavorful and beautifully presented.",
                  rating: 4
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-background p-6 rounded-lg shadow-sm">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.comment}"</p>
                  <p className="font-medium">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Cuisine?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Book your table now or order online for pickup
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link href="/reservations">
                  Reserve a Table
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/order">
                  Order Online
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  )
}