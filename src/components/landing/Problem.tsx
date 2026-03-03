import { Send, Bell, Settings } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const cards = [
  {
    icon: Send,
    title: "Без приложений",
    desc: "Работает прямо в Telegram — ничего скачивать не нужно",
  },
  {
    icon: Bell,
    title: "Автоматически",
    desc: "Напоминания приходят строго по расписанию",
  },
  {
    icon: Settings,
    title: "Просто",
    desc: "Настройка занимает меньше минуты",
  },
];

export default function Problem() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="problem" className="py-24 md:py-28 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
          Забываешь лекарства?
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Бот напоминает в нужное время, ведёт статистику и мотивирует не пропускать приёмы.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`bg-gradient-to-br from-[hsl(205,80%,99%)] to-[hsl(205,60%,96%)] border border-border rounded-xl p-6 text-center shadow-md hover-scale ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <card.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{card.title}</h3>
              <p className="text-muted-foreground">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
