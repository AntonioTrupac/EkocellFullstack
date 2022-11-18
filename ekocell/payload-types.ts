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
  category: {
    slug: string;
    ime?: string;
    kratkiopis?: string;
    opis?: string;
    specifikacijeiprednost: {
      specifikacija?: {
        [k: string]: unknown;
      }[];
      prednosti?: {
        [k: string]: unknown;
      }[];
      id?: string;
    }[];
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
