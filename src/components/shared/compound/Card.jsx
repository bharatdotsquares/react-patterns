//Compound Pattern

import React, { useState, useContext, createContext } from "react";
import Heading from "../../common/Heading";
import PropTypes from "prop-types";

const CardContext = createContext();
function Card({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <CardContext.Provider value={{ open, setOpen }}>
      <div className="relative m-2  border shadow-lg rounded">{children}</div>
    </CardContext.Provider>
  );
}
Card.propTypes = {
  children: PropTypes.element,
};
function Header({ title }) {
  const { open, setOpen } = useContext(CardContext);
  return (
    <div className="p-2 border-b-1 flex justify-center text-center">
      <button
        className="ring-2 ring-blue-500 rounded-sm p-2 absolute left-0 ml-2"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Open"}
      </button>
      <Heading cls="text-center">{title}</Heading>
    </div>
  );
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

function Body({ children }) {
  const { open } = useContext(CardContext);
  return (
    <div className={`transition-body ${open ? "open" : "closed"}`}>
      <div className="p-2">{children}</div>
    </div>
  );
}
Body.propTypes = {
  children: PropTypes.element,
};
function Footer({ title }) {
  return (
    <div className="p-2 border-t-1">
      <p>{title}</p>
    </div>
  );
}
Footer.propTypes = {
  title: PropTypes.string.isRequired,
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
