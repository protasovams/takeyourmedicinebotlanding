import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  { q: "Бот бесплатный?", a: "Да, полностью бесплатно. Никаких скрытых платежей." },
  { q: "Можно настроить время напоминаний?", a: "Да — утро, день, вечер или любое произвольное время." },
  { q: "Работает на iPhone и Android?", a: "Да, нужен только установленный Telegram на любом устройстве." },
  { q: "Как отключить еженедельные сводки?", a: "В настройках бота — команда /settings." },
];

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="py-24 md:py-28 bg-muted/40">
      <div className="container mx-auto px-4 max-w-2xl" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Часто задаваемые вопросы
        </h2>
        <div className={isVisible ? "animate-fade-in-up" : "opacity-0"}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-5 shadow-sm"
              >
                <AccordionTrigger className="text-base font-semibold text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
