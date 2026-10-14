import type { MDXComponents } from "mdx/types";
import { Flow } from "@/components/flow";

const components: MDXComponents = {
  Flow,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
