import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  FileText,
  CheckCircle,
  Send,
  BarChart3,
  Bell,
  Users,
  ArrowRight,
  Building2,
  Package,
  Eye,
  MessageSquare,
  Star,
  TrendingUp,
} from "lucide-react";

export const metadata = {
  title: "Hvordan det fungerer – Innkjøpshub",
  description:
    "Lær hvordan Innkjøpshub gjør B2B innkjøp enklere for både innkjøpere og leverandører.",
};

export default function HvordanPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4">
              Slik fungerer det
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              En enklere vei til{" "}
              <span className="text-emerald-600">bedre innkjøp</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Innkjøpshub kobler innkjøpere med leverandører i en effektiv
              plattform. Enten du skal kjøpe inn eller selge, har vi gjort
              prosessen enkel og oversiktlig.
            </p>
          </div>
        </div>
      </section>

      {/* Buyer flow */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-3">
              For innkjøpere
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900">
              Slik kjøper du smartere
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Spar tid og penger ved å samle all tilbudsinnhenting og
              prissammenligning p&aring; ett sted.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "1",
                icon: Search,
                title: "Finn produkter",
                description:
                  "S&oslash;k i over 13 kategorier eller bla gjennom leverand&oslash;renes kataloger for &aring; finne det du trenger.",
              },
              {
                step: "2",
                icon: FileText,
                title: "Opprett forespørsel",
                description:
                  "Beskriv behovet ditt, legg ved spesifikasjoner og sett tidsfrist. Forespørselen sendes til relevante leverandører.",
              },
              {
                step: "3",
                icon: BarChart3,
                title: "Sammenlign tilbud",
                description:
                  "Motta tilbud i standardisert format. Sammenlign pris, leveringstid og vilkår side om side.",
              },
              {
                step: "4",
                icon: CheckCircle,
                title: "Velg og bestill",
                description:
                  "Velg den beste leverandøren basert på dine kriterier. All kommunikasjon og dokumentasjon lagres.",
              },
            ].map((item) => (
              <Card
                key={item.step}
                className="relative border-0 shadow-none bg-gray-50"
              >
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

          <div className="mt-10 text-center">
            <Link href="/kategorier">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                Utforsk kategorier
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Supplier flow */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-3">
              For leverandører
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900">
              Slik vinner du nye kunder
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Bli synlig for tusenvis av innkjøpere og motta kvalifiserte leads
              direkte i din kategori.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "1",
                icon: Building2,
                title: "Opprett profil",
                description:
                  "Registrer bedriften din, velg kategorier og dekningsområde. Last opp produktkatalog og sertifiseringer.",
              },
              {
                step: "2",
                icon: Bell,
                title: "Motta varsler",
                description:
                  "Få varsler når nye forespørsler matcher dine kategorier og geografiske områder.",
              },
              {
                step: "3",
                icon: Send,
                title: "Send tilbud",
                description:
                  "Svar på forespørsler med pris, leveringstid og vilkår. Bruk standardmaler for rask respons.",
              },
              {
                step: "4",
                icon: Star,
                title: "Bygg omdømme",
                description:
                  "Lever god kvalitet og bygg opp vurderinger. Jo bedre omdømme, desto mer synlighet får du.",
              },
            ].map((item) => (
              <Card
                key={item.step}
                className="relative border-0 shadow-none bg-white"
              >
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

          <div className="mt-10 text-center">
            <Link href="/kategorier">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                Utforsk kategorier
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits comparison */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Fordeler for begge parter
            </h2>
            <p className="mt-3 text-gray-600">
              Innkjøpshub skaper verdi for b&aring;de kj&oslash;per og selger
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Buyer benefits */}
            <Card className="border-emerald-200">
              <CardContent className="pt-6 pb-6 px-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                    <Users className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Innkjøpere
                  </h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Sammenlign priser fra flere leverandører raskt",
                    "Standardiserte tilbud gjør beslutninger enklere",
                    "Finn leverandører du ikke visste om",
                    "All dokumentasjon samlet på ett sted",
                    "Helt gratis å bruke for innkjøpere",
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Supplier benefits */}
            <Card className="border-emerald-200">
              <CardContent className="pt-6 pb-6 px-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                    <Package className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Leverandører
                  </h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Få kvalifiserte leads rett i din kategori",
                    "Nå nye kunder uten dyr markedsføring",
                    "Vis frem produkter og sertifiseringer",
                    "Bygg omdømme gjennom gode leveranser",
                    "Fleksible abonnement tilpasset din størrelse",
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Ofte stilte spørsmål
            </h2>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto">
              Har du spørsmål? Her er svar på de vanligste.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {[
              {
                q: "Koster det noe for innkjøpere?",
                a: "Nei, det er helt gratis å bruke Innkjøpshub som innkjøper. Du kan opprette forespørsler, motta tilbud og sammenligne leverandører uten kostnad.",
              },
              {
                q: "Hvordan tjener Innkjøpshub penger?",
                a: "Leverandører betaler et månedlig abonnement for å være synlige på plattformen og motta leads. Se vår prisside for detaljer.",
              },
              {
                q: "Kan jeg bruke plattformen i hele Norge?",
                a: "Ja, Innkjøpshub dekker hele Norge. Leverandører kan velge hvilke fylker de dekker, og innkjøpere kan filtrere etter region.",
              },
              {
                q: "Hvordan sikrer dere kvaliteten på leverandørene?",
                a: "Alle leverandører verifiseres ved registrering. I tillegg bygger vi et vurderingssystem basert på gjennomførte leveranser.",
              },
            ].map((faq) => (
              <Card key={faq.q} className="border-0 shadow-none bg-white">
                <CardContent className="pt-6 pb-6 px-6">
                  <div className="flex items-start gap-3">
                    <MessageSquare className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{faq.q}</h3>
                      <p className="mt-2 text-sm text-gray-600">{faq.a}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-emerald-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white">
              Klar til å komme i gang?
            </h2>
            <p className="mt-4 text-lg text-emerald-100">
              Enten du er innkjøper eller leverandør, er det gratis å registrere
              seg.
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
