import React from 'react'
import {useRouter} from 'next/router';
import Link from 'next/link'
import {HeaderElement} from '../assets'

interface HeaderProps {}
const Header:React.FC<HeaderProps> = () => {
    const router = useRouter();
    return (
        <HeaderElement>
            este es el header
            <ul>
                <Link  href="/">About Me</Link>
                <Link  href="/Proyects">Proyects</Link>
                <Link  href="/Contact">Contact</Link>
            </ul>
        </HeaderElement>
    )
}

export default Header
