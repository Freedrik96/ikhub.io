import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Plattform</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/kategorier" className="text-sm text-gray-600 hover:text-gray-900">
                  Kategorier
                </Link>
              </li>
              <li>
                <Link href="/leverandorer" className="text-sm text-gray-600 hover:text-gray-900">
                  Leverandorer
                </Link>
              </li>
              <li>
                <Link href="/hvordan" className="text-sm text-gray-600 hover:text-gray-900">
                  Hvordan det fungerer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-600 text-white font-bold text-xs">
              IH
            </div>
            <span className="text-sm font-semibold text-gray-900">Innkjøpshub</span>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Innkjøpshub. Alle rettigheter reservert.
          </p>
        </div>
      </div>
    </footer>
  );
}
