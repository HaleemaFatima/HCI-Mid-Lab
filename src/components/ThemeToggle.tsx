import { Sun, Moon } from "react-bootstrap-icons";

interface ThemeToggleProps {
  isDark: boolean;
  toggle: () => void;
}

const ThemeToggle = ({ isDark, toggle }: ThemeToggleProps) => {
  return (
    <button
      onClick={toggle}
      className="tool-btn theme-toggle"
      style={{ marginTop: "auto", marginBottom: "10px" }} // Push to bottom of toolbar
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};
export default ThemeToggle;
