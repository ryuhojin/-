import Header from "@/components/base/Header";
import { useNavigate } from "react-router-dom";
const HeaderContainer = () => {
  const navigate = useNavigate();

  const onClickHomeBtn = () => {
    navigate("/");
  };
  return <Header onClickHomeBtn={onClickHomeBtn} />;
};
export default HeaderContainer;
