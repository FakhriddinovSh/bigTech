import { SidebarItem, SidebarItemLink } from './SidebarItem.styled';

export const SidebarListItem = ({ name, path, icon }) => {
	return (
		<SidebarItem icon={icon}>
			<SidebarItemLink
				className={({ isActive }) =>
					isActive ? 'list-link list-link--active' : 'list-link'
				}
				to={path}
			>
				{name}
			</SidebarItemLink>
		</SidebarItem>
	);
};
