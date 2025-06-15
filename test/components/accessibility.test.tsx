import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { describe, it, expect } from "vitest";
import Logo from "@/components/units/Logo";
import Heading from "@/components/units/Heading";
import NavItemList from "@/components/units/NavItemList";
import type { NavItemDefinition } from "@/types";

// Custom matcher hinzufügen
expect.extend(toHaveNoViolations);

describe("Components", () => {
  it("Logo has no accessibility violations", async () => {
    const { container } = render(<Logo />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("Heading has no accessibility violations", async () => {
    const { container } = render(
      <Heading label="This is a heading" level={1} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("NavItemList has no accessibility violations", async () => {
    const navItems: NavItemDefinition[] = [
      {
        name: "Home",
        href: "/home",
      },
      {
        name: "About",
        href: "/about",
      },
      {
        name: "Menu",
        href: "/menu",
      },
    ];
    const { container } = render(
      <NavItemList navItemListDefinition={navItems} prefix="test_" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
