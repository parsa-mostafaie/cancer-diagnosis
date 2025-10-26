import { Button } from "@/components/ui/button"
import { Activity } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary">
              <Activity className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl lg:text-2xl font-bold text-foreground">تشخیص هوشمند</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              خانه
            </Link>
            <Link
              href="/#features"
              className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              ویژگی‌ها
            </Link>
            <Link
              href="/about"
              className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              درباره ما
            </Link>
          </nav>

          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">شروع کنید</Button>
        </div>
      </div>
    </header>
  )
}
