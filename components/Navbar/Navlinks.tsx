import Link from "next/link";

const NAV_ITEMS = [
  {
    label: "About",
    path: "#about",
  },
  {
    label: "Experience",
    path: "#experience",
  },
  {
    label: "Projects",
    path: "#projects",
  },
];

type NavlinksProps = {
  ulClass: string;
  liClass: string;
  linkClass: string;
}

export default function Navlinks({ ulClass, liClass, linkClass }: NavlinksProps) {
  return (
    <ul className={ulClass}>
      {NAV_ITEMS.map((link) => (
        <li className={liClass}>
          <Link key={link.path} href={link.path} className={linkClass}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
