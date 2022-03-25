import Header from "@/components/base/Header";
import SubTitle from "@/components/base/SubTitle";
import TeamList from "@/components/project/TeamList";
import BaseTemplate from "@/components/template/BaseTemplate";
import SubMenuContainer from "@/containers/base/SubMenuContainer";

const Project = () => {
  return (
    <BaseTemplate header={<Header />}>
      <SubMenuContainer />
      <SubTitle title={"팀 공고"} context={
        <>
          메이터들에게 계획중인 혹은 진행중인 프로젝트 / 스터디에 대해 알려주세요.
          <br />
          보다 자세한 설명은 더 많은 메이터들을 모을 수 있게 해줍니다.
        </>} />
      <TeamList/>
    </BaseTemplate>
  );
};
export default Project;
