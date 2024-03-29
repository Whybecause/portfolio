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
  setIsOpen: Function;
};

export default function Navlinks({
  ulClass,
  liClass,
  setIsOpen,
}: NavlinksProps) {
  return (
    <ul className={ulClass}>
      {NAV_ITEMS.map((link) => (
        <li className={liClass} key={link.label}>
          <a
            href={`/${link.path}`}
            className="font-semibold text-gray-100 group"
            onClick={() => setIsOpen(false)}
          >
            {link.label}
            <span className="block max-w-0 group-hover:max-w-full group-focus:max-w-full transition-all duration-500 h-0.5 bg-green-300"></span>
          </a>
        </li>
      ))}
    </ul>
  );
}
