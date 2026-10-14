import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { projects } from "@/content/projects";
import { ProjectsBrowser } from "./projects-browser";

describe("ProjectsBrowser", () => {
  it("shows all projects by default", () => {
    render(<ProjectsBrowser projects={projects} />);
    expect(screen.getAllByRole("article")).toHaveLength(projects.length);
    expect(screen.getByRole("button", { name: "All" })).toHaveAttribute("aria-pressed", "true");
  });

  it("filters by tag and toggles back to all", async () => {
    const user = userEvent.setup();
    render(<ProjectsBrowser projects={projects} />);

    const ml = screen.getByRole("button", { name: "Machine Learning" });
    await user.click(ml);

    const expected = projects.filter((p) => p.tags.includes("Machine Learning"));
    const cards = screen.getAllByRole("article");
    expect(cards).toHaveLength(expected.length);
    expect(within(cards[0]).getByRole("link")).toHaveAttribute(
      "href",
      `/projects/${expected[0].slug}`,
    );
    expect(ml).toHaveAttribute("aria-pressed", "true");

    await user.click(ml);
    expect(screen.getAllByRole("article")).toHaveLength(projects.length);
  });
});
