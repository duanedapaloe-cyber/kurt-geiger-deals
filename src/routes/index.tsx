import { createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Claim Your $750 Kurt Geiger Gift Card" },
      { name: "description", content: "Follow these simple steps to claim your $750 Kurt Geiger gift card." },
      { property: "og:title", content: "Claim Your $750 Kurt Geiger Gift Card" },
      { property: "og:description", content: "Follow these simple steps to claim your $750 Kurt Geiger gift card." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const steps = [
  'Click on "Claim Now"',
  "Enter your email and basic info",
  "Complete 4-5 sponsored deals",
  "Enjoy your $750 Kurt Geiger gift card!",
];

const faqs = [
  ["How long do the deals take?", "Most deals take just a few minutes each to complete."],
  ["What are deals?", "Deals are offers from our sponsors, such as trials, sign-ups or purchases."],
  ["How many deals do I have to do?", "You need to complete 4-5 sponsored deals to qualify."],
  ["When will I receive my reward?", "Once your deals are verified, your $750 Kurt Geiger gift card is sent to your email."],
];

function Index() {
  return (
    <main className="min-h-screen bg-background px-5 py-10 font-sans text-foreground">
      <div className="mx-auto max-w-md">
        <header className="text-center">
          <h1 className="font-serif text-3xl font-bold tracking-[0.25em]">KURT GEIGER</h1>
          <div className="mx-auto mt-3 h-0.5 w-14 bg-blush" />
        </header>
        <h2 className="mt-8 text-center font-serif text-2xl font-semibold">Complete Your Registration</h2>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Follow these simple steps to claim your $750 Kurt Geiger gift card
        </p>
        <ol className="mt-6 space-y-3">
          {steps.map((s, i) => (
            <li key={s} className="flex items-center gap-4 rounded-lg border border-border bg-secondary px-4 py-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">{i + 1}</span>
              <span className="font-medium">{s}</span>
            </li>
          ))}
        </ol>
        <a href="#" className="mt-7 block rounded-lg bg-primary py-4 text-center text-lg font-semibold tracking-[0.2em] text-primary-foreground shadow-lg transition-colors hover:bg-blush hover:text-foreground">
          CLAIM NOW
        </a>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          By clicking "Claim Now", you agree to complete the required steps to receive your gift card.
        </p>
        <h3 className="mt-10 font-serif text-xl font-semibold">Frequently Asked Questions</h3>
        <Accordion type="single" collapsible className="mt-4 space-y-2">
          {faqs.map(([q, a]) => (
            <AccordionItem key={q} value={q} className="rounded-lg border border-border px-4">
              <AccordionTrigger className="font-medium">{q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <footer className="mt-10 flex justify-center gap-4 text-xs font-medium">
          <a href="#" className="hover:underline">User Agreement</a><span className="text-muted-foreground">•</span>
          <a href="#" className="hover:underline">Privacy Policy</a><span className="text-muted-foreground">•</span>
          <a href="https://www.kurtgeiger.com" className="hover:underline">KurtGeiger.com</a>
        </footer>
      </div>
    </main>
  );
}
