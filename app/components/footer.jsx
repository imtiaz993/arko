"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  return (
    <footer>
      <div className"footer-links">
        <Link href="/about">About Us</Link>
        <Link href="/services">Our Services</Link>
        <Link href="/projects">Our Projects</Link>
        <Link href="/contact">Contact Us</Link>
        <Link href="/blog">Our Blog</Link>
      </div>
      <div style="display: flex; flex-direction: row; justify-content: space-evenly; padding: 1%;">
        <p style="color: #ccc">
          Copyright © 2024 ArkCo - AZARK - All Rights Reserved.
        </p>
        <p
          style="cursor: pointer; color: #ccc"
          onClick={() => router.push("/privacy-policy")}
        >
          Privacy Policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
