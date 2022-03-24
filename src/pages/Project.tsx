import Header from "@/components/base/Header";
import BaseTemplate from "@/components/template/BaseTemplate";
import SubMenuContainer from "@/containers/base/SubMenuContainer";

const Project = () => {
  return (
    <BaseTemplate header={<Header />}>
      <SubMenuContainer />
    </BaseTemplate>
  );
};
export default Project;
