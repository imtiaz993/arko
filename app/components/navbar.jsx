"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav>
      <ul>
        <li>
          <Link
            href="/blog"
            className={`item ${pathname.includes("/blog") ? "active" : ""}`}
          >
            BLOG
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={`item ${pathname.includes("/contact") ? "active" : ""}`}
          >
            CONTACT
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className={`item ${pathname.includes("/projects") ? "active" : ""}`}
          >
            PROJECTS
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className={`item ${pathname.includes("/services") ? "active" : ""}`}
          >
            SERVICES
          </Link>
        </li>
        <li>
          <Link href="/" className={`item ${pathname === "/" ? "active" : ""}`}>
            HOME
          </Link>
        </li>
        <li className="logo">
          <Link href="/">
            <Image
              width={0}
              height={0}
              sizes="100vw"
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
