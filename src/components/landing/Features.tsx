import { Pill, Bell, Timer, BarChart3, Heart, MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  { icon: Pill, title: "Список лекарств", desc: "Добавляй и управляй своими лекарствами" },
  { icon: Bell, title: "Напоминания", desc: "Утро, день, вечер или любое время" },
  { icon: Timer, title: "Отложить", desc: "Таймер на 10 минут или на другое время" },
  { icon: BarChart3, title: "Статистика", desc: "Еженедельная сводка приёмов" },
  { icon: Heart, title: "Мотивация", desc: "Поддерживающие сообщения (можно отключить)" },
  { icon: MessageCircle, title: "Обратная связь", desc: "Пиши нам прямо из бота" },
];

export default function Features() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="features" className="py-24 md:py-28 bg-muted/40">
      <div className="container mx-auto px-4" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Что умеет бот
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`bg-card border border-border rounded-xl p-6 shadow-md hover-scale ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 mb-4 rounded-lg bg-warm/10 flex items-center justify-center">
                <f.icon className="h-6 w-6 text-warm" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
