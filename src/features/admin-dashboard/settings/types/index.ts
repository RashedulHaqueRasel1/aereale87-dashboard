export type AdminSettingsProfile = {
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  location: string;
  biography: string;
  badgeLabel: string;
  roleLabel: string;
};

export type AdminSettingsPasswordSection = {
  currentPasswordHint: string;
  forgotPasswordLabel: string;
  newPasswordHint: string;
  confirmPasswordHint: string;
};

export type AdminSettingsData = {
  profile: AdminSettingsProfile;
  security: AdminSettingsPasswordSection;
};
