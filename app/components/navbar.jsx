import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/blog" className="item">
            BLOG
          </Link>
        </li>
        <li>
          <Link href="/contact" className="item">
            CONTACT
          </Link>
        </li>
        <li>
          <Link href="/projects" className="item">
            PROJECTS
          </Link>
        </li>
        <li>
          <Link href="/services" className="item">
            SERVICES
          </Link>
        </li>
        <li>
          <Link href="#" className="item active">
            HOME
          </Link>
        </li>
        <li className="logo">
          <Link href="/">
            <img
              loading="lazy"
              src="/img/arkco_logo.png"
              className="logo-img"
              alt="logo"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
