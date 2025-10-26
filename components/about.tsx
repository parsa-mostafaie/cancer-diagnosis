"use client"

import { motion } from "framer-motion"
import { User, Info } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  const team = [
    { name: "محمد داودی", role: "طراح وب‌سایت" },
    { name: "پارسا مصطفائی", role: "متخصص هوش مصنوعی" },
    { name: "پرهام بدری", role: "متخصص هوش مصنوعی" },
    { name: "عسل مروتی", role: "تحلیلگر داده" },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30 lg:py-[47px]">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">درباره ما</h2>
          
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:shadow-lg transition-all duration-300 border-border">
                <CardContent className="pt-8 pb-6">
                  <motion.div
                    className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center"
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  >
                    <User className="w-12 h-12 text-white" strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Card className="bg-card border-2 border-primary/20">
          <CardContent className="p-8 lg:p-12">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Info className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4">مهم</h3>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-4">
                  این پروژه یک پروژه شخصی و آموزشی است و هیچ‌گونه کاربرد تجاری ندارد. هدف از توسعه این سیستم، نمایش
                  توانایی‌های هوش مصنوعی در حوزه پزشکی و تشخیص بیماری‌ها می‌باشد.
                </p>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">توجه:</span> این سیستم جایگزین مشاوره پزشکی حرفه‌ای
                  نیست و قرار است در آینده نزدیک با ویژگی‌های بیشتر و دقت بالاتر توسعه یابد.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
