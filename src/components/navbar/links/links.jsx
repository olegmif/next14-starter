import Link from "next/link";
import styles from "./links.module.css";
import NavLink from "@/components/navbar/links/nav-link/nav-link";

const Links = () => {
    const Links = [
        {
            title: "Homepage",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/blog",
        },
    ]
    return (
        <div className={styles.links}>{Links.map(link => <NavLink item={link} key={link.title} />)}</div>
    )
}

export default Links