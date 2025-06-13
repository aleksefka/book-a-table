import type { NavItemDefinition } from "../types";

type NavItemListProps = {
  navItemListDefinition: NavItemDefinition[];
  prefix: string;
};

export default function NavItemList({
  navItemListDefinition,
  prefix,
}: NavItemListProps) {
  return (
    <>
      <ul>
        {navItemListDefinition.map((def) => {
          const id = `${prefix}${def.name.toLowerCase().replace(" ", "_")}`;
          return (
            <li id={id} key={id}>
              <a href={def.href}>{def.name}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
