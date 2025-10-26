import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section className="py-20 mb-20 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-l from-primary via-secondary to-accent p-12 lg:p-20">
          <div className="absolute inset-0 bg-[url('/abstract-medical-pattern.png')] opacity-10" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 text-balance">
              آماده برای تشخیص زودهنگام هستید؟
            </h2>
            <p className="text-lg lg:text-xl text-white/90 mb-10 text-pretty leading-relaxed leading-[2.55rem] py-[19px]">
              با استفاده از سیستم هوشمند ما، امروز اقدام کنید و سلامتی خود را تضمین کنید
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/">
                <Button size="lg" className="bg-white hover:bg-white/90 text-primary text-base px-8 h-12">
                  شروع رایگان
                  <ArrowLeft className="mr-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/about#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 text-base px-8 h-12 bg-transparent"
                >
                  تماس با ما
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
