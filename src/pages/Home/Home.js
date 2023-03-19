import {
	AvatarIcon,
	AvatarWrapper,
	DynamicRoutes,
	HomeWrapper,
	LogoImage,
	LogoLink,
	RouteItem,
	RouteList,
	Sidebar,
	UserEmail,
	UserInfoWrapper,
	UserName,
	RouteLinkName,
	SecondRouteList,
	ToggleWrapper,
	Copyright,
	CopyrightDr,
} from './Home.styled';
import Logo from '../../assets/images/icons/siteLogo.svg';
import {
	FirstRoute,
	FivthRoute,
	FourthRoute,
	SecondRoute,
	SeventhRoute,
	ShrinkIcon,
	SixthRoute,
	ThirdRoute,
} from '../../assets/images/icons/Icons';
import { NavLink, Route, Routes } from 'react-router-dom';
import './Home.css';
import { useLocation } from 'react-router-dom';
import { Categories } from '../Categories/Categories';
import { Dashboard } from '../Dashboard/Dashboard';
import { Products } from '../Products/Products';
import { Orders } from '../Orders/Orders';
import { Sale } from '../Sale/Sale';
import { Users } from '../Users/Users';
import { Workers } from '../Workers/Workers';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Home = () => {
	const path = useLocation();
	const token = localStorage.getItem('user_token');
	const [user, setUser] = useState();

	const RouteLink = [
		{
			id: 1,
			icon: <FirstRoute className="list-image" />,
			path: '/',
			name: 'Dashboard',
		},
		{
			id: 2,
			icon: <SecondRoute className="list-image" />,
			path: '/categories',
			name: 'Kategoriyalar',
		},
		{
			id: 3,
			icon: <ThirdRoute className="list-image" />,
			path: '/products',
			name: 'Mahsulotlar',
		},
		{
			id: 4,
			icon: <FourthRoute className="list-image" />,
			path: '/orders',
			name: 'Buyurtmalar',
		},
		{
			id: 5,
			icon: <FivthRoute className="list-image" />,
			path: '/offline-sale',
			name: 'Offline sotuv',
		},
	];
	const UsersRouteLink = [
		{
			id: 1,
			icon: <SixthRoute className="list-image" />,
			path: '/workers',
			name: 'Ishchilar',
		},
		{
			id: 2,
			icon: <SeventhRoute className="list-image" />,
			path: '/users',
			name: 'Foydalanuvchilar',
		},
	];

	const RouteToggle = [
		{
			id: 1,
			icon: <ShrinkIcon className="list-image" />,
			name: 'Qisqartirish',
		},
	];

	useEffect(() => {
		axios
			.get('http://178.128.116.142:1777/api/auth/v1/me', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((res) => setUser(res?.data?.objectKoinot))
			.catch((err) => console.log(err));
	}, []);

	return (
		<HomeWrapper>
			<Sidebar>
				<LogoLink to={'/'}>
					<LogoImage
						src={Logo}
						width={99}
						height={36}
						alt="BigTech Logo"
					/>
				</LogoLink>

				<AvatarWrapper>
					<AvatarIcon>{user?.firstName?.charAt(0)}</AvatarIcon>
					<UserInfoWrapper>
						<UserName>
							{user?.lastName} {user?.firstName?.charAt(0)}
						</UserName>
						<UserEmail href={`tel:${user?.phoneNumber}`}>
							{user?.phoneNumber}
						</UserEmail>
					</UserInfoWrapper>
				</AvatarWrapper>

				<RouteList>
					{RouteLink.map((item) => (
						<RouteItem key={item?.id}>
							<NavLink
								className={({ isActive }) =>
									isActive
										? 'list-link list-link--active'
										: 'list-link'
								}
								to={item.path}
							>
								{item.icon}
								<RouteLinkName>{item.name}</RouteLinkName>
							</NavLink>
						</RouteItem>
					))}
				</RouteList>

				<SecondRouteList>
					{UsersRouteLink.map((item) => (
						<RouteItem key={item.id}>
							<NavLink
								className={({ isActive }) =>
									isActive
										? 'list-link list-link--active'
										: 'list-link'
								}
								to={item.path}
							>
								{item.icon}
								<RouteLinkName>{item.name}</RouteLinkName>
							</NavLink>
						</RouteItem>
					))}
				</SecondRouteList>

				<ToggleWrapper>
					<SecondRouteList>
						{RouteToggle.map((item) => (
							<RouteItem key={item.id}>
								<NavLink
									className={({ isActive }) =>
										isActive ? 'list-link ' : 'list-link'
									}
									to={path.pathname}
								>
									{item.icon}
									<RouteLinkName>{item.name}</RouteLinkName>
								</NavLink>
							</RouteItem>
						))}
					</SecondRouteList>
				</ToggleWrapper>
				<Copyright>
					Copyright by <CopyrightDr>ONVETI</CopyrightDr>
				</Copyright>
			</Sidebar>

			<DynamicRoutes>
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/categories" element={<Categories />} />
					<Route path="/products" element={<Products />} />
					<Route path="/orders" element={<Orders />} />
					<Route path="/offline-sale" element={<Sale />} />
					<Route path="/workers" element={<Workers />} />
					<Route path="/users" element={<Users />} />
				</Routes>
			</DynamicRoutes>
		</HomeWrapper>
	);
};
