export interface Article {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  body: string;
  excerpt: string;
  portal: Portal;
  protection_level: string;
  slug: Slug;
  title: string;
  views: number;
}

export interface Portal {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  category: string;
  name: string;
  slug: Slug;
}

export interface User {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  committee: Committee;
  email: string;
  username: string;
}

export interface Committee {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  name: string;
}

export interface Slug {
  _type: string;
  current: string;
}
