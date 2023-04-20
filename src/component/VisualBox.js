import { Link } from "react-router-dom";

export default function PromotionVisualBox() {
  return (
    <div className="visualBox">
      <div className="visualContainer">
        <img
          src="../assets/imgs/promotion_gongsacoklogo.png"
          className="visualBox_coklogo centerClass"
          alt="공사콕"
        />
        <div className="visualBox_contentWrap">
          <img
            src="../assets/imgs/promotion_moblie.png"
            alt="공사콕 어플 메인 화면 이미지"
            className="visualBox_moblie"
          />
          <div className="visualBox_texttWrap">
            <div className="visualBox_spanWrap">
              <span className="font_content2">
                <span style={{ display: "block" }}>
                  오프라인 <span className="color_black_text">공사 </span>
                  현장에서 발생되는
                </span>
                <span className="font_content2">
                  업무를 온라인에서 <span className="color_black_text">콕</span>
                </span>
              </span>
              <span className="font_content2">
                " 공사관련 매칭 O2O 플랫폼 "
              </span>
              <span className="font_content3">
                APP 에서 간단하게
                <span className="color_black_text"> 비교견적</span> 을
                받아보세요
              </span>
            </div>
            <div className="visualBox_buttonWrap">
              <Link to="grandopen" className="font_button">
                <img
                  src="../assets/imgs/promotion_googlepalystorelogo.svg"
                  alt="공사콕 안드로이드 버전 다운로드"
                />
                공사콕 안드로이드 다운로드
              </Link>
              <Link to="grandopen" className="font_button">
                <img
                  src="../assets/imgs/promotion_appstorelogo.png"
                  alt="공사콕 아이폰 버전 다운로드"
                />
                공사콕 아이폰 다운로드
              </Link>
            </div>
            <div className="visualBox_buttonWrap">
              <Link
                to="grandopen"
                style={{ backgroundColor: "#fff", color: "#000" }}
                className="font_button"
              >
                공사콕 회원 가입하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
