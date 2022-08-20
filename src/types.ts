export interface FrontmatterEvent {
  title: string;
  description?: string;
  date: string;
  location?: string;
  organizer: string;
  organizerLink?: string;
}

export interface FrontmatterConfig {
  application: {
    title: string;
    description: string;
  };
  footer: {
    contactUs: string;
  };
  repository: string;
}

export type EventType = {
  date: string;
  title: string;
  description?: string;
  organizer: string;
  organizerLink?: string;
  location?: string;
  filename: string;
};
