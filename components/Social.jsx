import Link from "next/link";
// import socials Icons form react-icons/fa
import {FaGithub, FaLinkedinIn} from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path: " " },
    {icon: <FaLinkedinIn />, path: " " },
];



const Social = ({containerStyles, iconStyles}) => {
    return <div className={containerStyles}>
        {socials.map((item, index) => {
            return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
        })}
    </div>
};

export default Social;