import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

const services = [
  {
    title: "Йога с певчими птицами",
    description: "Классическая хатха-йога в окружении живых певчих птиц. Их пение создаёт неповторимую атмосферу, которая помогает глубже войти в медитативное состояние и раскрыть потенциал практики.",
    iconName: "Bird",
  },
  {
    title: "Растяжка",
    description: "Мягкие техники стретчинга для раскрытия тела и снятия мышечных зажимов. Подходит для любого уровня подготовки. Регулярные занятия возвращают телу лёгкость и свободу движения.",
    iconName: "Flower2",
  },
  {
    title: "Пилатес",
    description: "Работа с глубокими мышцами и корсетом тела. Пилатес развивает осанку, укрепляет спину и формирует красивый силуэт. Занятия проходят в тишине — только вы, инструктор и пение птиц.",
    iconName: "Activity",
  },
  {
    title: "Прома цона",
    description: "Особая дыхательная практика в гармонии с природными звуками. Работа с праной через осознанное дыхание восстанавливает энергетический баланс и наполняет тело жизненной силой.",
    iconName: "Wind",
  },
]

export function Services() {
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
    <section ref={sectionRef} id="services" className="py-32 lg:py-40 px-6 lg:px-12 bg-sand/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p
            className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Наши направления
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Практики для тела и духа
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-background p-10 lg:p-14 transition-all duration-1000 hover:bg-card ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="text-sage mb-6 transition-transform duration-500 group-hover:scale-110">
                <Icon name={service.iconName} size={32} />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
