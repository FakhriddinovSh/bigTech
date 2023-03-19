import { useState } from 'react';
import { ProductsItem } from '../../components/ProductsItem/ProductsItem';
import {
	AddButton,
	CategoriesContentWrapper,
	CategoriesForm,
	CategoriesInput,
	CategoriesInputIcon,
	CategoriesInputWrapper,
	CategoriesList,
	CategoriesListWrapper,
	CategoriesWrapper,
} from '../Categories/Categories.styled';
import { ProductsContentWrapper, ProductsList } from './Products.styled';

export const Products = () => {
	const [categoriesModal, setCategoriesModal] = useState(false);
	const [userSearch, setUserSearch] = useState('');

	return (
		<CategoriesWrapper>
			<CategoriesForm autoComplete="off">
				<CategoriesInputWrapper>
					<CategoriesInputIcon></CategoriesInputIcon>
					<CategoriesInput
						type="text"
						name="user_search"
						onKeyUp={(evt) => setUserSearch(evt.target.value)}
						placeholder="Mahsulot qidiruvi"
						aria-label="Mahsulot qidiruvi"
					/>
				</CategoriesInputWrapper>
			</CategoriesForm>

			<AddButton onClick={() => setCategoriesModal(true)}>
				Mahsulot qo’shish
			</AddButton>

			<CategoriesListWrapper>
				<ProductsContentWrapper>
					<ProductsList className="row">
						{/* {products.map((item) => (
							<ProductsItem
								id={item.id}
								menuActive={menu}
								imagE={item.icon}
								title={item.name}
							/>
						))} */}

						<ProductsItem />
						<ProductsItem />
						<ProductsItem />
						<ProductsItem />
						<ProductsItem />
						<ProductsItem />
						<ProductsItem />
						<ProductsItem />
					</ProductsList>
				</ProductsContentWrapper>
			</CategoriesListWrapper>
		</CategoriesWrapper>
	);
};
