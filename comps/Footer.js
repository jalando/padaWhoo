import Link from 'next/link';
import Image from 'next/image';


const Footer = () => {
    return (
        <footer>
            Copyright 2021 padaWhoo.
            <br />
            <br />
            <Link href="https://www.instagram.com/"><a><Image src="/instagram.png" width="50" height="50" /></a></Link>
            <Link href="https://www.facebook.com/"><a><Image src="/facebook.png" width="50" height="50" /></a></Link>
            <Link href="https://www.twitter.com/"><a><Image src="/twitter.png" width="50" height="50" /></a></Link>

        </footer>
    );
}
 
export default Footer;