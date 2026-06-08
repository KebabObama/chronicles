import * as Actions from "./actions.mdx";
import * as Attributes from "./attributes.mdx";
import * as Turns from "./turns.mdx";

export type RuleArticleMeta = {
  slug: string;
  title: string;
  summary: string;
};

export const RULE_ARTICLES: RuleArticleMeta[] = [Turns, Actions, Attributes];
