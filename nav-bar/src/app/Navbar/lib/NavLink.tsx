import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
	const pathName = usePathname();
	return (
		<ul className='flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-6'>
			{[
				{ href: '/', label: 'Home' },
				{ href: '/about', label: 'About' },
				{ href: '/contact', label: 'Contact' },
			].map(({ href, label }) => (
				<li key={href}>
					<Link
						href={href}
						className={`p-2.5 rounded-md transition duration-300 ease-in-out hover:bg-sky-600 hover:border-b-[3px]
                ${
									pathName === href
										? ' rounded-b-none border-b-[3px]  border-white'
										: 'hover:bg-sky-600'
								}`}>
						{label}
					</Link>
				</li>
			))}
		</ul>
	);
}
