import { useTheme } from "../contexts/ThemeContext";
import Home from "./Home";

export default function Main() {
  return (
    <>
      <main>
        <Home className="main__section main__section--dark" />
        <Home className="main__section" />
        <Home className="main__section main__section--dark" />
      </main>
    </>
  );
}
