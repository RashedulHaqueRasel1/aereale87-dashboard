import type { AdminNotificationsData } from "../types";

export async function getAdminNotifications(): Promise<AdminNotificationsData> {
  return Promise.resolve({
    notifications: [
      {
        id: "admin-notification-1",
        category: "Review Queue",
        title: "Twelve manuscripts are waiting for final approval",
        message:
          "The morning moderation batch is ready for final review so the publishing queue can move forward on schedule.",
        date: "Jul 15, 2026",
      },
      {
        id: "admin-notification-2",
        category: "Author Management",
        title: "Three new author profiles need verification",
        message:
          "Identity documents were uploaded successfully, but profile approval is still pending from the admin team.",
        date: "Jul 15, 2026",
      },
      {
        id: "admin-notification-3",
        category: "Orders",
        title: "Refund request queue has new escalations",
        message:
          "Two premium customer orders were flagged for manual investigation due to failed fulfillment confirmation.",
        date: "Jul 14, 2026",
      },
      {
        id: "admin-notification-4",
        category: "Payouts",
        title: "Weekly payout batch is ready for confirmation",
        message:
          "Finance has prepared the latest payout file and is waiting on admin sign-off before processing partner disbursements.",
        date: "Jul 13, 2026",
      },
      {
        id: "admin-notification-5",
        category: "Platform Notice",
        title: "Support team resolved overnight incident",
        message:
          "All affected content uploads were restored and no author submissions are currently blocked by the platform issue.",
        date: "Jul 12, 2026",
      },
    ],
  });
}
