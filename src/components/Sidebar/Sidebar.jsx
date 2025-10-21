import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Emoji from "../Emoji.jsx";
import "./Sidebar.css";

const sections = [
  { path: "/", label: "About Me", emoji: "👋" }, 
  { path: "/projects", label: "Projects", emoji: "📝" }, 
  { path: "/skills", label: "Skills", emoji: "💻" }
]

export default function Sidebar() {
  const location = useLocation();
  const [ isOpen, setOpen] = useState(false);

  function handleSidebar() {
    setOpen((current) =>{
      return !current;
    })
  }

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <button className={`menu-toggle ${isOpen ? "active": ""}`} onClick={handleSidebar}>
        ☰
      </button>

      <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <h1 className="logo">Sections</h1>
        <nav>
          <ul>
            {sections.map((section) => {
              return (
                <li className={location.pathname === section.path ? "active" : ""} key={section.path}>
                  <Link to={section.path}>
                    <Emoji symbol={section.emoji} size={20} />
                    {section.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
