import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import accueil from "../../assets/navIcons/accueil.svg";
import presentation from "../../assets/navIcons/presentation.svg";
import tasks from "../../assets/navIcons/tasks.svg";
import contact from "../../assets/navIcons/contact.svg";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF"];
// "#4400FF"
const items = ["Accueil", "Présentation", "Projets", "Contact"];
const icons = [accueil, presentation, tasks, contact];
const anchors = ["accueil", "presentation", "projects", "contact"];

export const MenuItem = ({ i, toggle }) => {
  const style = { border: `2px solid ${colors[i]}` };
  const text = items[i];
  const icon = icons[i];
  const anchor = anchors[i];
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        className="icon-placeholder"
        style={style}
        onClick={toggle}
        activeClass="active"
        to={anchor}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <img src={icon} className="bord w-80" alt="Icon" />
      </Link>
      <Link
        className="text-placeholder dfaicjcc"
        activeClass="active"
        to={anchor}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        style={style}
        onClick={toggle}
      >
        {text}
      </Link>
    </motion.li>
  );
};
