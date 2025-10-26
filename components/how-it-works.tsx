import { Upload, Scan, FileCheck, CheckCircle } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      number: "۱",
      title: "بارگذاری تصاویر",
      description: "تصاویر پزشکی خود را آپلود کنید",
    },
    {
      icon: Scan,
      number: "۲",
      title: "تحلیل عکس",
      description: "سیستم AI تصاویر را تحلیل می‌کند",
    },
    {
      icon: FileCheck,
      number: "۳",
      title: "پردازش داده‌ها",
      description: "داده‌ها بررسی می‌شوند",
    },
    {
      icon: CheckCircle,
      number: "۴",
      title: "دریافت نتیجه",
      description: "گزارش کامل را دریافت کنید",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-muted/30 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">نحوه کار سیستم</h2>
          
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent mb-6">
                    <Icon className="w-10 h-10 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 right-0 w-full h-0.5 bg-gradient-to-l from-primary/50 to-transparent -z-10" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
