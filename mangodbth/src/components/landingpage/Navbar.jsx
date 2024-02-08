import React from "react";
import Logo from "../../assets/Logo4.png"

const color = {
    background: "#016A70",
  };
  
  function Navbar() {
    return (
      <nav className="relative mx-auto py-2">
        <div className="h-[70px] bg-white flex items-center justify-between my-6 mx-6 md:mx-20 px-4 py-1 rounded-lg shadow-lg">
          <div className="flex flex-1 items-center justify-center sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img src={Logo} alt="Logo" className="w-full h-[70px] m-6" />
            </div>
            <div className="hidden md:block mx-auto sm:block">
              <div className="space-x-20 sm:space-x-5 lg:space-x-20 ">
                <a
                  href="/"
                  className="text-md lg:text-lg text-black hover:text-[#016A70]"
                >
                  หน้าแรก
                </a>
                <a
                  href="/"
                  className="text-md lg:text-lg text-black hover:text-[#016A70]"
                >
                  วิธีการปลูก
                </a>
                <a
                  href="/"
                  className="text-md lg:text-lg text-black hover:text-[#016A70]"
                >
                  สายพันธุ์ทั้งหมด
                </a>
                <a
                  href="/"
                  className="text-md lg:text-lg text-black hover:text-[#016A70]"
                >
                  ข่าวสาร
                </a>
              </div>
            </div>
            <div
              className="hidden md:block sm:block py-1 px-2 rounded-lg"
              style={color}
            >
              <a href="contact" rel="contact">
                <span className="text-white font-light cursor-pointer">
                  ติดต่อเรา
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }

export default Navbar;