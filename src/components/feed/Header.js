import styled from "styled-components";
import { LeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { Button } from "antd";

const SHeader = styled.div`
  width: 100%;
  height: 60px;
  padding: 18px 0px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: -20px;
`;

function Header({ children }) {
  const history = useHistory();
  return <SHeader>{children}</SHeader>;
}

export default Header;
