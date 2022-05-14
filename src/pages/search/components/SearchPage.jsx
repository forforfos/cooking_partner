import styled from "@emotion/styled";
import SearchForm from "./SearchForm";
import headerImage from "../../../assets/flatlay.jpg"

const HeaderImage = styled('div')`
  width: 100%;
  height: 600px;
  background-image: url(${headerImage});
  background-position: bottom;
  background-size: cover;
`;

const Header = styled('div')`
  color: white;
  text-align: right;
  font-size: 55px;
  margin: 30px 40px 0 0;
`;

const SubHeader = styled('div')`
  color: white;
  text-align: right;
  font-size: 20px;
  margin: 10px 40px 0 0;
`;

const SearchPage = () => (
  <HeaderImage>
    <Header>Welcome to your cooking partner</Header>
    <SubHeader>1. Enter your ingredient</SubHeader>
    <SubHeader>2. Press ENTER</SubHeader>
    <SubHeader>3. Do the same for all ingredients you have</SubHeader>
    <SubHeader>4. Press the Find Recipes button</SubHeader>
    <SearchForm />
  </HeaderImage>
);

export default SearchPage;
