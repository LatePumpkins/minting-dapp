import React from 'react';
import NavLink from './NavLink';
import { navLinks } from './navLinks';
import './Nav.css';
import * as s from "../styles/globalStyles";

const Nav = () => {
	return (
		
		<nav>
			<s.SpacerSmall/>
			{navLinks.map(({ navLinkId, scrollToId }, idx) => (
				<NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
			))}
			<s.SpacerSmall/>
		</nav>
	);
};

export default Nav;
