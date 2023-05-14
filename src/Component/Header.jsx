import styles from "../Style/navbar.module.scss"
import Link from "next/link";
import Image from "next/image"; 
import Nav from "./NavBar";
import logo from "../app/favicon.ico"

const Header = () => {
    return (
        <header className={styles.main_header}>
            <div className={styles.navbar_brand}>
                <Link href="/">
                    <Image src={logo} alt="my logo image" width={40} height={30}/>
                </Link>

            </div>
            <Nav/>
        </header>
    );
};

export default Header;