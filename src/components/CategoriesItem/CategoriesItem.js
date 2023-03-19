import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import AirPods from '../../assets/images/airPods.png';
import {
	CategoriesButton,
	CategoriesButtonWrapper,
	CategoriesImageInnerWrapper,
	CategoriesImageInput,
	CategoriesImageLabel,
	CategoriesImageSpan,
	CategoriesImageWrapper,
	CategoriesLine,
	CategoriesModalButton,
	CategoriesModalForm,
	CategoriesModalTitle,
	CategoriesModalTop,
	CategoriesModalWrapper,
	CategoriesNameInput,
	CategoriesNameLabel,
} from '../../pages/Categories/Categories.styled';
import { Modal } from '../TypeModal/TypeModal';
import {
	CategoriesImageInputNew,
	CategoriesInnerWrapper,
	CategoriesListItem,
	CategoriesListItemImage,
	CategoriesListItemMenu,
	CategoriesListItemTitle,
	CategoriesMenuList,
	CategoriesMenuListItem,
	CategoriesModalFormNew,
	DeleteButton,
	DeleteDesc,
	DeleteWrapper,
} from './CategoriesItem.styled';
import CameraIcon from '../../assets/images/icons/camera-icon.svg';

export const CategoriesItem = ({ title, imagE, menuActive, id }) => {
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

	const imageValue = (props) => {
		setImage(props.target.files[0]);
	};

	const getDeleteInfo = (getId) => {
		console.log(getId);

		axios
			.delete('http://178.128.116.142:1777/api/category/v1/' + getId, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((res) => {
				if (res.status === 200) {
					alert('Succesfully deleted');
					setDeleteCategory(false);
					window.location.reload();
				}
			})
			.catch((err) => console.log(err));
	};

	const handleFormSubmiT = (evt) => {
		evt.preventDefault();

		console.log(image, categoryNameEdit.current.value);
		// axios
		// 	.put(
		// 		'http://178.128.116.142:1777/api/category/v1',
		// 		{
		// 			iconCategory: image,
		// 			id: null,
		// 			name: categoryNameEdit.current.value,
		// 			parentCategory: 0,
		// 		},
		// 		{
		// 			headers: {
		// 				Authorization: `Bearer ${token}`,
		// 			},
		// 		},
		// 	)
		// 	.then((res) => console.log(res))
		// 	.catch((err) => console.log(err));
	};

	return (
		<CategoriesListItem className="col-2 mb-2 ">
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
			<CategoriesListItemTitle>{title}</CategoriesListItemTitle>

			<Modal modal={categoriesModalEdit}>
				<CategoriesModalWrapper>
					<CategoriesModalTop>
						<CategoriesModalTitle>
							Kategoriya o'zgartirish
						</CategoriesModalTitle>
						<CategoriesModalButton
							onClick={() => setCategoriesModalEdit(false)}
						></CategoriesModalButton>
					</CategoriesModalTop>

					<form onSubmit={handleFormSubmiT}>
						<div style={{ display: 'flex', textAlign: 'left' }}>
							<CategoriesImageWrapper>
								<CategoriesImageLabel
									image={CameraIcon}
									htmlFor="forImage"
								></CategoriesImageLabel>
								<input
									type="file"
									id="forImage"
									onChange={imageValue}
									style={{ display: 'none' }}
								/>
								<CategoriesImageSpan>
									Kategoriya rasmi
								</CategoriesImageSpan>
							</CategoriesImageWrapper>

							<div>
								<CategoriesNameLabel htmlFor="forName">
									Yangi nomini kiriting
								</CategoriesNameLabel>
								<CategoriesNameInput
									type="text"
									placeholder=" Yangi nomini kiriting"
									ref={categoryNameEdit}
								/>
							</div>
						</div>
						<button type="submit">Send</button>
					</form>
				</CategoriesModalWrapper>
			</Modal>

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
