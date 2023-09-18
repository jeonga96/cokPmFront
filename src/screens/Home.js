import { lazy, Suspense } from "react";

import Loading from "./Loading";

const VisualBox = lazy(() => import("../component/VisualBox.js"));
const UserMentionBox = lazy(() => import("../component/UserMentionBox.js"));
const AppScreenSliderBox = lazy(() =>
  import("../component/AppScreenSliderBox.js")
);
const GpsBox = lazy(() => import("../component/GpsBox.js"));
const BusinessLinkBox = lazy(() => import("../component/BusinessLinkBox.js"));
const FaqBox = lazy(() => import("../component/FaqBox.js"));
const CertificationBox = lazy(() => import("../component/CertificationBox.js"));
const Footer = lazy(() => import("../component/Footer.js"));

export default function Promotion() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <VisualBox />
        <UserMentionBox />
        <AppScreenSliderBox />
        <GpsBox />
        <BusinessLinkBox />
        <FaqBox />
        <CertificationBox />
        <Footer />
      </Suspense>
    </div>
  );
}
