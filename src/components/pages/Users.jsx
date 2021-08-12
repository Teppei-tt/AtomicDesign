import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `teppei${val}`,
    image: "https://source.unsplash.com/smgqIwTvf0M",
    email: "wgeigh@gmail.com",
    phone: "090-0000-9989",
    company: {
      name: "test company"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  const { state } = useLocation();
  const isAdmin = state ? state.isAdmin : false;

  return (
    <SContainer>
      <h2>USERS</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} isAdmin={isAdmin} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
