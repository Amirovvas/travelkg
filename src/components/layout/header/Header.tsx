import React from "react";
import scss from "./header.module.scss";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
const Header = () => {
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.logo}>
            <img src="/travelLogo.png" alt="logo" />
            <h2>TravelKG</h2>
          </div>
          <nav>
            <Link href={"/"}>Областы</Link>
            <Link href={"/"}>Туры</Link>
            <Link href={"/aboutUs"}>О нас</Link>
            <Link href={"/"}>Избранные</Link>
          </nav>
          <span>
            <FaUser />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
