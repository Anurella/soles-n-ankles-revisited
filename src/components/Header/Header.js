import React from 'react';
import styled from 'styled-components/macro';


import { WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import VisuallyHidden from '../VisuallyHidden';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';

const Header = () => {
	const [showMobileMenu, setShowMobileMenu] = React.useState(false);

	// For our mobile hamburger menu, we'll want to use a button
	// with an onClick handler, something like this:
	//
	// <button onClick={() => setShowMobileMenu(true)}>

	return (
		<header>
			<SuperHeader />
			<MainHeader>
				<LogoWrapper>
					<Logo />
				</LogoWrapper>
				<Nav>
					<NavLink href="/sale" >Sale</NavLink>
					<NavLink href="/new">New&nbsp;Releases</NavLink>
					<NavLink href="/men">Men</NavLink>
					<NavLink href="/collections">Collections</NavLink>
					<NavLink href="/women">Women</NavLink>
					<NavLink href="/kids">Kids</NavLink>
					<NavLink href="/collections">Collections</NavLink>
				</Nav>

				<Side />

				<MobileTriggers>
					<ShoppingButton>
						<Icon id="shopping-bag"></Icon>
						<VisuallyHidden> shopping cart </VisuallyHidden>
					</ShoppingButton>
					<UnstyledButton>
						<Icon id="search"></Icon>
						<VisuallyHidden> search site </VisuallyHidden>
					</UnstyledButton>
					<UnstyledButton onClick={() => setShowMobileMenu(true)}>
						<Icon id="menu"></Icon>
						<VisuallyHidden> Open Menu </VisuallyHidden>
					</UnstyledButton>
				</MobileTriggers>

			</MainHeader>

			<MobileMenu
				isOpen={showMobileMenu}
				onDismiss={() => setShowMobileMenu(false)}
			/>
		</header>
	);
};

const MainHeader = styled.div`
	display: flex;
	align-items: baseline;
	padding: 18px 32px;
	height: 72px;
	border-bottom: 1px solid var(--color-gray-300);

	@media ${QUERIES.tablets} {
		border-top: 4px solid var(--color-gray-900);
		justify-content: space-between;
		align-items: center;
	}

	@media ${QUERIES.phones} {
		padding: 20px 15px;
	}
`;

const Nav = styled.nav`
	display: flex;
	gap: clamp( 1rem, 5vw - 1.5rem, 6rem );
	margin: 0px 48px;

	@media ${QUERIES.tablets} {
		display: none;
	}
`;

const LogoWrapper = styled.div`
	flex: 1;

	@media ${QUERIES.tablets} {
		flex:revert;
	}
`;

const NavLink = styled.a`
	font-size: 1.125rem;
	text-transform: uppercase;
	text-decoration: none;
	color: var(--color-gray-900);
	font-weight: ${WEIGHTS.medium};

	&:first-of-type {
		color:var(--secondary);
	}
`;

const Side = styled.div`
	flex:1;

	@media ${QUERIES.tablets} {
		display: none;
	
	}

`;
const MobileTriggers = styled.div`

	
	display:none;

	@media ${QUERIES.tablets} {
		display: flex;
		gap: 32px;
	}

	@media ${QUERIES.phones} {
		gap: 16px;
	}
`

const ShoppingButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`
export default Header;
