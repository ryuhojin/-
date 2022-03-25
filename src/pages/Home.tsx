import Header from "@/components/base/Header";
import BannerContainer from "@/containers/home/BannerContainer";
import ContentTemplate from "@/components/template/ContentTemplate";
import BaseTemplate from "@/components/template/BaseTemplate";
const Home = () => {
  return (
    <>
      <BaseTemplate header={<Header />}>
        <BannerContainer />
        <ContentTemplate>
          <></>
        </ContentTemplate>
      </BaseTemplate>
    </>
  );
};
export default Home;
