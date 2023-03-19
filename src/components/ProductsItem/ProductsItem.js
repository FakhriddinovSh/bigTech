import axios from 'axios';
import React, { useRef, useState } from 'react';
import {
	CategoriesModalButton,
	CategoriesModalTitle,
	CategoriesModalTop,
} from '../../pages/Categories/Categories.styled';
import {
	CategoriesInnerWrapper,
	CategoriesListItem,
	CategoriesListItemImage,
	CategoriesListItemMenu,
	CategoriesListItemTitle,
	CategoriesMenuList,
	CategoriesMenuListItem,
	DeleteButton,
	DeleteDesc,
	DeleteWrapper,
} from '../CategoriesItem/CategoriesItem.styled';
import { Modal } from '../TypeModal/TypeModal';
import {
	ProductsListItemCost,
	ProductsListItemTitle,
} from './ProductsItem.styled';

export const ProductsItem = ({ title, imagE, menuActive, id }) => {
	const [menu, setMenu] = useState(false);
	const [categoriesModalEdit, setCategoriesModalEdit] = useState(false);
	const [image, setImage] = useState(null);
	const [deleteCategory, setDeleteCategory] = useState(false);
	const categoryNameEdit = useRef();
	const token = localStorage.getItem('user_token');
	const [getDeleteInfoProduct, setGetDeleteInfoProduct] = useState(null);

	const menuOpener = () => {
		setMenu(!menu);
	};

	const getDeleteInfo = (getId) => {
		console.log(getId);

		// axios
		// 	.delete('http://178.128.116.142:1777/api/category/v1/' + getId, {
		// 		headers: {
		// 			Authorization: `Bearer ${token}`,
		// 		},
		// 	})
		// 	.then((res) => {
		// 		if (res.status === 200) {
		// 			alert('Succesfully deleted');
		// 			setDeleteCategory(false);
		// 			window.location.reload();
		// 		}
		// 	})
		// 	.catch((err) => console.log(err));
	};

	return (
		<CategoriesListItem className="col-2 mb-4 ">
			<CategoriesListItemMenu
				onClick={() => menuOpener()}
			></CategoriesListItemMenu>
			<CategoriesMenuList isOpen={menu}>
				<CategoriesMenuListItem
					onClick={() => setCategoriesModalEdit(true)}
				>
					O’zgartirish
				</CategoriesMenuListItem>
				<CategoriesMenuListItem
					onClick={() => {
						setDeleteCategory(true);
						setGetDeleteInfoProduct(id);
					}}
				>
					O’chirish
				</CategoriesMenuListItem>
			</CategoriesMenuList>
			<CategoriesInnerWrapper>
				<CategoriesListItemImage
					src={`${imagE}`}
					width="106"
					height="102"
					alt={`${title}`}
				/>
			</CategoriesInnerWrapper>
			<ProductsListItemTitle>iphone 14 pro max</ProductsListItemTitle>
			<ProductsListItemCost>12 250 650</ProductsListItemCost>

			<Modal modal={deleteCategory}>
				<DeleteWrapper>
					<CategoriesModalTop>
						<CategoriesModalTitle>
							Katalogni o’chirish
						</CategoriesModalTitle>
						<CategoriesModalButton
							onClick={() => setDeleteCategory(false)}
						></CategoriesModalButton>
					</CategoriesModalTop>
					<DeleteDesc>
						Haqiqatdan ham ushbu kategoriyani o’chirmoqchimisiz ?
					</DeleteDesc>

					<DeleteButton
						onClick={() => setDeleteCategory(false)}
						background
						margin
						color
						border
					>
						Yo’q
					</DeleteButton>
					<DeleteButton
						onClick={() => getDeleteInfo(getDeleteInfoProduct)}
					>
						Xa
					</DeleteButton>
				</DeleteWrapper>
			</Modal>
		</CategoriesListItem>
	);
};
