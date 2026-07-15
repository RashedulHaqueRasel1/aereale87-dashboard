import type { AuthorNotificationsData } from "../types";

export async function getAuthorNotifications(): Promise<AuthorNotificationsData> {
  return Promise.resolve({
    notifications: [
      {
        id: "notification-1",
        category: "Support Response",
        title: "Royalty Calculation Question",
        message:
          "We have reviewed your request and updated the royalty information for your book.",
        date: "Jun 20, 2026",
      },
      {
        id: "notification-2",
        category: "Support Response",
        title: "Payment Inquiry",
        message:
          "Your payment has been processed successfully. Please check your account for the latest update.",
        date: "Jul 15, 2026",
      },
      {
        id: "notification-3",
        category: "Support Response",
        title: "Account Verification",
        message:
          "We have verified your account details. You can now access all features without restrictions.",
        date: "Aug 01, 2026",
      },
      {
        id: "notification-4",
        category: "Support Response",
        title: "Subscription Renewal",
        message:
          "Your subscription has been renewed for another year. Thank you for staying with us!",
        date: "Sep 10, 2026",
      },
      {
        id: "notification-5",
        category: "Support Response",
        title: "Technical Support Request",
        message:
          "We have resolved the technical issue you reported. If you encounter any further problems, please let us know.",
        date: "Oct 05, 2026",
      },
    ],
  });
}
