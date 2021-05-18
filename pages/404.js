import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        console.log('useEffect ran')
        setTimeout(() => {
            router.push('/');
        }, 5000)
    }, [])
    return (
        <div className="not-found">
            <Image src="/emoji.png" width="150" height="150" />
            <h1>Oops...</h1>
            <h3>Page was not found, return to <Link href="/"><a>homepage</a></Link></h3>
        </div>
    );
}
 
export default NotFound;