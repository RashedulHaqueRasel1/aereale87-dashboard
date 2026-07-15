export type AdminNotificationRecord = {
  id: string;
  category: string;
  title: string;
  message: string;
  date: string;
};

export type AdminNotificationsData = {
  notifications: AdminNotificationRecord[];
};
