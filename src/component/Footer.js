import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footerBox">
      <div className="footer_logoContainer">
        <img
          src="../assets/imgs/promotion_gongsacokcolorlogo.png"
          alt="공사콕 로고"
        />
        <span>공사콕 gongsacok</span>
      </div>
      <div className="footer_textContainer">
        <span>
          회사명 : 와짱 ( 주 ) | 대표이사 : 박종석 | since : 2000년 4월
        </span>
        <span className="mobile_none"> | </span>
        <span>대표전화 : 1577 - 7942 | fax : 02 - 2652 - 2700</span>
        <span>
          사업자번호 : 123 - 81 - 56602 | 법인등록번호 : 134111 - *******
        </span>
        <span className="mobile_none"> | </span>
        <span>
          주소 : 서울시 양천구 중앙로 262번지 메디바이오플렉스빌딩 5층
        </span>
      </div>
      <span>Copyright © wazzang. All rights reserved.</span>
      <ul>
        <li>
          <Link to="/grandopen">공사콕 홈페이지</Link>
        </li>
        <li>
          <Link to="/grandopen">이용약관</Link>
        </li>
        <li>
          <Link to="/grandopen">개인정보취급방침</Link>
        </li>
      </ul>
    </div>
  );
}
