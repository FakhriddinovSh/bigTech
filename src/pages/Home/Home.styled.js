import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HomeWrapper = styled.div`
	display: flex;
`;
export const Sidebar = styled.div`
	width: 256px;
	height: 100vh;
	padding-top: 17px;
	padding-left: 24px;
	padding-right: 24px;
	box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
`;
export const DynamicRoutes = styled.div`
	width: 80%;
	display: flex;
	flex-grow: 1;
	padding-left: 36px;
	padding-right: 38px;
	padding-bottom: 35px;
`;

export const LogoLink = styled(NavLink)``;
export const LogoImage = styled.img``;
export const AvatarWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-top: 32px;
	margin-bottom: 41px;
`;
export const AvatarIcon = styled.div`
	width: 50px;
	height: 50px;
	margin-right: 17px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 700;
	font-size: 24px;
	line-height: 36px;
	letter-spacing: 0.01em;
	color: #ffffff;
	border-radius: 50%;
	background-color: #334d6e;
`;

export const UserInfoWrapper = styled.div``;

export const UserName = styled.span`
	display: block;
	font-weight: 500;
	font-size: 14px;
	line-height: 21px;
	color: #192a3e;
`;

export const UserEmail = styled.a`
	font-weight: 500;
	font-size: 11px;
	line-height: 16px;
	letter-spacing: 0.01em;
	color: #707683;
	text-decoration: none;
`;

export const RouteList = styled.ul`
	position: relative;
	margin: 0;
	padding: 0;
	padding-bottom: 24px;
	list-style: none;
	&::after {
		position: absolute;
		left: -30px;
		bottom: 0;
		width: 126%;
		height: 1px;
		border-bottom: 2px solid #ebeff2;
		content: '';
	}
`;

export const RouteItem = styled.li`
	margin-bottom: 19px;
`;
export const RouteItemLink = styled(NavLink)`
	/* color: red; */
`;
export const RouteItemInner = styled.div`
	display: flex;
	align-items: center;
`;

export const RouteLinkName = styled.p`
	margin: 0;
	padding: 0;
	margin-left: 16px;
	font-weight: 500;
	font-size: 13px;
	line-height: 20px;
	letter-spacing: 0.01em;
	color: inherit;
`;

export const SecondRouteList = styled.ul`
	margin: 0;
	margin-top: 18px;
	padding: 0;
	list-style: none;
`;

export const ToggleWrapper = styled.div`
	position: absolute;
	bottom: 30px;
`;

export const Copyright = styled.p`
	position: absolute;
	left: 90px;
	bottom: 0;
	text-align: center;
	font-size: 11px;
	line-height: 16px;
	letter-spacing: 0.01em;
	color: #000000;
`;

export const CopyrightDr = styled.span`
	font-weight: 500;
	color: #109cf1;
`;
