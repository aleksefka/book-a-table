import { NAVBAR_DEFINITION } from "../constants";
import Logo from "./units/Logo";
import NavItemList from "./units/NavItemList";

export default function Header() {
  return (
    <>
      <header>
        <a id="header_logo" href="/">
          <Logo />
        </a>
        <nav>
          <NavItemList
            navItemListDefinition={NAVBAR_DEFINITION}
            prefix="header_nav_"
          />
        </nav>
      </header>
    </>
  );
}
