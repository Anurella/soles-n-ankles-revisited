/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
	if (!isOpen) {
		console.log('I am lost');
		return null;
	}

	return (
		<div>
			<StyledDialogOverlay onDismiss={onDismiss}>
				<StyledDialogContent aria-label='Mobile Navigation'>
					<UnstyledButton onClick={onDismiss} style={{ marginLeft: "auto" }}>
						<VisuallyHidden>
							Dismiss menu
						</VisuallyHidden>
						<Icon id="close"></Icon>
					</UnstyledButton>
					<Nav>
						<Link href="/sale" className='active'>Sale</Link>
						<Link href="/new">New&nbsp;Releases</Link>
						<Link href="/men">Men</Link>
						<Link href="/women">Women</Link>
						<Link href="/kids">Kids</Link>
						<Link href="/collections">Collections</Link>
					</Nav>
					<footer>
						<SmallLink href="/terms">Terms and Conditions</SmallLink>
						<SmallLink href="/privacy">Privacy Policy</SmallLink>
						<SmallLink href="/contact">Contact Us</SmallLink>
					</footer>
				</StyledDialogContent>
			</StyledDialogOverlay>
		</div>
	);
};

const StyledDialogOverlay = styled(DialogOverlay)`
  background-color: var(--modal-bg);
  position:fixed;
  width:100%;
  top:0;
  height:100%;
`;

const StyledDialogContent = styled(DialogContent)`
  width:80%;
  background-color:var(--white);
  height:100%;
  margin-left:auto;
  padding-inline:32px 16px;
  padding-block: 26px 32px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
`
const Nav = styled.nav`
    font-size:1rem;
	text-transform:uppercase;
`

const Link = styled.a`
 display:block;
 text-decoration:none;
 color:var(--color-gay-900);
margin-bottom: 1.2rem;

&:last-child {
	margin-bottom:0;
}

&.active 
{
	color:var(--secondary);
}
`

const SmallLink = styled(Link)`
 font-size: 0.8rem;
 color:var(--color-gray-700);
 margin-bottom: 0.6rem;
`

export default MobileMenu;
