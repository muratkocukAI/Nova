import { Outlet, NavLink, Link } from "react-router-dom";
import crimson from "../../assets/crimson.svg";
import styles from "./Layout.module.css";
import { useLogin } from "../../authConfig";
import { LoginButton } from "../../components/LoginButton";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role="banner">
                <div className={styles.headerContainer}>
                    <Link to="/" className={styles.headerTitleContainer} aria-label="Home">
                        <h1 className={styles.headerTitle}>Nova AI</h1>
                    </Link>
                    <nav>
                        <ul className={styles.headerNavList}>
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}
                                    aria-label="Talk to AI"
                                >
                                    Talk to AI
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/qa"
                                    className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}
                                    aria-label="Insight Search"
                                >
                                    Insight Search
                                </NavLink>
                            </li>
                            <li className={styles.headerNavLeftMargin}>
                                <a href="https://crimsoninnovate.com" target={"_blank"} title="Crimson Consulting">
                                    <img
                                        src={crimson}
                                        alt="Crimson Consulting"
                                        aria-label="Crimson Consulting"
                                        width="20px"
                                        height="20px"
                                        className={styles.crimsonLogo}
                                    />
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <h4 className={styles.headerRightText}>Crimson Consulting</h4>
                    {useLogin && <LoginButton />}
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;
