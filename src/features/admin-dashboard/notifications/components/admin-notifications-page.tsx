import { PageTitle } from "@/components/shared/page-title";

import type {
  AdminNotificationRecord,
  AdminNotificationsData,
} from "../types";

type AdminNotificationsPageProps = {
  data: AdminNotificationsData;
};

function NotificationCard({ item }: { item: AdminNotificationRecord }) {
  return (
    <article className="self-stretch rounded-lg bg-white p-6 shadow-[0_18px_40px_rgba(31,42,36,0.08)] outline outline-1 outline-stone-200">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-medium uppercase leading-4 tracking-[0.24em] text-neutral-500">
                {item.category}
              </p>
              <h2 className="text-2xl font-normal leading-8 text-neutral-800">
                {item.title}
              </h2>
            </div>
            <p className="shrink-0 text-sm leading-5 text-neutral-500">{item.date}</p>
          </div>

          <p className="max-w-[760px] text-base font-medium leading-5 text-neutral-500">
            {item.message}
          </p>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            className="inline-flex h-9 items-center justify-center rounded-full bg-green-900 px-6 py-2 text-sm font-medium leading-5 text-white shadow-[0_12px_24px_rgba(30,77,58,0.22)] transition hover:bg-[#214c3b]"
          >
            View Message
          </button>
        </div>
      </div>
    </article>
  );
}

export function AdminNotificationsPage({ data }: AdminNotificationsPageProps) {
  return (
    <div className="space-y-6">
      <PageTitle
        eyebrow="Admin Dashboard"
        title="Notifications"
        description="Review the latest moderation alerts, author verification updates, payout reminders, and platform notices for the admin team."
      />

      <section className="space-y-3">
        {data.notifications.map((item) => (
          <NotificationCard key={item.id} item={item} />
        ))}
      </section>
    </div>
  );
}
