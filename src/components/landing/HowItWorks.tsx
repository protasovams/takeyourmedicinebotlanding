import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    num: "1",
    title: "Открой бота",
    desc: "Найди @pillreminder_bot в Telegram и нажми «Старт»",
    placeholder: "🔍 @pillreminder_bot → /start",
  },
  {
    num: "2",
    title: "Настрой лекарства",
    desc: "Добавь названия и время приёма — займёт минуту",
    placeholder: "💊 Витамин D — 09:00\n💊 Омега-3 — 13:00",
  },
  {
    num: "3",
    title: "Получай напоминания",
    desc: "Бот пришлёт уведомление точно в нужное время",
    placeholder: "⏰ Принять Витамин D?\n✅ Принял | ⏳ Отложить",
  },
];

export default function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="how-it-works" className="py-24 md:py-28 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          3 простых шага
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                {s.num}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground mb-4">{s.desc}</p>
              <div className="bg-card border border-border rounded-xl p-4 text-left text-sm text-foreground whitespace-pre-line shadow-sm">
                {s.placeholder}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
