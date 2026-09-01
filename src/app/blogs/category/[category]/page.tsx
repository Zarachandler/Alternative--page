import { notFound } from 'next/navigation';
import { BlogsPageContent } from '../../page';
import { blogCategories } from '../../blog-categories';

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

const categoryBySlug = Object.fromEntries(
  blogCategories
    .filter((category) => category !== 'All')
    .map((category) => [category.toLowerCase().replace(/\s+/g, '-'), category]),
);

export function generateStaticParams() {
  return Object.keys(categoryBySlug).map((category) => ({ category }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = categoryBySlug[categorySlug];

  if (!category) {
    notFound();
  }

  return <BlogsPageContent initialCategory={category} />;
}
