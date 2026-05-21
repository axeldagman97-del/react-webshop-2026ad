function Footer() {
  const footerDate = new Date().getFullYear();

  return (
    <div>
      <h1> © Dagmans Webbshop</h1>
      <p> {footerDate}</p>
    </div>
  );
}

export default Footer;
