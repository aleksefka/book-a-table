import { FOOTER_NAVTREE_DEFINITION } from "../constants";
import { useTheme } from "../contexts/ThemeContext";
import Logo from "./Logo";
import NavItemList from "./NavItemList";

export default function Footer() {
  const theme = useTheme();
  return (
    <>
      <footer style={{ backgroundColor: theme.secondary.light }}>
        <div className="footer__logo">
          <Logo />
        </div>
        <div className="footer__link-section">
          {FOOTER_NAVTREE_DEFINITION.map((item) => {
            return (
              <div
                key={`footer_section_${item.treeHeading
                  .toLowerCase()
                  .replace(" ", "_")}`}
              >
                <h5>{item.treeHeading}</h5>
                <NavItemList
                  navItemListDefinition={item.treeItems}
                  prefix="footer_nav_"
                />
              </div>
            );
          })}
        </div>
      </footer>
    </>
  );
}
