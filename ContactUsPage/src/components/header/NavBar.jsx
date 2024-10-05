import React from "react";
import Logo from "../../assets/Logo.png";

function NavBar() {
  return (
    <>
      <header className="w-full">
        <nav className="flex flex-row justify-around items-center">
          <div>
            <img src={Logo} alt="Logo" />
          </div>
          <div className="">
            <ul className="flex gap-3">
              <li className="hover:border-b-2  border-black hover:cursor-pointer">Home</li>
              <li className="hover:border-b-2  border-black hover:cursor-pointer">About</li>
              <li className="hover:border-b-2  border-black hover:cursor-pointer">Contact</li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
