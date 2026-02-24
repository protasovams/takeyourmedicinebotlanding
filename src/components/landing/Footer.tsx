import { Button } from "@/components/ui/button";

const BOT_URL = "https://t.me/pillreminder_bot";

export default function Footer() {
  return (
    <footer id="footer" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 text-center space-y-6">
        <p className="text-2xl font-bold">
          💊 Выпей лекарства — твой помощник по приёму лекарств
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
          <a href={BOT_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
            Обратная связь
          </a>
          <span>Политика конфиденциальности</span>
          <a href={BOT_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
            @pillreminder_bot
          </a>
        </div>
        <Button
          asChild
          size="lg"
          className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover-scale"
        >
          <a href={BOT_URL} target="_blank" rel="noopener noreferrer">
            Открыть бота
          </a>
        </Button>
        <p className="text-xs opacity-60">
          © 2026. Не является медицинским советом. Проконсультируйтесь с врачом.
        </p>
      </div>
    </footer>
  );
}
