import { Link } from "react-router-dom";
import "../styles/HeaderNavBar.css";

function HeaderNavBar() {
  return (
    <div>
      <header className="header-nav-links">
        <nav className="nav-links">
          <ul>
            <li>
              <Link to="worker-list">Workers</Link>
            </li>
            <li>
              <Link to="market-surveys">Market Surveys</Link>
            </li>
            <li>
              <Link to="inventory">Inventory</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
            <li>
              <Link to="/">Main Menu</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default HeaderNavBar;
