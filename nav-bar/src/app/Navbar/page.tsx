'use client';
import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import NavLinks from './lib/NavLink';

function NavBar() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleNavBar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className='sticky top-0 left-0 right-0 flex-wrap h-43 bg-blue-400  flex justify-between items-center px-6 shadow-lg z-50'>
			<div className='text-2xl font-bold'>Dahnee Company</div>

			<button className='md:hidden' onClick={toggleNavBar}>
				{isOpen ? <X /> : <Menu />}
			</button>

			<div className='hidden justify-between md:flex '>
				<NavLinks />
			</div>
			{isOpen && (
				<div className='flex basis-full flex-col  items-center md:hidden'>
					<NavLinks />
				</div>
			)}
		</nav>
	);
}

export default NavBar;
