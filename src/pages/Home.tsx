import BaseTemplate from "@/components/template/BaseTemplate";
import Header from "@/components/base/Header";
import BannerContainer from "@/containers/home/BannerContainer";
import ContentTemplate from "@/components/template/ContentTemplate";
const Home = () => {
    return <>
        <BaseTemplate header={<Header />}>
            <BannerContainer />
            <BannerContainer />
            <BannerContainer />
            <ContentTemplate><></></ContentTemplate>
        </BaseTemplate>
    </>
}
export default Home;