import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SidebarItem = styled.li`
	position: relative;
	margin-bottom: 19px;
	padding-left: 32px;
	&::before {
		position: absolute;
		left: 0;
	}
`;

export const SidebarItemLink = styled(NavLink)`
	font-weight: 500;
	font-size: 13px;
	line-height: 20px;
	letter-spacing: 0.01em;
	color: #334d6e;
	text-decoration: none;
`;
