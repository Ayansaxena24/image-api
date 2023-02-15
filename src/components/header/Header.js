import React from "react";
import "./Header.css";
import pic1 from "./camera.png";

const Header = () => {
    return (
        <div className="text-center mt-0 mb-1 border-grey border-2 hover:border-cyan-400 rounded-xl mx-1 bg-black">
            <div className="flex flex-row justify-center transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">
                <img src={pic1} alt="camera logo" className="h-25 w-20 my-2" />
                <h1 className="p-5 text-center font-bold underline-offset-4 text-white hover:text-blue-300 text-3xl mt-2.5">IMAGES</h1>
            </div>
        </div>
    )
}

export default Header
