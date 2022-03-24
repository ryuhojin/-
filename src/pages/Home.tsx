import HomeTemplate from "@/components/template/HomeTemplate";
import Header from "@/components/base/Header";
import BannerContainer from "@/containers/home/BannerContainer";
import ContentTemplate from "@/components/template/ContentTemplate";
const Home = () => {
  return (
    <>
      <HomeTemplate header={<Header />}>
        <BannerContainer />
        <ContentTemplate>
          <></>
        </ContentTemplate>
      </HomeTemplate>
    </>
  );
};
export default Home;
