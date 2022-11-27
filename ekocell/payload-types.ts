/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "onama".
 */
export interface Onama {
  id: string;
  naslov: string;
  description: {
    [k: string]: unknown;
  }[];
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories".
 */
export interface Kategorija {
  id: string;
  title?: string;
  description?: string;
  category: {
    slug: string;
    ime?: string;
    kratkiopis?: string;
    opis?: string;
    characteristics?: string | Karateristika;
    specifications?: string | Specifikacija;
    usages?: string | Uporaba;
    id?: string;
  }[];
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "characteristic".
 */
export interface Karateristika {
  id: string;
  title?: string;
  description?: {
    [k: string]: unknown;
  }[];
  images: {
    mainImage: string | Media;
    gridImageOne: string | Media;
    gridImageTwo: string | Media;
    id?: string;
  }[];
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt?: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "specification".
 */
export interface Specifikacija {
  id: string;
  title?: string;
  description?: {
    [k: string]: unknown;
  }[];
  images: {
    mainImage: string | Media;
    gridImageOne?: string | Media;
    gridImageTwo?: string | Media;
    id?: string;
  }[];
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "usage".
 */
export interface Uporaba {
  id: string;
  title?: string;
  description?: {
    [k: string]: unknown;
  }[];
  images: {
    mainImage: string | Media;
    gridImageOne?: string | Media;
    gridImageTwo?: string | Media;
    id?: string;
  }[];
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  createdAt: string;
  updatedAt: string;
}
