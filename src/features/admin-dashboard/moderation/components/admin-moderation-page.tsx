"use client";

import { useEffect, useState } from "react";
import { Check, Eye, Search, SlidersHorizontal, Star, X } from "lucide-react";

import type { AdminModerationData, ModerationReviewRecord } from "../types";

type AdminModerationPageProps = {
  data: AdminModerationData;
};

export function AdminModerationPage({ data }: AdminModerationPageProps) {
  const [selectedReview, setSelectedReview] = useState<ModerationReviewRecord | null>(null);

  useEffect(() => {
    if (!selectedReview) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedReview(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedReview]);

  return (
    <>
      <div className="space-y-4">
        <section className="grid gap-4 xl:grid-cols-3">
        {data.summaryCards.map((card) => (
          <article
            key={card.title}
            className="border border-stone-300 bg-white px-5 py-5 shadow-[0_1px_2px_-1px_rgba(0,0,0,0.1)]"
          >
            <div className="flex min-h-32 flex-col">
              <div className="space-y-2">
                <p className="text-lg font-bold leading-6 text-zinc-800">{card.title}</p>
                <p className="text-sm leading-5 text-neutral-500">{card.periodLabel}</p>
              </div>

              <div className="mt-5 flex items-end justify-between gap-4">
                <div className="space-y-2">
                  <p className="text-3xl font-bold leading-9 text-teal-950">{card.currentValue}</p>
                  <p className="text-sm leading-5 text-neutral-500">
                    Previous 7days{" "}
                    <span className="font-bold text-[#6b6bff]">({card.previousValue})</span>
                  </p>
                </div>

                <button
                  type="button"
                  className="rounded-full border border-[#7c7cff] px-4 py-1.5 text-sm leading-5 text-[#7c7cff] transition-colors hover:bg-[#f4f3ff]"
                >
                  Details
                </button>
              </div>
            </div>
          </article>
        ))}
        </section>

        <section className="overflow-hidden border border-stone-300 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col gap-4 border-b border-stone-200 p-5 lg:flex-row lg:items-center lg:justify-between">
            <h2 className="text-lg font-bold leading-7 text-neutral-800">{data.tableTitle}</h2>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <label className="relative block">
                <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-neutral-500" />
                <input
                  type="search"
                  placeholder={data.searchPlaceholder}
                  className="h-10 w-full border border-stone-300 bg-stone-100 pl-9 pr-4 text-sm text-neutral-800 outline-none placeholder:text-neutral-800/50 focus:border-[#d4ad2e] sm:w-56"
                />
              </label>

              <button
                type="button"
                className="inline-flex h-10 items-center justify-center gap-2 border border-stone-300 px-3 text-sm font-medium text-neutral-800 transition-colors hover:bg-stone-100"
              >
                <SlidersHorizontal className="size-4" />
                <span>Filter</span>
              </button>
            </div>
          </div>
          

          <div className="overflow-x-auto">
            <table className="min-w-[980px] w-full">
              <thead className="bg-lime-50">
                <tr className="text-left text-xs uppercase tracking-[0.04em] text-teal-950">
                  <th className="px-3 py-4 font-medium">Book Name</th>
                  <th className="px-4 py-4 text-center font-medium">Author</th>
                  <th className="px-4 py-4 text-center font-medium">Category</th>
                  <th className="px-4 py-4 text-center font-medium">Content Type</th>
                  <th className="px-4 py-4 text-center font-medium">Submitted</th>
                  <th className="px-4 py-4 text-center font-medium">Status</th>
                  <th className="px-4 py-4 text-center font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.reviews.map((review) => (
                  <tr key={review.id} className="border-b border-stone-200">
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-sm border border-stone-200 bg-[#fff7ec] text-xs font-bold text-[#d97706]">
                          BK
                        </div>
                        <p className="max-w-48 truncate text-sm leading-5 text-black">
                          {review.bookName}
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center gap-2">
                        <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#e7d6cf] text-[10px] font-bold text-[#74473b]">
                          {review.authorInitials}
                        </div>
                        <p className="text-sm font-medium leading-5 text-neutral-800">
                          {review.authorName}
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center text-sm leading-5 text-neutral-500">
                      {review.category}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex justify-center">
                        <span className="inline-flex rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1.5 text-sm font-medium leading-4 text-zinc-900">
                          {review.contentType}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center text-sm leading-5 text-black">
                      {review.submittedAt}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex justify-center">
                        <span className="inline-flex min-w-24 justify-center rounded-full bg-amber-300/10 px-3 py-1.5 text-sm font-medium leading-5 text-amber-400">
                          {review.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <button
                        type="button"
                        className="mx-auto inline-flex items-center justify-center gap-2 rounded-full px-2.5 py-1.5 text-sm font-medium leading-5 text-black transition-colors hover:bg-stone-100"
                        onClick={() => setSelectedReview(review)}
                      >
                        <Eye className="size-4" strokeWidth={1.8} />
                        <span>View Details</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col gap-3 border-t border-stone-200 px-3 py-3 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
            <p>{data.pagination.showingLabel}</p>

            <div className="flex items-center gap-1 self-end sm:self-auto">
              <button
                type="button"
                className="h-5 border border-stone-300 px-2 text-[10px] leading-4 text-neutral-500"
              >
                Previous
              </button>
              {data.pagination.pages.map((page) => (
                <button
                  key={page}
                  type="button"
                  className={
                    page === data.pagination.currentPage
                      ? "flex size-5 items-center justify-center bg-[#486c59] text-[10px] leading-4 text-white"
                      : "flex size-5 items-center justify-center border border-stone-300 text-[10px] leading-4 text-neutral-500"
                  }
                >
                  {page}
                </button>
              ))}
              <button
                type="button"
                className="h-5 border border-stone-300 px-2 text-[10px] leading-4 text-neutral-500"
              >
                Next
              </button>
            </div>
          </div>
        </section>
      </div>

      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          selectedReview ? "pointer-events-auto bg-black/55" : "pointer-events-none bg-black/0"
        }`}
        onClick={() => setSelectedReview(null)}
      >
        <aside
          role="dialog"
          aria-modal="true"
          aria-labelledby="review-workspace-title"
          className={`absolute right-0 top-0 flex h-full w-full max-w-sm flex-col border-l border-stone-300 bg-[#fbf7ee] shadow-[0_24px_80px_rgba(15,23,42,0.32)] transition-transform duration-300 sm:max-w-md ${
            selectedReview ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b border-stone-200 bg-white px-6 py-4">
            <h2 id="review-workspace-title" className="text-xl font-bold text-neutral-800">
              Review Workspace
            </h2>
            <button
              type="button"
              aria-label="Close review workspace"
              className="rounded-full p-2 text-neutral-500 transition-colors hover:bg-stone-100 hover:text-neutral-800"
              onClick={() => setSelectedReview(null)}
            >
              <X className="size-4" />
            </button>
          </div>

          {selectedReview ? (
            <div className="flex-1 overflow-y-auto p-6">
              <div className="flex flex-col items-center gap-8">
                <div className="flex w-full flex-col items-center">
                  <div className="flex h-52 w-32 items-center justify-center rounded-[10px] border border-stone-200 bg-[linear-gradient(160deg,#f4ece1_0%,#d9b179_48%,#2a2116_48%,#111111_100%)] shadow-md">
                    <div className="rotate-[-12deg] rounded bg-[#121212] px-4 py-5 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                      {selectedReview.bookName}
                    </div>
                  </div>

                  <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-amber-400/20 bg-amber-400/10 px-2.5 py-1">
                    <span className="size-1.5 rounded-full bg-amber-400" />
                    <span className="text-xs font-medium leading-4 text-amber-400">
                      Pending Review
                    </span>
                  </div>

                  <h3 className="mt-3 text-center text-[28px] font-bold leading-8 text-neutral-800">
                    {selectedReview.bookName}
                  </h3>
                  <p className="mt-2 text-sm font-medium leading-5 text-green-900">
                    By {selectedReview.authorName}
                  </p>

                  <div className="mt-3 flex flex-wrap justify-center gap-2">
                    <span className="rounded-sm bg-stone-200 px-2.5 py-1 text-xs font-medium leading-4 text-neutral-500">
                      {selectedReview.category}
                    </span>
                    <span className="rounded-sm bg-stone-200 px-2.5 py-1 text-xs font-medium leading-4 text-neutral-500">
                      {selectedReview.format}
                    </span>
                    <span className="rounded-sm bg-stone-200 px-2.5 py-1 text-xs font-medium leading-4 text-neutral-500">
                      {selectedReview.contentType}
                    </span>
                  </div>
                </div>

                <div className="w-full space-y-1">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-neutral-500">
                    Description
                  </p>
                  <p className="pt-1 text-sm leading-5 text-neutral-800">
                    {selectedReview.description}
                  </p>
                </div>

                <div className="flex w-full items-start gap-3 rounded-xl border border-amber-400/30 bg-gradient-to-r from-amber-400/20 to-amber-400/0 p-4">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-amber-400 text-white shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
                    <Star className="size-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-5 text-neutral-800">
                      Founding Author Priority
                    </p>
                    <p className="mt-0.5 text-xs leading-4 text-neutral-500">
                      {selectedReview.priorityNote}
                    </p>
                  </div>
                </div>

                <div className="w-full space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-neutral-500">
                      Editor Checklist
                    </p>
                  </div>
                  <div className="space-y-3 border border-stone-300 bg-stone-100 p-4">
                    {selectedReview.checklist.map((item) => (
                      <div key={item.id} className="flex items-start gap-3">
                        <div className="pt-0.5">
                          {item.checked ? (
                            <div className="flex size-5 items-center justify-center rounded-sm border border-green-900 bg-green-900 text-white">
                              <Check className="size-3.5" strokeWidth={2.4} />
                            </div>
                          ) : (
                            <div className="size-5 rounded-sm border border-stone-200 bg-stone-100" />
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-medium leading-4 text-neutral-800">
                            {item.title}
                          </p>
                          {item.detail ? (
                            <p className="mt-1 text-xs leading-4 text-neutral-500">
                              {item.detail}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full space-y-3">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-neutral-500">
                    Quick Actions
                  </p>
                  <div className="space-y-2.5">
                    <button
                      type="button"
                      className="flex w-full items-center justify-center bg-orange-400 px-8 py-5 text-base font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-orange-500"
                    >
                      Approve Publication
                    </button>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        className="min-h-20 border-2 border-orange-400 px-4 py-5 text-center text-sm font-bold uppercase tracking-[0.12em] text-orange-400 transition-colors hover:bg-orange-50"
                      >
                        Request
                        <br />
                        Changes
                      </button>
                      <button
                        type="button"
                        className="min-h-20 border-2 border-orange-400 px-4 py-5 text-center text-sm font-bold uppercase tracking-[0.12em] text-orange-400 transition-colors hover:bg-orange-50"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </aside>
      </div>
    </>
  );
}
