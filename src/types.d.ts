export interface ICreator {
  username: string;
  email: string;
  name: string;
}

export interface IPost {
  id: number;
  creator: ICreator;
  created_at: string;
  updated_at: string;
  title: string;
  description: string;
}
