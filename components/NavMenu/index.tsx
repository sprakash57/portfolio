import { RouteLink } from "@/common-components";
import Image from "next/image";
import { useRouter } from "next/router";
import Brand from "@/public/brand.svg";

const NavMenu = () => {
  const router = useRouter();
  return (
    <nav className="nav">
      <RouteLink href="/" classForContainer="navBrand">
        <Image src={Brand} alt="Brand" />
      </RouteLink>
      <div className="navMenu">
        <RouteLink
          href="/"
          childProps={{ id: "menu-home" }}
          classForContainer={router.asPath === "/" ? "active" : ""}
        >
          Home
        </RouteLink>
        <RouteLink
          href="/blogs"
          childProps={{ id: "menu-blogs" }}
          classForContainer={router.asPath === "/blogs" ? "active" : ""}
        >
          Blogs
        </RouteLink>
        <RouteLink
          href="/projects"
          childProps={{ id: "menu-projects" }}
          classForContainer={router.asPath === "/projects" ? "active" : ""}
        >
          Projects
        </RouteLink>
        <RouteLink
          href="/about"
          childProps={{ id: "menu-about" }}
          classForContainer={router.asPath === "/about" ? "active" : ""}
        >
          About
        </RouteLink>
      </div>
    </nav>
  );
};

export default NavMenu;
