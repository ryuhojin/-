import { Helmet } from "react-helmet";
import { Route, Routes } from "react-router-dom";
import { Home, Login, Project, Register } from "@/pages";
const App = () => {
  return (
    <>
      <Helmet>
        <title>Mate</title>
        <meta
          name="description"
          content="지금 우리가 필요한건 동료, 동료가 필요할땐 언제나 메이트"
        />
      </Helmet>
      <Routes>
        <Route path="/project" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Project />} />
      </Routes>
    </>
  );
};

//TODO : 이곳에서 나중에 로그인과 관련된 작업을 합시다.

export default App;
