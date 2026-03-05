import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Wrench,
  Monitor,
  Building2,
  ShieldCheck,
  Warehouse,
  Factory,
  HardHat,
  Package,
  Settings,
  Thermometer,
  Sparkles,
  Car,
  Tractor,
} from "lucide-react";
import { CATEGORIES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Wrench,
  Monitor,
  Building2,
  ShieldCheck,
  Warehouse,
  Factory,
  HardHat,
  Package,
  Settings,
  Thermometer,
  Sparkles,
  Car,
  Tractor,
};

export const metadata = {
  title: "Kategorier – Innkjøpshub",
  description:
    "Utforsk alle B2B innkjøpskategorier på Innkjøpshub. Fra verktøy og IT til bygg og HMS.",
};

export default function KategorierPage() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Kategorier</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {CATEGORIES.map((category) => {
            const Icon = iconMap[category.icon] || Package;
            return (
              <Link
                key={category.slug}
                href={`/kategorier/${category.slug}`}
              >
                <Card className="group cursor-pointer border hover:border-emerald-200 hover:shadow-md transition-all h-full">
                  <CardContent className="flex items-center gap-4 py-5 px-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 transition-colors shrink-0">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                      {category.name}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
