import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";

const Header = () => {
return (<header className="py=8 xl:py-12 text-">
    <div className="container mx-auto">
        {/* LOGO */}
        <Link href="/">
        <h1 className="text-4xl font-semibold">
            Anugrah<span className="text-accent">.</span>
        </h1>
            </Link>



                {/* DESKTOP NAV & hire me button*/ }
                {/* I STOPPED AT 16:55 git added */}
        
                <div className="hidden xl:flex">
                <Nav />
                </div>




            </div>
        </header>
    );
};

export default Header;