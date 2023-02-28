import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{marginBottom:"8px"}}>
      <p>Copyright ⓒ {year}</p>
      <p>Made with ❤️ by Shrajan Jain</p>
    </footer>
  );
}

export default Footer;
