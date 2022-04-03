import BaseTemplate from "@/components/template/BaseTemplate";
import HeaderContainer from "@/containers/base/HeaderContainer";
import SubTitle from "@/components/base/SubTitle";
import ResumeForm from "@/components/resume/ResumeForm";

const Write = () => {
  return (
    <>
      <BaseTemplate
        header={<HeaderContainer />}
        subtitle={
          <SubTitle
            title={"이력서 작성"}
            context={
              <>
                주어진 목록을 채워 이력서를 작성해주세요.
                <br />
                작성 후 원하는 서식으로 PDF 다운로드 할 수 있습니다.
              </>
            }
          />
        }
      >
        <ResumeForm />
      </BaseTemplate>
    </>
  );
};
export default Write;
