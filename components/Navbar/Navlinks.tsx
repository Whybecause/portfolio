import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navlinks() {
  const Links = [
    {
      label: "About",
      path: "about",
    },
    {
      label: "Experience",
      path: "experience",
    },
    {
      label: "Projects",
      path: "projects",
    },
  ];

  return (
    <>
      {Links.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={styles.link}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}
