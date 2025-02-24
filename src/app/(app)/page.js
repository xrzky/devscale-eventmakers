import { SectionEvents } from "./_components/section-events";
import { HeroSection } from "./_components/hero-section";
import { CategoryCard } from "./_components/category-card";

export default function Page() {
  return (
    <>
      <HeroSection />
      <SectionEvents />
      <section className="space-y-4 pt-8">
        <h1 className="text-white text-2xl font-semibold">
          Explore By Categories
        </h1>
        <div className="grid grid-cols-4 gap-4">
          <CategoryCard category="Webinar" totalEvents={10} />
          <CategoryCard category="Health and Care" totalEvents={5} />
          <CategoryCard category="Sports" totalEvents={4} />
          <CategoryCard category="Business" totalEvents={10} />
        </div>
      </section>
    </>
  );
}
