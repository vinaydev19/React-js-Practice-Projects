import React from "react";
import Logo from "../../assets/brand_logo.png";
import Button from "../Button";

function NavBar() {
  return (
    <>
      <header className="w-full">
        <nav className="flex h-20 flex-row justify-around pt-2 items-center">
          <div>
            <img src={Logo} />
          </div>
          <div>
            <ul className="flex gap-6">
              <li
                href="/"
                className="hover:border-b-2  border-black hover:cursor-pointer"
              >
                MENU
              </li>
              <li
                href="/"
                className="hover:border-b-2 border-black hover:cursor-pointer"
              >
                LOCATION
              </li>
              <li
                href="/"
                className="hover:border-b-2 border-black hover:cursor-pointer"
              >
                ABOUT
              </li>
              <li
                href="/"
                className="hover:border-b-2 border-black hover:cursor-pointer"
              >
                CONTACT
              </li>
            </ul>
          </div>
          <div>
            <Button text="Login" className="w-20 hover:bg-red-400 bg-red-600" />
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
