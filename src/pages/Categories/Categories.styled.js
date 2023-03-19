import styled from 'styled-components';
import SearchIcon from '../../assets/images/icons/search-icon.svg';
import CloseModal from '../../assets/images/icons/close-modal.svg';

export const CategoriesWrapper = styled.div`
	width: 100%;
`;
export const CategoriesForm = styled.form``;
export const CategoriesInputWrapper = styled.div`
	position: relative;
`;
export const CategoriesInputIcon = styled.span`
	position: absolute;
	top: 21px;
	left: 8px;
	width: 20px;
	height: 20px;
	background-image: url(${SearchIcon});
	content: 'qwe';
`;
export const CategoriesInput = styled.input`
	width: 100%;
	padding: 18px;
	padding-left: 40px;
	border: none;
`;

export const AddButton = styled.button`
	position: relative;
	left: 75%;
	margin-top: 36px;
	margin-right: 20px;
	margin-bottom: 43px;
	padding: 11px 12px;
	font-weight: 600;
	font-size: 13px;
	line-height: 20px;
	text-align: center;
	letter-spacing: 0.01em;
	color: #ffffff;
	background: #109cf1;
	box-shadow: 0px 4px 10px rgba(16, 156, 241, 0.24);
	border-radius: 4px;
	border: transparent;
`;

export const CategoriesListWrapper = styled.div`
	width: 100%;
	height: 75%;
	background: #ffffff;
	box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.25);
	border-radius: 50px;
`;

export const CategoriesContentWrapper = styled.div`
	padding-top: 30px;
	padding-left: 59px;
	padding-right: 59px;
	padding-bottom: 44px;
`;
export const CategoriesFilterButtons = styled.button`
	padding: 15px 0;
	width: 49%;
	margin-right: ${(props) => (props.margin ? '15px' : '')};
	font-size: 24px;
	line-height: 36px;
	text-align: center;
	letter-spacing: 0.01em;
	color: #000000;
	background: #ffffff;
	box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.25);
	border-radius: 8px;
	border: transparent;
`;

export const CategoriesList = styled.ul`
	height: 330px;
	overflow-y: scroll;
	margin: 0;
	margin-top: 33px;
	padding: 0;
	list-style: none;
`;

export const CategoriesModalWrapper = styled.div`
	width: 620px;
	margin: 100px auto;
	padding-top: 24px;
	padding-right: 32px;
	padding-left: 32px;
	padding-bottom: 35px;
	background-color: #fff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 27px;
`;

export const CategoriesModalTop = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 50px;
`;
export const CategoriesModalTitle = styled.h3`
	font-weight: 500;
	font-size: 18px;
	line-height: 30px;
	color: #334d6e;
`;
export const CategoriesModalButton = styled.button`
	width: 17px;
	height: 17px;
	background-image: url(${CloseModal});
	background-repeat: no-repeat;
	background-color: transparent;
	background-size: cover;
	border: none;
	cursor: pointer;
`;

export const CategoriesModalForm = styled.form``;
export const CategoriesImageWrapper = styled.div`
	margin-right: 32px;
`;
export const CategoriesImageSpan = styled.span`
	display: block;
	font-weight: 500;
	font-size: 16px;
	line-height: 30px;
	color: #334d6e;
`;
export const CategoriesImageInnerWrapper = styled.div`
	text-align: left;
`;

export const CategoriesLine = styled.div`
	display: flex;
	align-items: flex-start;
`;

export const CategoriesImageLabel = styled.label`
	width: 103px;
	height: 103px;
	border-radius: 11px;
	background-image: url(${(props) => props.image});
	background-repeat: no-repeat;
	background-position: center;
	background-color: #c2cfe0;
`;
export const CategoriesImageInput = styled.input`
	display: none;
`;

export const CategoriesNameLabel = styled.label`
	margin-bottom: 22px;
	font-weight: 500;
	font-size: 16px;
	line-height: 40px;
	color: #334d6e;
`;
export const CategoriesNameInput = styled.input`
	width: 100%;
	padding: 10px 20px;
	font-weight: 500;
	font-size: 15px;
	line-height: 22px;
	letter-spacing: 0.01em;
	color: #323c47;
	border: 1px solid #c2cfe0;
	border-radius: 8px;
`;

export const CategoriesButtonWrapper = styled.div`
	position: relative;
	left: 300px;
	margin-top: 64px;
`;
export const CategoriesButton = styled.button`
	margin-right: ${(props) => (props.margin ? '16px' : '')};
	padding: 5px 24px;
	font-weight: 500;
	font-size: 14px;
	line-height: 30px;
	color: ${(props) => (props.border ? '#092C4C' : '#fff')};
	border-color: ${(props) => (props.border ? '#C2CFE0' : 'transparent')};
	background: ${(props) => (props.border ? 'transparent' : '#514ef3')};
	border-radius: 8px;
`;

export const CategoriesTitle = styled.h3`
	font-size: 24px;
	line-height: 36px;
	color: #109cf1;
	text-align: left;
`;
