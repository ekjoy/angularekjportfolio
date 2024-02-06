export interface IBlogTopic {
  id: number;
  description: string;
  title: string;
  image?: string;
  content: string;
  modifiedDate: string;
  modifiedBy: string;
  labels: string[];
}
