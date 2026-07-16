import { Check, Search, SlidersHorizontal, Trash2 } from "lucide-react";

import type { AdminOrderRecord, AdminOrderStatus, AdminOrdersData } from "../types";

type AdminOrdersPageProps = {
  data: AdminOrdersData;
};

const statusClassNames: Record<AdminOrderStatus, string> = {
  Completed: "border-emerald-200 bg-emerald-100 text-emerald-800",
  Cancelled: "border-rose-200 bg-rose-100 text-rose-700",
};

function SummaryCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <article className="border border-stone-300 bg-white px-6 py-6">
      <div className="space-y-2">
        <p className="text-sm leading-5 text-neutral-800">{label}</p>
        <p className="text-3xl font-bold leading-9 text-neutral-800">{value}</p>
      </div>
    </article>
  );
}

function StatusBadge({ status }: { status: AdminOrderRecord["status"] }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium leading-4 ${statusClassNames[status]}`}
    >
      {status}
    </span>
  );
}

export function AdminOrdersPage({ data }: AdminOrdersPageProps) {
  return (
    <div className="space-y-4">
      <section className="grid gap-4 xl:grid-cols-3">
        {data.summary.map((item) => (
          <SummaryCard key={item.id} label={item.label} value={item.value} />
        ))}
      </section>

      <section className="border border-stone-300 bg-white p-5">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-4 border-b border-stone-200 p-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex min-h-9 flex-1 flex-wrap items-center gap-2">
              {data.tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={
                    tab.active
                      ? "bg-orange-400 px-4 py-2 text-sm font-medium leading-5 text-stone-50"
                      : "rounded-xl px-4 py-2 text-sm font-medium leading-4 text-neutral-800"
                  }
                >
                  {tab.label}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <label className="relative block">
                <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-neutral-500" />
                <input
                  type="search"
                  placeholder={data.searchPlaceholder}
                  className="h-12 w-full border border-stone-300 bg-stone-100 pl-9 pr-4 text-sm text-neutral-800 outline-none placeholder:text-gray-900/50 focus:border-[#d4ad2e] sm:w-64"
                />
              </label>

              <button
                type="button"
                aria-label="Filter orders"
                className="flex size-10 items-center justify-center border border-stone-300 text-neutral-500 transition-colors hover:bg-stone-100"
              >
                <SlidersHorizontal className="size-4" />
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-800">{data.tableTitle}</h2>

            <div className="overflow-x-auto">
              <table className="min-w-[1080px] w-full">
                <thead className="border-b bg-lime-50">
                  <tr className="text-left text-xs font-medium uppercase text-neutral-800">
                    <th className="px-5 py-2">Order ID</th>
                    <th className="px-5 py-2">Customer</th>
                    <th className="px-5 py-2">Products</th>
                    <th className="px-5 py-2 text-center">Amount</th>
                    <th className="px-5 py-2 text-center">Date</th>
                    <th className="px-5 py-2 text-center">Status</th>
                    <th className="px-5 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.orders.map((order) => (
                    <tr key={order.id} className="border-b border-stone-200">
                      <td className="px-5 py-3 text-sm font-medium leading-5 text-neutral-800">
                        {order.orderId}
                      </td>
                      <td className="px-5 py-3 text-base leading-5 text-zinc-800">
                        {order.customer}
                      </td>
                      <td className="px-5 py-3 text-base leading-5 text-zinc-800">
                        {order.products}
                      </td>
                      <td className="px-5 py-3 text-center text-base leading-5 text-neutral-800">
                        {order.amount}
                      </td>
                      <td className="px-5 py-3 text-center text-base leading-5 text-neutral-800">
                        {order.date}
                      </td>
                      <td className="px-5 py-3">
                        <div className="flex justify-center">
                          <StatusBadge status={order.status} />
                        </div>
                      </td>
                      <td className="px-5 py-3">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            aria-label={`Approve ${order.orderId}`}
                            className="rounded-full p-2 text-green-900 transition-colors hover:bg-emerald-50"
                          >
                            <Check className="size-6" strokeWidth={2.2} />
                          </button>
                          <button
                            type="button"
                            aria-label={`Delete ${order.orderId}`}
                            className="text-[#ff4b55] transition-colors hover:text-[#dc2626]"
                          >
                            <Trash2 className="size-5" strokeWidth={1.9} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col gap-3 px-1 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
        <p>{data.pagination.showingLabel}</p>

        <div className="flex items-center gap-1 self-end sm:self-auto">
          <button
            type="button"
            className="h-6 border border-stone-300 px-3 text-[10px] leading-4 text-neutral-500"
          >
            Previous
          </button>
          {data.pagination.pages.map((page) => (
            <button
              key={page}
              type="button"
              className={
                page === data.pagination.currentPage
                  ? "flex size-6 items-center justify-center bg-[#486c59] text-[10px] leading-4 text-white"
                  : "flex size-6 items-center justify-center border border-stone-300 text-[10px] leading-4 text-neutral-500"
              }
            >
              {page}
            </button>
          ))}
          <button
            type="button"
            className="h-6 border border-stone-300 px-3 text-[10px] leading-4 text-neutral-500"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
