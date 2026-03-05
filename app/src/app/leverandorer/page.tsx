import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Search,
  ArrowRight,
  Building2,
  MapPin,
  Filter,
  Star,
  Package,
  Wrench,
  Monitor,
  ShieldCheck,
  Warehouse,
  Factory,
  HardHat,
  Settings,
  Thermometer,
  Sparkles,
  Car,
  Tractor,
  Clock,
} from "lucide-react";
import { CATEGORIES, COUNTIES } from "@/lib/constants";

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
  title: "Leverandører – Innkjøpshub",
  description:
    "Finn og sammenlign leverandører på Innkjøpshub. Søk etter kategori, område og vurdering.",
};

export default function LeverandorerPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4">
              Leverandørkatalog
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Finn den rette{" "}
              <span className="text-emerald-600">leverandøren</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Søk blant verifiserte leverandører i hele Norge. Filtrer etter
              kategori, område og vurdering.
            </p>
          </div>
        </div>
      </section>

      {/* Search and filters */}
      <section className="py-8 bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Søk etter leverandørnavn eller produkt..."
                className="pl-10"
                disabled
              />
            </div>
            <Button variant="outline" disabled>
              <MapPin className="mr-2 h-4 w-4" />
              Alle fylker
            </Button>
            <Button variant="outline" disabled>
              <Filter className="mr-2 h-4 w-4" />
              Kategori
            </Button>
          </div>
        </div>
      </section>

      {/* Coming soon content */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Coming soon notice */}
          <div className="mx-auto max-w-2xl text-center mb-16">
            <Card className="border-emerald-200 bg-emerald-50">
              <CardContent className="py-10 px-8">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 mb-5">
                  <Clock className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Leverandørkatalogen er under utvikling
                </h2>
                <p className="mt-3 text-gray-600 max-w-lg mx-auto">
                  Vi jobber med å bygge en komplett katalog over verifiserte
                  B2B-leverandører i Norge. I mellomtiden kan du opprette en
                  forespørsel, s&aring; finner vi leverandører for deg.
                </p>
                <div className="mt-6">
                  <Link href="/kategorier">
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                      Se kategorier
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Placeholder supplier cards */}
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Eksempel på leverandørprofiler
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card
                key={i}
                className="border border-dashed border-gray-200 opacity-60"
              >
                <CardContent className="py-6 px-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-300 shrink-0">
                      <Building2 className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="h-4 w-32 bg-gray-200 rounded mb-2" />
                      <div className="h-3 w-24 bg-gray-100 rounded mb-3" />
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star
                            key={j}
                            className="h-3 w-3 text-gray-200 fill-gray-200"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    <Badge
                      variant="secondary"
                      className="text-xs bg-gray-100 text-gray-400"
                    >
                      Kategori
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="text-xs bg-gray-100 text-gray-400"
                    >
                      Fylke
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by category */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Bla etter kategori
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {CATEGORIES.map((cat) => {
              const Icon = iconMap[cat.icon] || Package;
              return (
                <Link key={cat.slug} href={`/kategorier/${cat.slug}`}>
                  <Card className="group cursor-pointer border hover:border-emerald-200 hover:shadow-md transition-all h-full">
                    <CardContent className="flex flex-col items-center py-5 px-4 text-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                        <Icon className="h-5 w-5" />
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

      {/* CTA for suppliers */}
      <section className="py-20 bg-emerald-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white">
              Er du leverandør?
            </h2>
            <p className="mt-4 text-lg text-emerald-100">
              Registrer deg og bli synlig for tusenvis av innkjøpere i hele
              Norge. Start gratis.
            </p>
            <div className="mt-8">
              <Link href="/kategorier">
                <Button size="lg" variant="secondary">
                  Se kategorier
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
