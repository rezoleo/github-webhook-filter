/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type BodyWebhookSchema =
  | {
      action:
        | "assigned"
        | "auto_merge_disabled"
        | "auto_merge_enabled"
        | "closed"
        | "converted_to_draft"
        | "edited"
        | "labeled"
        | "locked"
        | "opened"
        | "ready_for_review"
        | "reopened"
        | "review_request_removed"
        | "review_requested"
        | "synchronize"
        | "unassigned"
        | "unlabeled"
        | "unlocked";
      sender: {
        login: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | {
      ref_type: "branch" | "tag";
      sender: {
        login: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | {
      action: "added" | "removed" | "edited";
      sender: {
        login: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | {
      action: "created" | "deleted";
      sender: {
        login: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | {
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
  | {
      action: "create" | "dismiss" | "resolve";
      sender: {
        login: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | {
      sender: {
        login: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | {
      action: "created" | "reopened_by_user" | "closed_by_user" | "fixed" | "appeared_in_branch" | "reopened";
      sender: {
        login: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | {
      action: "added" | "removed";
      sender: {
        login: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | {
      action: "created" | "closed" | "opened" | "edited" | "deleted";
      sender: {
        login: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | {
      action: "deleted" | "renamed" | "member_added" | "member_removed" | "member_invited";
      sender: {
        login: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | {
      action: "published" | "unpublished" | "created" | "edited" | "deleted" | "prereleased" | "released";
      sender: {
        login: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | {
      action: "created" | "resolved" | "reopened";
      sender: {
        login: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | {
      action: "created" | "deleted" | "edited" | "added_to_repository" | "removed_from_repository";
      sender: {
        login: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | {
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
    };