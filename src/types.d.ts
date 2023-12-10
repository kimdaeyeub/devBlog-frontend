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
  categories: string;
}

export interface IUser {
  avatar: string;
  date_joined: string;
  email: string;
  id: number;
  last_login: string;
  name: string;
  username: string;
}
