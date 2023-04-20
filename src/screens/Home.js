import VisualBox from "../component/VisualBox";
import UserMentionBox from "../component/UserMentionBox";
import AppScreenSliderBox from "../component/AppScreenSliderBox";
import GpsBox from "../component/GpsBox";
import BusinessLinkBox from "../component/BusinessLinkBox";
import FaqBox from "../component/FaqBox";
import CertificationBox from "../component/CertificationBox";
import Footer from "../component/Footer";

export default function Promotion() {
  return (
    <div>
      <VisualBox />
      <UserMentionBox />
      <AppScreenSliderBox />
      <GpsBox />
      <BusinessLinkBox />
      <FaqBox />
      <CertificationBox />
      <Footer />
    </div>
  );
}
