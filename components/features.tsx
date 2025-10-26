import { Brain, Shield, Zap, Users, Clock, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Features() {
  const features = [
    {
      icon: Brain,
      title: "هوش مصنوعی پیشرفته",
      description: "استفاده از جدیدترین الگوریتم‌های یادگیری عمیق برای تشخیص دقیق",
    },
    {
      icon: Shield,
      title: "امنیت بالا",
      description: "حفاظت کامل از اطلاعات پزشکی با استانداردهای بین‌المللی",
    },
    {
      icon: Zap,
      title: "سرعت بالا",
      description: "دریافت نتایج تشخیصی در کمتر از ۵ دقیقه",
    },
    {
      icon: Users,
      title: "تیم متخصص",
      description: "همکاری با بهترین پزشکان و متخصصان انکولوژی",
    },
    {
      icon: Clock,
      title: "دسترسی ۲۴ ساعته",
      description: "امکان استفاده از سیستم در هر زمان و مکان",
    },
    {
      icon: Award,
      title: "تایید شده",
      description: "دارای مجوزهای بین‌المللی و تایید سازمان‌های پزشکی",
    },
  ]

  return (
    null
  )
}
