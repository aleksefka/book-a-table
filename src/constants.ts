import { UrlPaths } from "./enums";
import type { FooterNavTreeDefinition, NavItemDefinition } from "./types";

export const NAVBAR_DEFINITION: NavItemDefinition[] = [
  {
    name: "Home",
    href: UrlPaths.Home,
  },
  {
    name: "About",
    href: UrlPaths.About,
  },
  {
    name: "Menu",
    href: UrlPaths.Menu,
  },
  {
    name: "Reservations",
    href: UrlPaths.Reservations,
  },
  {
    name: "Order Online",
    href: UrlPaths.OrderOnline,
  },
  {
    name: "Login",
    href: UrlPaths.Login,
  },
];

export const FOOTER_NAVTREE_DEFINITION: FooterNavTreeDefinition[] = [
  {
    treeHeading: "Doormat Navigation",
    treeItems: NAVBAR_DEFINITION,
  },
  {
    treeHeading: "Contact",
    treeItems: [
      {
        name: "Address",
        href: "#",
      },
      {
        name: "Phone Number",
        href: "#",
      },
      {
        name: "Email",
        href: "mailto:littlelemon@test.net",
      },
    ],
  },
  {
    treeHeading: "Social Media Links",
    treeItems: [
      {
        name: "Instagram",
        href: "https://www.instagram.com/biancazapatka",
      },
      {
        name: "TikTok",
        href: "https://www.tiktok.com/@dekarldent",
      },
      {
        name: "LinkedIn",
        href: "https://de.linkedin.com/company/aljazeera",
      },
    ],
  },
];
