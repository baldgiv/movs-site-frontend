export enum UserPermissions {
  none = 0,
  manageNews = 1 << 0,
  manageTeachers = 1 << 1,
  manageInfo = 1 << 2,
  administrator = 1 << 3
}

export interface ClientUser {
  full_name: string;
  email: string;
  permissions: UserPermissions;
}

export interface DepartmentInfo {
  phone: string;
  email: string;
  address: string;
  description: string;
}


export interface DepartmentHeadInfo {
  phone: string;
  email: string;
  address: string;
  full_name: string;
  photo_url: string;
}

export interface Article {
  _id: string;
  author_id: string;
  title: string;
  description: string;
  creation_date: string;
  thumbnail_url: string;
}