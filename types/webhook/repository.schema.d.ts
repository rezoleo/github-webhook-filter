/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface RepositorySchema {
  action:
    | "created"
    | "deleted"
    | "archived"
    | "unarchived"
    | "edited"
    | "renamed"
    | "transferred"
    | "publicized"
    | "privatized";
  sender: {
    login: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
