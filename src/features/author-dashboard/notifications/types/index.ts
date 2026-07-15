export type AuthorNotificationRecord = {
  id: string;
  category: string;
  title: string;
  message: string;
  date: string;
};

export type AuthorNotificationsData = {
  notifications: AuthorNotificationRecord[];
};
