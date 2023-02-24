import React from 'react';
import styled from "@emotion/styled";
import { AiOutlineSearch } from "react-icons/ai";

const Base = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(255,255,255);
  text-align: center;
  box-shadow: rgb(0 0 0 / 0%) 0 1px 0 0;
  width: 100%;
  height: 62px;
  z-index: 10;
`;
const Navigation = styled.nav`
  margin: 0 auto;
  max-width: 1200px;
`;
const MenuListWrapper = styled.div``;
const MenuList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;
const Menu = styled.li`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  height: 62px;
  &:not(:first-of-type) {
    margin-left: 24px;
  };
`;
const MenuButton = styled.button<{active?: Boolean}>`
  font-size: 15px;
  color: ${ ({ active }) => active ? 'rgb(53,53,53)': 'rgb(126,126,126)' };
  border: none;
  background: transparent;
  cursor: pointer;
`;
const Link = styled.a`
  text-decoration: none;
`;
const TextLogo = styled.h1`
  font-size: 24px;
  font-weight: 700;
  > span[class="primary"] {
      color: rgb(255, 47, 110);
  }
  > span:not(.primary) {
    color: #222;
  }
`;
const SearchMenu = styled.li`
  display: flex;
  width: 300px;
  height: 62px;
  align-items: center;
  flex-shrink: 1;
  margin: 0 0 0 auto;
  position: relative;
`;
const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`;
const SearchFormWrapper = styled.div``;
const SearchForm = styled.form``;
const SearchLabel = styled.label`
  display: flex;
  width: 100%;
  height: 38px;
  box-sizing: border-box;
  padding: 7px 8px;
  align-items: center;
  background: rgb(245,245,247);
  border-radius: 2px;
`;
const SearchInput = styled.input`
  font-size: 14px;
  font-weight: 600;
  background: transparent;
  width: 100%;
  padding: 0 0 0 8px;
  border: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  caret-color: rgb(53,53,53);
  line-height: 24px;
`;
const SignIn = styled.button`
  background: transparent;
  color: rgba(116,116,123);
  font-size: 14px;
  padding: 0;
  border: 0;
  cursor: pointer;
  margin: 0 15px;
`;
const SignUp = styled.button`
  border-radius: 6px;
  font-weight: 500;
  box-sizing: border-box;
  min-width: 72px;
  height: 32px;
  background: transparent;
  color: rgb(53,53,53);
  font-size: 14px;
  border: 1px solid rgba(116,116,123,0.5);
  cursor: pointer;
  margin: 0 15px;
`;


const Header: React.FC = () => {
    const handleKeyword = () => {
        //검색함수만들기
    }

    return(
        <Base>
            <Navigation>
                <MenuListWrapper>
                    <MenuList>
                        <Menu>
                            <Link href="/">
                                <TextLogo>
                                    <span className="primary">WATCOUT</span>
                                    <span>PEDIA</span>
                                </TextLogo>
                            </Link>
                        </Menu>
                        <Menu>
                            <Link href="/">
                                <MenuButton>영화</MenuButton>
                            </Link>
                            <Link href="/tv">
                                <MenuButton>TV프로그램</MenuButton>
                            </Link>
                        </Menu>
                        <SearchMenu>
                            <SearchContainer>
                                <SearchFormWrapper>
                                    <SearchForm>
                                        <SearchLabel>
                                            <AiOutlineSearch />
                                            <SearchInput placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요." onChange={handleKeyword}></SearchInput>
                                        </SearchLabel>
                                    </SearchForm>
                                </SearchFormWrapper>
                            </SearchContainer>
                        </SearchMenu>
                        <Menu>
                            <SignIn>로그인</SignIn>
                            <SignUp>회원가입</SignUp>
                        </Menu>
                    </MenuList>
                </MenuListWrapper>
            </Navigation>
        </Base>
    )
}

export default Header;