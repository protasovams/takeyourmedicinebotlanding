import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const BOT_URL = "https://t.me/TakeMedicineReminderBot";

const navItems = [
  { label: "Главная", href: "#hero" },
  { label: "Возможности", href: "#features" },
  { label: "Как работает", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#footer" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/95 backdrop-blur shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#hero" className="text-xl font-bold text-primary flex items-center gap-1">
          💊 Выпей лекарства
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button asChild size="sm" className="hover-scale">
            <a href={BOT_URL} target="_blank" rel="noopener noreferrer">
              Открыть бота
            </a>
          </Button>
        </nav>

        {/* Mobile burger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <SheetTitle className="text-primary font-bold">💊 Меню</SheetTitle>
            <nav className="flex flex-col gap-4 mt-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Button asChild className="mt-4 hover-scale">
                <a href={BOT_URL} target="_blank" rel="noopener noreferrer">
                  Открыть бота
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
