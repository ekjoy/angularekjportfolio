export interface IBlogTopicContent {
  id: number;
  subjectId: number;
  topicId: number;
  content: string;
  title: string;
  description: string;
  image?: string;
  createdBy?: string;
  createdDate?: string;
  modifiedBy?: string;
  modifiedDate?: string;
}
