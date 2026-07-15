import { MoreVertical } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import type { AdminDashboardOverviewData } from "../types";

type AdminDashboardOverviewProps = {
  data: AdminDashboardOverviewData;
};

export function AdminDashboardOverview({ data }: AdminDashboardOverviewProps) {
  return (
    <div className="space-y-3">
      <section className="grid gap-4 xl:grid-cols-2">
        {data.stats.map((stat, index) => {
          const accentClassName = index === 0 ? "text-[#f87272]" : "text-[#21c45d]";

          return (
            <Card
              key={stat.title}
              className="rounded-none border border-[#e8e0cc] bg-white py-0 shadow-none ring-0"
            >
              <CardContent className="p-0">
                <div className="space-y-4 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[18px] font-bold text-[#23272e]">{stat.title}</p>
                      <p className="mt-1 text-[14px] text-[#6a717f]">Admin performance summary</p>
                    </div>
                    <button
                      type="button"
                      aria-label={`More options for ${stat.title}`}
                      className="text-[#7d8491] transition-colors hover:text-[#364034]"
                    >
                      <MoreVertical className="size-4" />
                    </button>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-end gap-3">
                      <p className="text-[32px] font-bold tracking-tight text-[#023337]">
                        {stat.value}
                      </p>
                      <span className="pb-1 text-[16px] text-[#202020]">{stat.detail}</span>
                      <span className={`mb-1 text-[14px] font-medium ${accentClassName}`}>
                        {stat.change}
                      </span>
                    </div>
                    <p className="mt-2 text-[14px] text-[#6a717f]">
                      Live admin-facing metric for today&apos;s workflow.
                    </p>
                  </div>

                  <div className="flex justify-end">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 rounded-full border-[#6467f2] px-6 text-[16px] font-normal text-[#6467f2] hover:bg-[#f2f0ff]"
                    >
                      Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </section>

      <section>
        <Card className="rounded-lg border border-[#e7e1d5] bg-white py-0 shadow-[0_1px_3px_rgba(0,0,0,0.2)] ring-0">
          <CardContent className="p-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <CardTitle className="text-lg font-bold leading-6 text-[#23272e]">
                Weekly admin highlights
              </CardTitle>
              <div className="flex items-start gap-1 rounded-xl bg-lime-50 p-1">
                <div className="flex items-center gap-1 rounded-lg bg-stone-50 px-3 py-2">
                  <span className="text-xs font-medium leading-4 text-neutral-800">This week</span>
                </div>
                <div className="flex items-center gap-1 rounded-lg px-3 py-2">
                  <span className="text-xs leading-4 text-neutral-800">Last week</span>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {data.spotlight.map((item, index) => (
                <div
                  key={item.title}
                  className={`px-2 py-3.5 ${
                    index === 0
                      ? "border-b-2 border-[#fb923c] bg-gradient-to-b from-[rgba(251,146,60,0)] to-[rgba(251,146,60,0.05)]"
                      : "border-b border-violet-100"
                  }`}
                >
                  <p className="text-2xl font-bold leading-5 text-zinc-800">{item.value}</p>
                  <p className="mt-2 text-xs font-medium leading-4 text-neutral-400">{item.title}</p>
                  <p className="mt-3 text-sm leading-5 text-[#475467]">{item.subtitle}</p>
                  <p className="mt-3 text-sm font-medium text-[#21c45d]">{item.trend}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-lg border border-[#ece6da] bg-[#fcfaf5] p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-[18px] font-bold text-[#23272e]">Approval queues</h3>
                  <span className="rounded-full bg-[#fff1df] px-3 py-1 text-xs font-semibold text-[#cb9f10]">
                    Action needed
                  </span>
                </div>
                <div className="mt-4 space-y-3">
                  {data.approvals.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-xl border border-[#ece4d7] bg-white px-4 py-4"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`size-2 rounded-full ${
                            item.tone === "rose"
                              ? "bg-[#ef4444]"
                              : item.tone === "emerald"
                                ? "bg-[#21c45d]"
                                : "bg-[#f59e0b]"
                          }`}
                        />
                        <span className="text-sm text-[#344054]">{item.label}</span>
                      </div>
                      <span className="text-2xl font-semibold text-[#023337]">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-[#ece6da] bg-white p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-[18px] font-bold text-[#23272e]">Recent activity</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 rounded-full border-[#d4ad2e] px-4 text-[13px] font-semibold text-[#cb9f10] hover:bg-[#fff6dc]"
                  >
                    VIEW ALL
                  </Button>
                </div>
                <div className="mt-4 space-y-3">
                  {data.activity.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-xl border border-[#ece4d7] bg-[#faf8f3] p-4"
                    >
                      <p className="font-medium text-[#23272e]">{item.label}</p>
                      <p className="mt-1 text-sm text-[#6a717f]">{item.meta}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card className="rounded-lg border border-[#e7e1d5] bg-white py-0 shadow-[0_1px_3px_rgba(0,0,0,0.2)] ring-0">
          <CardHeader className="flex flex-row items-center justify-between gap-4 px-5 py-4">
            <CardTitle className="text-[18px] font-bold text-[#23272e]">Top authors snapshot</CardTitle>
            <Button
              variant="outline"
              size="sm"
              className="h-9 rounded-none border-[#d4ad2e] px-5 text-[13px] font-semibold text-[#cb9f10] hover:bg-[#fff6dc]"
            >
              VIEW ALL
            </Button>
          </CardHeader>
          <CardContent className="px-0 py-0">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left">
                <thead className="bg-[#f8f2e5] text-[11px] uppercase tracking-[0.04em] text-[#3d463d]">
                  <tr>
                    <th className="px-5 py-4 font-medium">Author</th>
                    <th className="px-5 py-4 font-medium">Genre</th>
                    <th className="px-5 py-4 font-medium">Status</th>
                    <th className="px-5 py-4 text-right font-medium">Earnings</th>
                  </tr>
                </thead>
                <tbody>
                  {data.authors.map((author) => (
                    <tr
                      key={author.id}
                      className="border-t border-transparent text-[15px] text-[#23272e]"
                    >
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-3">
                          <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#dde8d9] text-sm font-bold text-[#023337]">
                            {author.name
                              .split(" ")
                              .map((part) => part[0])
                              .join("")
                              .slice(0, 2)
                              .toUpperCase()}
                          </div>
                          <span className="font-bold tracking-[-0.15px] text-[#023337]">
                            {author.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-5 py-3">{author.genre}</td>
                      <td className="px-5 py-3">
                        <span
                          className={`inline-flex items-center gap-2 text-[15px] ${
                            author.status === "Pending Docs"
                              ? "text-[#ef4444]"
                              : author.status === "Reviewing"
                                ? "text-[#d4ad2e]"
                                : "text-[#21c45d]"
                          }`}
                        >
                          <span className="size-1.5 rounded-full bg-current" />
                          {author.status}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-right font-bold text-[#023337]">
                        {author.earnings}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
