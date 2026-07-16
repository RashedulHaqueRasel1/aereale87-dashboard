"use client";

import { useEffect, useState } from "react";
import {
  CalendarDays,
  Eye,
  Mail,
  MapPin,
  Phone,
  Search,
  SlidersHorizontal,
  Trash2,
  X,
} from "lucide-react";

import type { AdminAuthorRecord, AdminAuthorsData, AuthorStatus } from "../types";

type AdminAuthorsPageProps = {
  data: AdminAuthorsData;
};

const statusClassNames: Record<AuthorStatus, string> = {
  Founding: "border-amber-200 bg-amber-100 text-amber-800",
  Active: "border-green-200 bg-green-100 text-green-800",
  Pending: "border-amber-200 bg-amber-100 text-amber-800",
  Suspended: "border-rose-200 bg-rose-100 text-rose-700",
};

export function AdminAuthorsPage({ data }: AdminAuthorsPageProps) {
  const [selectedAuthor, setSelectedAuthor] = useState<AdminAuthorRecord | null>(null);

  useEffect(() => {
    if (!selectedAuthor) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedAuthor(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedAuthor]);

  const summaryCards = [
    {
      label: "Total Authors",
      value: data.summary.totalAuthors.toLocaleString(),
    },
    {
      label: "Active Authors",
      value: data.summary.activeAuthors.toLocaleString(),
    },
    {
      label: "Founding Authors",
      value: data.summary.foundingAuthors.toLocaleString(),
      trailing: `/${data.summary.foundingAuthorsLimit}`,
    },
    {
      label: "Pending Approvals",
      value: data.summary.pendingApprovals.toLocaleString(),
    },
  ];

  const filterItems = [
    {
      label: `All Authors (${data.filters.allAuthors})`,
      active: true,
    },
    {
      label: `Founding Authors (${data.filters.foundingAuthors})`,
      active: false,
    },
    {
      label: `Pending (${data.filters.pendingAuthors})`,
      active: false,
    },
    {
      label: "Suspended",
      active: false,
    },
  ];

  const modalStatusClassNames: Record<AuthorStatus, string> = {
    Founding: "bg-amber-100 text-amber-800",
    Active: "bg-emerald-100 text-emerald-700",
    Pending: "bg-stone-200 text-neutral-800",
    Suspended: "bg-rose-100 text-rose-700",
  };

  return (
    <>
      <div className="space-y-4">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map((card) => (
          <article
            key={card.label}
            className="border border-stone-300 bg-white px-6 py-5"
          >
            <div className="space-y-2">
              <p className="text-sm leading-5 text-neutral-500">{card.label}</p>
              <div className="flex items-end gap-1">
                <p className="text-3xl font-bold leading-9 text-neutral-800">{card.value}</p>
                {card.trailing ? (
                  <span className="pb-1 text-lg leading-7 text-neutral-500">{card.trailing}</span>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-white ring-1 ring-stone-300">
        <div className="flex flex-col gap-4 border-b border-stone-200 p-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-2.5">
            {filterItems.map((item) => (
              <button
                key={item.label}
                type="button"
                className={
                  item.active
                    ? "bg-orange-400 px-4 py-2 text-sm font-medium text-white"
                    : "rounded-xl px-4 py-2 text-sm font-medium text-neutral-500 transition-colors hover:bg-stone-100"
                }
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <label className="relative block">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-neutral-500" />
              <input
                type="search"
                placeholder="Search authors..."
                className="h-12 w-full border border-stone-300 bg-stone-100 pl-9 pr-4 text-sm text-neutral-800 outline-none placeholder:text-gray-900/50 focus:border-[#d4ad2e] sm:w-64"
              />
            </label>

            <button
              type="button"
              aria-label="Filter authors"
              className="flex size-10 items-center justify-center border border-stone-300 text-neutral-500 transition-colors hover:bg-stone-100"
            >
              <SlidersHorizontal className="size-4" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[980px] w-full">
            <thead className="border-b bg-lime-50">
              <tr className="text-left text-xs font-medium uppercase tracking-[0.04em] text-neutral-800">
                <th className="px-5 py-3">Author</th>
                <th className="px-5 py-3">Books</th>
                <th className="px-5 py-3">Audiobooks</th>
                <th className="px-5 py-3 text-center">Readers</th>
                <th className="px-5 py-3 text-center">Join Date</th>
                <th className="px-5 py-3 text-center">Status</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.authors.map((author) => (
                <tr key={author.id} className="border-b border-stone-200 text-sm text-neutral-800">
                  <td className="px-5 py-4">
                    <div className="space-y-1">
                      <p className="font-semibold leading-5 text-neutral-800">{author.name}</p>
                      <p className="text-xs leading-4 text-neutral-500">{author.email}</p>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-base">{author.books}</td>
                  <td className="px-5 py-4 text-base">{author.audiobooks}</td>
                  <td className="px-5 py-4 text-center text-base">{author.readers}</td>
                  <td className="px-5 py-4 text-center text-base">{author.joinDate}</td>
                  <td className="px-5 py-4">
                    <div className="flex justify-center">
                      <span
                        className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${statusClassNames[author.status]}`}
                      >
                        {author.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        type="button"
                        aria-label={`Delete ${author.name}`}
                        className="text-[#ef4444] transition-colors hover:text-[#dc2626]"
                      >
                        <Trash2 className="size-5" strokeWidth={1.8} />
                      </button>
                      <button
                        type="button"
                        aria-label={`View ${author.name}`}
                        className="rounded-full p-2 text-slate-700 transition-colors hover:bg-stone-100"
                        onClick={() => setSelectedAuthor(author)}
                      >
                        <Eye className="size-5" strokeWidth={1.8} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      </div>

      {selectedAuthor ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1f2937]/45 px-4 py-8"
          onClick={() => setSelectedAuthor(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="author-modal-title"
            className="relative max-h-[calc(100vh-4rem)] w-full max-w-4xl overflow-y-auto border border-stone-200 bg-white shadow-[0_28px_80px_rgba(15,23,42,0.18)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close author details"
              className="absolute right-5 top-5 z-10 rounded-full border border-stone-200 bg-white p-2 text-neutral-500 transition-colors hover:bg-stone-100 hover:text-neutral-800"
              onClick={() => setSelectedAuthor(null)}
            >
              <X className="size-4" />
            </button>

            <div className="space-y-10 p-8 md:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-start">
                <div className="flex size-24 shrink-0 items-center justify-center rounded-full border-4 border-stone-100 bg-[#f6f3ed] text-3xl font-bold text-neutral-800">
                  {selectedAuthor.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </div>

                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-center gap-3 pr-10">
                    <h2
                      id="author-modal-title"
                      className="text-2xl font-bold leading-8 text-neutral-800"
                    >
                      {selectedAuthor.name}
                    </h2>
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold leading-4 ${modalStatusClassNames[selectedAuthor.status]}`}
                    >
                      {selectedAuthor.status}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-1 text-xs font-bold leading-4 text-amber-500">
                      Author
                    </span>
                  </div>

                  <div className="space-y-2.5 text-base leading-5 text-neutral-500">
                    <div className="flex items-center gap-2">
                      <Mail className="size-4 shrink-0" />
                      <span>{selectedAuthor.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="size-4 shrink-0" />
                      <span>{selectedAuthor.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="size-4 shrink-0" />
                      <span>{selectedAuthor.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarDays className="size-4 shrink-0" />
                      <span>Joined {selectedAuthor.joinDate}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-neutral-500">
                  About Author
                </p>
                <p className="max-w-3xl text-base leading-7 text-neutral-500">
                  {selectedAuthor.bio}
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  type="button"
                  className="flex-1 bg-orange-400 px-8 py-5 text-center text-base font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-orange-500"
                >
                  Approve Author
                </button>
                <button
                  type="button"
                  className="flex-1 border-2 border-orange-400 px-8 py-5 text-center text-base font-bold uppercase tracking-[0.12em] text-orange-400 transition-colors hover:bg-orange-50"
                >
                  Suspend Author
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
