/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface IssueSchema {
  action:
    | "opened"
    | "edited"
    | "deleted"
    | "pinned"
    | "unpinned"
    | "closed"
    | "reopened"
    | "assigned"
    | "unassigned"
    | "labeled"
    | "unlabeled"
    | "locked"
    | "unlocked"
    | "transferred"
    | "milestoned"
    | "demilestoned";
  sender: {
    login: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}