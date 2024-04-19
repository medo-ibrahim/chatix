import styled from "styled-components";
import Avatar from "../assets/my-img.png";
import { FaMoon, FaUser, FaArrowRight } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import { checkValidImage } from "../utils/helpers";

const StyledHeader = styled.header`
  padding: 15px 5px;
  border-bottom: 1px solid var(--border-color);
  background-color: var(--global-background);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Img = styled.img`
  width: 50px;
  display: block;
  border-radius: 50%;
`;
const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const StyledIcons = styled.ul`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const Icon = styled.li`
  cursor: pointer;
  font-size: 20px;
  transition: 0.3s;
  padding: 5px;
  border-radius: 10px;

  &:hover {
    background-color: var(--color-brand-300);
    color: var(--color-brand-50);
  }
`;
function Header({ selectedUser }) {
  function handleLogout() {
    signOut(auth);
  }
  return (
    <StyledHeader>
      {selectedUser && (
        <User>
          <p>talking to:</p>
          <Img src={checkValidImage(selectedUser.photoURL)} alt={"Avatar"} />
          <h5>{selectedUser.name}</h5>
        </User>
      )}
      <StyledIcons>
        <Icon>
          <FaMoon />
        </Icon>
        <Icon>
          <FaUser />
        </Icon>
        <Icon onClick={handleLogout}>
          <IoIosLogOut />
        </Icon>
      </StyledIcons>
    </StyledHeader>
  );
}

export default Header;
