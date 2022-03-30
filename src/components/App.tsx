import { Helmet } from "react-helmet";
import { Route, Routes } from "react-router-dom";
import { Home, Login, Resume, Register } from "@/pages";
const App = () => {
  return (
    <>
      <Helmet>
        <title>레쥬메이트</title>
        <meta
          name="description"
          content="당신의 이력서를 도와드립니다. 하나뿐인 이력서 작성 도우미 레쥬메이트"
        />
      </Helmet>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  );
};

//TODO : 이곳에서 나중에 로그인과 관련된 작업을 합시다.

export default App;
