import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Saulo Fernandez ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
