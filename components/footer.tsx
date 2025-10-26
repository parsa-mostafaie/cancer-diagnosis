import { Activity } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 lg:py-6">
      <div className="container mx-auto px-4 lg:px-[30px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-foreground/10">
                <Activity className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold py-3">تشخیص هوشمند سرطان</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              پلتفرم پیشرفته تشخیص سرطان با استفاده از هوش مصنوعی برای کمک به پزشکان و بیماران
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-0 py-3">دسترسی سریع</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#features"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  ویژگی‌ها
                </Link>
              </li>
              <li>
                <Link
                  href="/about#how-it-works"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  نحوه کار
                </Link>
              </li>
              <li>
                <Link
                  href="/about#about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  درباره ما
                </Link>
              </li>
              <li>
                <Link
                  href="/about#contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-0 py-3">منابع</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  مقالات علمی
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  راهنمای استفاده
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  سوالات متداول
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  حریم خصوصی
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80">
          <p>© محمد داودی - پارسا مصطفائی ۱۴۰۴</p>
        </div>
      </div>
    </footer>
  )
}
