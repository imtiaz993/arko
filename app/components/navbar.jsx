import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/blog" class="item">
            BLOG
          </a>
        </li>
        <li>
          <Link href="/contact" class="item">
            CONTACT
          </Link>
        </li>
        <li>
          <Link href="/projects" class="item">
            PROJECTS
          </Link>
        </li>
        <li>
          <Link href="/services" class="item">
            SERVICES
          </Link>
        </li>
        <li>
          <Link href="#" class="item active">
            HOME
          </Link>
        </li>
        <li class="logo">
          <Link href="/">
            <img
              loading="lazy"
              src="img/arkco_logo.png"
              class="logo-img"
              alt="logo"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
