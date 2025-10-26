import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { About } from "@/components/about"
import { HowItWorks } from "@/components/how-it-works"
import { Mail, Phone, MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Spacer for fixed header */}
      <div className="h-16 lg:h-20" />

      <About />
      <HowItWorks />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">تماس با ما</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">ایمیل</h3>
              <a
                href="mailto:mdavoudi2011@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors break-all"
                dir="ltr"
              >
                mdavoudi2011@gmail.com
              </a>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">تلفن</h3>
              <a
                href="tel:09306664699"
                className="text-muted-foreground hover:text-primary transition-colors"
                dir="ltr"
              >
                09306664699
              </a>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">موقعیت</h3>
              <p className="text-muted-foreground">ایران</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
