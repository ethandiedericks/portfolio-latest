import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function Companies() {
  const companies = [
    { name: "Vercel", logo: "/itsupport.webp" },
    { name: "AWS", logo: "/Labzepp-logo-no-bg-481x93.svg" },
    { name: "Microsoft Azure", logo: "/liam-graham-psychometry-logo-2.png" },
    { name: "Google Play", logo: "/john_b_scott_logo.png" },
  ];

  return (
    <section className="container mx-auto px-4 py-8 max-w-4xl">
      <h2 className="text-lg font-medium  text-center">
        Worked with Companies like
      </h2>

      <div className="relative">
        <InfiniteMovingCards
          items={companies}
          direction="right"
          speed="fast"
          pauseOnHover={true}
          className="py-4"
        />
      </div>
    </section>
  );
}
