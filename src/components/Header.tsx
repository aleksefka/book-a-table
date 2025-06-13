import { NAVBAR_DEFINITION } from "../constants";
import Logo from "./Logo";
import NavItemList from "./NavItemList";

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
