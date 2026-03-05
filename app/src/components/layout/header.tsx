"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CATEGORIES } from "@/lib/constants";
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
  Menu,
  ChevronDown,
} from "lucide-react";

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

export function Header() {
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white font-bold text-sm">
            IH
          </div>
          <span className="text-lg font-bold text-gray-900">Innkjøpshub</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {/* Categories Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCategoriesOpen(!categoriesOpen)}
              onBlur={() => setTimeout(() => setCategoriesOpen(false), 200)}
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-md hover:bg-gray-50"
            >
              Kategorier
              <ChevronDown className="h-4 w-4" />
            </button>

            {categoriesOpen && (
              <div className="absolute left-0 top-full mt-1 w-[480px] rounded-xl border bg-white p-4 shadow-lg grid grid-cols-2 gap-1 z-50">
                {CATEGORIES.map((cat) => {
                  const Icon = iconMap[cat.icon] || Package;
                  return (
                    <Link
                      key={cat.slug}
                      href={`/kategorier/${cat.slug}`}
                      className="flex items-center gap-3 rounded-lg p-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      onClick={() => setCategoriesOpen(false)}
                    >
                      <Icon className="h-4 w-4 text-emerald-600 shrink-0" />
                      {cat.name}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link
            href="/leverandorer"
            className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-md hover:bg-gray-50"
          >
            Leverandører
          </Link>
          <Link
            href="/hvordan"
            className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-md hover:bg-gray-50"
          >
            Hvordan det fungerer
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <nav className="flex flex-col gap-1 mt-8">
                <p className="px-3 py-1 text-xs font-semibold text-gray-400 uppercase">
                  Kategorier
                </p>
                {CATEGORIES.map((cat) => {
                  const Icon = iconMap[cat.icon] || Package;
                  return (
                    <Link
                      key={cat.slug}
                      href={`/kategorier/${cat.slug}`}
                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
                    >
                      <Icon className="h-4 w-4 text-emerald-600" />
                      {cat.name}
                    </Link>
                  );
                })}
                <div className="my-2 border-t" />
                <Link
                  href="/leverandorer"
                  className="px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  Leverandører
                </Link>
                <Link
                  href="/hvordan"
                  className="px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  Hvordan det fungerer
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
