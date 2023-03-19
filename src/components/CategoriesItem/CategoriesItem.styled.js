import styled from 'styled-components';
import MenuIcon from '../../assets/images/icons/menu-icon.svg';
import EditIcon from '../../assets/images/icons/edit-icon.svg';
import DeleteIcon from '../../assets/images/icons/delete-icon.svg';

export const CategoriesListItem = styled.li`
	position: relative;
	text-align: center;
`;
export const CategoriesInnerWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 152px;
	margin-bottom: 10px;
	border: 3px solid #959ba5;
	border-radius: 10px;
`;
export const CategoriesListItemTitle = styled.h3`
	font-size: 18px;
	line-height: 27px;
	letter-spacing: 0.01em;
	color: #000000;
`;
export const CategoriesListItemImage = styled.img``;
export const CategoriesListItemMenu = styled.button`
	position: absolute;
	right: 20px;
	top: 15px;
	width: 20px;
	height: 20px;
	background-color: transparent;
	background-image: url(${MenuIcon});
	background-repeat: no-repeat;
	border: none;
`;

export const CategoriesMenuList = styled.ul`
	position: absolute;
	display: ${(props) => (props.isOpen ? 'block' : 'none')};
	top: 35px;
	left: 0;
	right: 0;
	width: 124px;
	margin: 0;
	margin: 0 auto;
	padding: 0;
	list-style: none;
	background: #ffffff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 11px;
`;
export const CategoriesMenuListItem = styled.li`
	padding: 6px 0;
	font-weight: 400;
	font-size: 10px;
	line-height: 15px;
	letter-spacing: 0.01em;
	color: #334d6e;
	cursor: pointer;
	&:first-child {
		border-bottom: 0.3px solid #959ba5;
	}
	&:first-child::before {
		position: absolute;
		left: 12px;
		top: 3px;
		width: 15px;
		height: 15px;
		background-image: url(${EditIcon});
		background-repeat: no-repeat;
		background-size: cover;
		content: '';
	}
	&:last-child::before {
		position: absolute;
		left: 12px;
		top: 33px;
		width: 15px;
		height: 15px;
		background-image: url(${DeleteIcon});
		background-repeat: no-repeat;
		background-size: cover;
		content: '';
	}
	&:hover {
		font-weight: 500;
		color: #000;
	}
`;

export const DeleteWrapper = styled.div`
	width: 381px;
	margin: 100px auto;
	padding-top: 24px;
	padding-left: 20px;
	padding-bottom: 16px;
	padding-right: 20px;
	text-align: center;
	background-color: #fff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 27px;
`;

export const DeleteDesc = styled.p`
	margin: 0;
	margin-bottom: 34px;
	font-family: 'Inter';
	text-align: left;
	font-weight: 500;
	line-height: 30px;
	color: #334d6e;
`;

export const DeleteButton = styled.button`
	width: 102px;
	margin-right: ${(props) => (props.margin ? '30px' : '0')};
	padding: 10px 0;
	color: ${(props) => (props.color ? '#092C4C' : '#fff')};
	background-color: ${(props) => (props.background ? '#fff' : '#514EF3')};
	border-width: 1px;
	border-color: ${(props) => (props.border ? '#C2CFE0' : 'transparent')};
	border-radius: 8px;
`;
