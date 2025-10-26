export function Stats() {
  const stats = [
    { value: "۹۵٪", label: "دقت تشخیص" },
    { value: "-", label: "بیمار درمان شده" },
    { value: "۲۴/۷", label: "پشتیبانی آنلاین" },
    { value: "۱۵+", label: "نوع سرطان قابل تشخیص" },
  ]

  return (
    <section className="py-16 bg-muted/30 lg:py-8">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm lg:text-base text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
