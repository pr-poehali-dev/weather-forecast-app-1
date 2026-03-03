import { useEffect, useRef, useState } from "react"

const pricing = [
  {
    number: "01",
    title: "Разовое занятие",
    price: "800 ₽",
    description: "Попробуйте любое направление без обязательств. Идеально для первого знакомства с нашей студией и атмосферой певчих птиц.",
  },
  {
    number: "02",
    title: "Абонемент 4 занятия",
    price: "3 000 ₽",
    description: "750 ₽ за занятие. Начните регулярную практику и почувствуйте первые изменения в теле и состоянии уже через несколько недель.",
  },
  {
    number: "03",
    title: "Абонемент 6 занятий",
    price: "4 600 ₽",
    description: "767 ₽ за занятие. Оптимальный выбор для устойчивой практики. Тело начинает раскрываться, а ум — успокаиваться.",
  },
  {
    number: "04",
    title: "Абонемент 8 занятий",
    price: "6 200 ₽",
    description: "775 ₽ за занятие. Полное погружение в практику. Для тех, кто готов к настоящей трансформации — физической и внутренней.",
  },
]

export function Process() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="process" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p
                className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Стоимость
              </p>
              <h2
                className={`font-serif text-4xl md:text-5xl font-light text-foreground mb-6 text-balance transition-all duration-1000 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Цены и
                <span className="italic"> абонементы</span>
              </h2>
              <p
                className={`text-muted-foreground leading-relaxed transition-all duration-1000 delay-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Выберите формат, который подходит именно вам. Абонементы действуют на все направления — можно комбинировать йогу, растяжку и пилатес.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-0">
              {pricing.map((item, index) => (
                <div
                  key={item.number}
                  className={`group py-10 lg:py-14 border-t border-border last:border-b transition-all duration-1000 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  <div className="flex gap-8 lg:gap-12">
                    <span className="font-serif text-4xl lg:text-5xl text-stone/50 group-hover:text-sage transition-colors duration-500">
                      {item.number}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <h3 className="font-serif text-2xl md:text-3xl text-foreground">{item.title}</h3>
                        <span className="font-serif text-2xl md:text-3xl text-sage whitespace-nowrap">{item.price}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed max-w-xl">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
