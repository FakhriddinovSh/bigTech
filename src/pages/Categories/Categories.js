import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { CategoriesItem } from '../../components/CategoriesItem/CategoriesItem';
import { Modal } from '../../components/TypeModal/TypeModal';
import {
	AddButton,
	CategoriesButton,
	CategoriesButtonWrapper,
	CategoriesContentWrapper,
	CategoriesFilterButtons,
	CategoriesForm,
	CategoriesImageInnerWrapper,
	CategoriesImageInput,
	CategoriesImageLabel,
	CategoriesImageSpan,
	CategoriesImageWrapper,
	CategoriesInput,
	CategoriesInputIcon,
	CategoriesInputWrapper,
	CategoriesLine,
	CategoriesList,
	CategoriesListWrapper,
	CategoriesModalButton,
	CategoriesModalForm,
	CategoriesModalTitle,
	CategoriesModalTop,
	CategoriesModalWrapper,
	CategoriesNameInput,
	CategoriesNameLabel,
	CategoriesTitle,
	CategoriesWrapper,
} from './Categories.styled';
import CameraIcon from '../../assets/images/icons/camera-icon.svg';

export const Categories = () => {
	const [userSearch, setUserSearch] = useState('');
	const [categories, setCategories] = useState([]);
	const [categoriesModal, setCategoriesModal] = useState(false);
	const categoryName = useRef();
	const [image, setImage] = useState(null);
	const [menu, setMenu] = useState(false);
	const token = localStorage.getItem('user_token');

	useEffect(() => {
		axios
			.get('http://178.128.116.142:1777/api/category/v1')
			.then((res) => setCategories(res.data.objectKoinot))
			.catch((err) => console.log(err));
	}, []);

	const imageValuE = (props) => {
		setImage(props.target.files[0]);
	};

	const handleFormSubmit = (evt) => {
		evt.preventDefault();

		console.log(categoryName.current.value);
		console.log(image);

		// axios
		// 	.post(
		// 		'http://178.128.116.142:1777/api/category/v1',
		// 		{
		// 			iconCategory: image,
		// 			id: null,
		// 			name: categoryName.current.value,
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
		<CategoriesWrapper>
			<CategoriesForm autoComplete="off">
				<CategoriesInputWrapper>
					<CategoriesInputIcon></CategoriesInputIcon>
					<CategoriesInput
						type="text"
						name="user_search"
						onKeyUp={(evt) => setUserSearch(evt.target.value)}
						placeholder="Kategoriyalar qidiruvi"
						aria-label="Kategoriyalar qidiruvi"
					/>
				</CategoriesInputWrapper>
			</CategoriesForm>

			<AddButton onClick={() => setCategoriesModal(true)}>
				Kategoriya qo'shish
			</AddButton>
			<AddButton onClick={() => setCategoriesModal(true)}>
				Brand qo'shish
			</AddButton>

			<CategoriesListWrapper>
				<CategoriesContentWrapper>
					{/* <CategoriesFilterButtons margin>
						Top tovarlar
					</CategoriesFilterButtons>
					<CategoriesFilterButtons>
						Brend tovarlar
					</CategoriesFilterButtons> */}
					<CategoriesTitle>Kategoriyalar</CategoriesTitle>
					<ul>
						<li>
							<h4>Apple</h4>
						</li>
					</ul>
					<CategoriesList className="row">
						{categories.map((item) => (
							<CategoriesItem
								id={item.id}
								menuActive={menu}
								imagE={item.icon}
								title={item.name}
							/>
						))}
					</CategoriesList>
				</CategoriesContentWrapper>
			</CategoriesListWrapper>

			<Modal modal={categoriesModal}>
				<CategoriesModalWrapper>
					<CategoriesModalTop>
						<CategoriesModalTitle>
							Kategoriya qo’shish
						</CategoriesModalTitle>
						<CategoriesModalButton
							onClick={() => setCategoriesModal(false)}
						></CategoriesModalButton>
					</CategoriesModalTop>
					<CategoriesModalForm
						onSubmit={handleFormSubmit}
						autoComplete="off"
					>
						<CategoriesImageInnerWrapper>
							<CategoriesLine>
								<CategoriesImageWrapper>
									<CategoriesImageLabel
										image={CameraIcon}
										htmlFor="category_imagE"
									></CategoriesImageLabel>
									<CategoriesImageInput
										type="file"
										id="category_imagE"
										name="category_imagE"
										onChange={imageValuE}
									/>
									<CategoriesImageSpan>
										Kategoriya rasmi
									</CategoriesImageSpan>
								</CategoriesImageWrapper>

								<div>
									<CategoriesNameLabel htmlFor="category_name">
										Nomini kiriting
									</CategoriesNameLabel>
									<CategoriesNameInput
										type="text"
										placeholder="Kategoriya nomini kiriting"
										name="category_name"
										ref={categoryName}
									/>
								</div>
							</CategoriesLine>

							<CategoriesButtonWrapper>
								<CategoriesButton
									margin
									border
									background
									color
									type="button"
									onClick={() => setCategoriesModal(false)}
								>
									Bekor qilish
								</CategoriesButton>
								<CategoriesButton type="submit">
									Saqlash
								</CategoriesButton>
							</CategoriesButtonWrapper>
						</CategoriesImageInnerWrapper>
					</CategoriesModalForm>
				</CategoriesModalWrapper>
			</Modal>
		</CategoriesWrapper>
	);
};
