import React from 'react'
import { SiHomeassistantcommunitystore } from "react-icons/si";
import Button from './Button';
const Header = () => {
    return (
        <div className="bg-red-300 py-5">
            <header className="max-w- [60rem] flex items-center justify-between text-xl text-black/80 max-w-60rem m-auto">
                <p><span className="font-extrabold text-[tomato] text-2xl" >B</span>rand</p>
                <div className="max-[770px]:hidden flex text-xl gap-7 items-center">
                    <a href="">Features</a>
                    <a href="">Use Cases</a>
                    <a href="">Integrations</a>
                    <a href="">Portfolio</a>
                </div>
                <Button title="Join Us"/>

            </header>

            {/* <SiHomeassistantcommunitystore /> */}
        </div>
    )
}

export default Header;
