export interface FrontmatterEvent {
  title: string;
  date: string;
  location?: string;
}

export interface FrontmatterConfig {
  application: {
    title: string;
    description: string;
  };
  footer: {
    contactUs: string;
  };
}
