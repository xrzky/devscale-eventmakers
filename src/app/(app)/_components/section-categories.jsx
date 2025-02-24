import { CategoryCard } from './category-card'

export const SectionCategories = async () => {
  // fake data category
  const categories = [
    {
      id: 1,
      name: 'Webinar',
      total: 10,
    },
    {
      id: 2,
      name: 'Health and Care',
      total: 5,
    },
    {
      id: 3,
      name: 'Sports',
      total: 4,
    },
    {
      id: 4,
      name: 'Business',
      total: 10,
    },
  ]

  return (
    <section className="space-y-4 pt-8">
      <h1 className="text-white text-2xl font-semibold">
        Explore By Categories
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {categories.map((category) => {
          return (
            <CategoryCard
              key={category.id}
              category={category.name}
              totalEvents={category.total}
            />
          )
        })}
      </div>
    </section>
  )
}
