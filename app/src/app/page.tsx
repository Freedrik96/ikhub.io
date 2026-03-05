import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  CheckCircle,
  ArrowRight,
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
  Users,
  TrendingDown,
  Clock,
  BarChart3,
  Send,
} from "lucide-react";
import { CATEGORIES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Wrench, Monitor, Building2, ShieldCheck, Warehouse, Factory,
  HardHat, Package, Settings, Thermometer, Sparkles, Car, Tractor,
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4">
              B2B innkjopsplattform for Norge
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Beskriv hva du trenger, sa{" "}
              <span className="text-emerald-600">finner vi leverandorene</span>{" "}
              for deg
            </h1>
            <p className="mt-6 text-lg text-gray-600 sm:text-xl">
              Send inn hva du trenger, sa matcher vi deg med kvalifiserte
              leverandorer. Motta tilbud og velg den beste – helt gratis for
              innkjopere.
            </p>
            <div className="mt-10">
              <Link href="/kategorier">
                <Button size="lg" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700">
                  Se kategorier
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3-step process */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Hvordan det fungerer
            </h2>
            <p className="mt-3 text-gray-600">
              Tre enkle steg til bedre innkjop
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Beskriv behovet",
                description:
                  "Velg kategori og list opp hva du trenger – som en handleliste. Legg til mengde, leveringssted og onsket dato.",
                icon: FileText,
              },
              {
                step: "2",
                title: "Vi finner leverandorer",
                description:
                  "Vi matcher foresporselen med relevante leverandorer i ditt omrade. De mottar bestillingen og sender deg tilbud.",
                icon: Users,
              },
              {
                step: "3",
                title: "Velg det beste tilbudet",
                description:
                  "Sammenlign tilbudene pa pris, leveringstid og vilkar. Velg den leverandoren som passer best.",
                icon: CheckCircle,
              },
            ].map((item) => (
              <Card key={item.step} className="relative border-0 shadow-none bg-gray-50">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 mb-4">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white text-sm font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Kategorier</h2>
              <p className="mt-2 text-gray-600">
                Velg kategori for a komme i gang med bestillingen
              </p>
            </div>
            <Link href="/kategorier" className="hidden sm:block">
              <Button variant="outline">
                Se alle
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {CATEGORIES.map((cat) => {
              const Icon = iconMap[cat.icon] || Package;
              return (
                <Link key={cat.slug} href={`/kategorier/${cat.slug}`}>
                  <Card className="group cursor-pointer border hover:border-emerald-200 hover:shadow-md transition-all h-full">
                    <CardContent className="flex flex-col items-center py-6 px-4 text-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="mt-3 text-sm font-medium text-gray-700 group-hover:text-gray-900">
                        {cat.name}
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
          <div className="mt-6 sm:hidden text-center">
            <Link href="/kategorier">
              <Button variant="outline">
                Se alle kategorier
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Hvorfor bruke Innkjopshub?
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: TrendingDown,
                title: "Bedre priser",
                description:
                  "Flere leverandorer konkurrerer om din bestilling. Mer konkurranse gir lavere priser.",
              },
              {
                icon: Clock,
                title: "Spar tid",
                description:
                  "En foresporsel, flere tilbud. Slutt med a ringe rundt og sende e-poster.",
              },
              {
                icon: BarChart3,
                title: "Bedre beslutninger",
                description:
                  "Sammenlign tilbud pa pris, leveringstid og vilkar – alt pa ett sted.",
              },
              {
                icon: Users,
                title: "Finn nye leverandorer",
                description:
                  "Oppdage lokale og nasjonale leverandorer du ikke visste om.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For suppliers CTA */}
      <section className="py-20 bg-emerald-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white">
              Er du leverandor?
            </h2>
            <p className="mt-4 text-lg text-emerald-100">
              Fa relevante leads innen dine kategorier og omrader. Svar pa
              foresporsler og vinn nye kunder.
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
