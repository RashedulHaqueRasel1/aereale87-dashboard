import type { AdminSettingsData } from "../types";

export async function getAdminSettings(): Promise<AdminSettingsData> {
  return Promise.resolve({
    profile: {
      fullName: "Olivia Carter",
      firstName: "Olivia",
      lastName: "Carter",
      email: "olivia@example.com",
      phoneNumber: "(406) 555-0184",
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
      biography:
        "Supervises author approvals, payout readiness, content moderation, and daily storefront operations across the publishing platform.",
      badgeLabel: "Founding Admin",
      roleLabel: "Super Admin",
    },
    security: {
      currentPasswordHint: "Enter current password",
      forgotPasswordLabel: "Forgot Current Password? Click here",
      newPasswordHint: "Enter new password",
      confirmPasswordHint: "Re-enter new password",
    },
  });
}
