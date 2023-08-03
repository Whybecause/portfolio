import Link from "next/link";

const NAV_ITEMS = [
  {
    label: "About",
    path: "#about",
    id: "about",
  },
  {
    label: "Projects",
    path: "#projects",
    id: "projects",
  },
  {
    label: "Experience",
    path: "#experience",
    id: "experience",
  },
];

type NavlinksProps = {
  ulClass: string;
  liClass: string;
  linkClass: string;
  setIsOpen: Function;
};

export default function Navlinks({
  ulClass,
  liClass,
  linkClass,
  setIsOpen,
}: NavlinksProps) {
  return (
    <ul className={ulClass}>
      {NAV_ITEMS.map((link) => (
        <li className={liClass}>
          <Link
            key={link.path}
            href={link.path}
            className={linkClass}
            onClick={(e) => {
              setIsOpen(false);
              e.preventDefault();
              document
                .getElementById(link.id)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
