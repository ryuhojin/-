import Header from "@/components/base/Header";
import SubTitle from "@/components/base/SubTitle";
import ResumeList from "@/components/resume/ResumeList";
import HomeTemplate from "@/components/template/HomeTemplate";
const Home = () => {
  return (
    <>
      <HomeTemplate header={<Header />}>
        <br />
        <SubTitle
          title={"이력서 목록"}
          context={
            <>
              여러분이 작성한 이력서를 한눈에 모아봤어요.
              <br />
              레쥬메이트는 더 나은 미래를 향한 당신의 노력을 항상 응원합니다.
            </>
          }
        />
        <br />
        <ResumeList />
      </HomeTemplate>
    </>
  );
};
export default Home;
