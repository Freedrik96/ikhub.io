import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  ArrowLeft,
  FileText,
  Package,
  Wrench,
  Monitor,
  Building2,
  ShieldCheck,
  Warehouse,
  Factory,
  HardHat,
  Settings,
  Thermometer,
  Sparkles,
  Car,
  Tractor,
  Users,
  CheckCircle,
  Send,
} from "lucide-react";
import { CATEGORIES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Wrench, Monitor, Building2, ShieldCheck, Warehouse, Factory,
  HardHat, Package, Settings, Thermometer, Sparkles, Car, Tractor,
};

export function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);
  if (!category) return { title: "Kategori ikke funnet" };
  return {
    title: `${category.name} – Fa tilbud | Innkjopshub`,
    description: `Fa tilbud fra leverandorer innen ${category.name}. Beskriv hva du trenger, sa matcher vi deg med de beste leverandorene.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const Icon = iconMap[category.icon] || Package;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href="/kategorier"
              className="inline-flex items-center text-sm text-gray-500 hover:text-emerald-600 transition-colors"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Alle kategorier
            </Link>
          </div>

          <div className="flex items-start gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 shrink-0">
              <Icon className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {category.name}
              </h1>
              <p className="mt-3 text-lg text-gray-600 max-w-2xl">
                Fa tilbud fra leverandorer innen {category.name.toLowerCase()}.
                Beskriv hva du trenger, sa matcher vi deg med de beste
                leverandorene.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Card className="border-emerald-200 bg-gradient-to-br from-emerald-50 to-white">
            <CardContent className="py-10 px-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 mb-5">
                <Send className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Hva trenger du innen {category.name.toLowerCase()}?
              </h2>
              <p className="mt-3 text-gray-600 max-w-lg mx-auto">
                List opp varene du trenger, sa sender vi foresporselen til
                relevante leverandorer. Du mottar tilbud direkte – helt gratis.
              </p>
              <div className="mt-6">
                <Link href="/kategorier">
                  <Button
                    size="lg"
                    className="bg-emerald-600 hover:bg-emerald-700"
                  >
                    Se alle kategorier
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* How it works mini */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                icon: FileText,
                title: "1. Beskriv behovet",
                description: "List opp varer og mengder du trenger",
              },
              {
                icon: Users,
                title: "2. Vi finner leverandorer",
                description: "Foresporselen sendes til matchede leverandorer",
              },
              {
                icon: CheckCircle,
                title: "3. Motta tilbud",
                description: "Sammenlign og velg det beste tilbudet",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 mb-3">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related categories */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Andre kategorier
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {CATEGORIES.filter((c) => c.slug !== category.slug)
              .slice(0, 5)
              .map((cat) => {
                const CatIcon = iconMap[cat.icon] || Package;
                return (
                  <Link key={cat.slug} href={`/kategorier/${cat.slug}`}>
                    <Card className="group cursor-pointer border hover:border-emerald-200 hover:shadow-md transition-all h-full">
                      <CardContent className="flex flex-col items-center py-5 px-4 text-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                          <CatIcon className="h-5 w-5" />
                        </div>
                        <span className="mt-2 text-xs font-medium text-gray-700 group-hover:text-gray-900">
                          {cat.name}
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
