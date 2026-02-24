import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const BOT_URL = "https://t.me/pillreminder_bot";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 bg-background"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
            Телеграм-бот, который вовремя напомнит принять лекарства
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Настрой напоминания за 2 минуты и больше ничего не забудешь
          </p>
          <Button asChild size="lg" className="hover-scale shadow-[0_4px_20px_hsl(var(--primary)/0.25)]">
            <a href={BOT_URL} target="_blank" rel="noopener noreferrer">
              <Send className="mr-2 h-5 w-5" />
              Начать бесплатно
            </a>
          </Button>
        </div>

        {/* Phone mockup */}
        <div className="flex justify-center">
          <div className="w-72 bg-card rounded-3xl border-2 border-border shadow-xl p-4">
            <div className="bg-primary rounded-t-xl px-4 py-3 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center text-sm">💊</div>
              <span className="text-primary-foreground font-semibold text-sm">Выпей лекарства</span>
            </div>
            <div className="bg-background rounded-b-xl p-3 space-y-3 min-h-[300px]">
              <div className="bg-card border border-border rounded-xl p-3 text-sm text-foreground max-w-[85%]">
                ⏰ Пора принять <b>Витамин D</b>!
              </div>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-primary text-primary-foreground text-xs px-3 py-1.5 rounded-full">✅ Принял</span>
                <span className="border border-border text-foreground text-xs px-3 py-1.5 rounded-full">⏳ Отложить</span>
                <span className="border border-border text-foreground text-xs px-3 py-1.5 rounded-full">❌ Не буду</span>
              </div>
              <div className="bg-card border border-border rounded-xl p-3 text-sm text-foreground max-w-[85%]">
                🎉 Отлично! Сегодня 5 из 5 лекарств принято!
              </div>
              <div className="bg-card border border-border rounded-xl p-3 text-sm text-foreground max-w-[85%]">
                📊 Недельная статистика: 92% приёмов вовремя
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
