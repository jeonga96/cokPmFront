import { useState } from "react";

function FaqButton({ titleText, contentText }) {
  const [click, setClick] = useState(false);
  return (
    <div onClick={() => setClick(!click)} className="contentWrap">
      <div className="titleText">
        <img src="../assets/imgs/promition_qna_qicon.png" alt="질문 아이콘" />
        <span
          className={
            click === true ? "font_content2 color_green_text" : "font_content2"
          }
        >
          {titleText}
        </span>
      </div>
      {click === true && <span className="contentText">{contentText}</span>}
    </div>
  );
}

export default function FaqBox() {
  return (
    <div className="FaqBox box">
      <div
        className="font_content1 color_green_text headTitle"
        style={{ textAlign: "center" }}
      >
        FAQ
      </div>
      <div>
        {/* ======= 첫번째 QnA ======= */}
        <FaqButton
          titleText="B2C 서비스와 B2B 서비스의 차이는 무엇인가요?"
          contentText={
            <>
              <div style={{ marginBottom: "25px" }}>
                <span>
                  B2C 서비스란 사용자 ( 고객 ) 와 사업자를 연결 매칭하는 서비스
                </span>
                <span>
                  또한 원하시는 공사 업체를 연결하고 견적의뢰서 및 견적서를
                  주고받는 공유 플랫폼
                </span>
              </div>
              <div>
                <span>B2B 서비스란 사업자와 사업자를 연결 매칭하는 서비스</span>
                <span>
                  자재, 공구, 인력, 운송 업체 등 현장에서 필요한 업무를
                  온라인에서 공유하는 사업자 플랫폼
                </span>
              </div>
            </>
          }
        />
        {/* ======= 두번째 QnA ======= */}
        <FaqButton
          titleText="견적의뢰서 작성은 어떻게 하나요?"
          contentText={
            <>
              <div>
                <span className="pc_inlineblock">
                  사업자 정보 상세 페이지에서 우측 상단의
                </span>
                <span className="pc_inlineblock">
                  <img
                    src="../assets/imgs/promotion_qnabox_paper.png"
                    alt="서류 아이콘"
                  />
                  <span>
                    ( 서류 모양 아이콘 ) 을 터치한 후 작성하시면 됩니다.
                  </span>
                </span>
                <span>( 자세히 기재 요망 )</span>
              </div>
            </>
          }
        />

        {/* ======= 세번째 QnA ======= */}
        <FaqButton
          titleText="견적서는 어떻게 확인하나요?"
          contentText={
            <>
              <div>
                <span>
                  공사업체 여러 곳을 선정하여 견적의뢰서를 작성하여 전송,
                  견적의뢰서를 받은 공사업체는 견적서를 작성하여 고객에게 전송,{" "}
                  사용자 ( 고객 ) 는 여러 업체의 견적서를 받아 확인 후 공사업체
                  선정
                </span>
              </div>
            </>
          }
        />

        {/* ======= 네번째 QnA ======= */}
        <FaqButton
          titleText="견적의뢰서 및 견적서는 각각 몇개까지 받아볼 수 있나요?"
          contentText={
            <>
              <div>
                {/* <span>
                  1개의 견적의뢰서 전송 및 견적서 수신은 무료, 여러개의
                  견적의뢰서 및 견적서 전송은 유료
                </span> */}
                <span>( 차후 정책에 따라 결정 예정 )</span>
              </div>
            </>
          }
        />

        {/* ======= 다섯번째 QnA ======= */}
        <FaqButton
          titleText="업체 등록 가맹점은 어떻게 신청하나요?"
          contentText={
            <>
              <div>
                <span className="pc_inlineblock">
                  <span>우측 상단 </span>
                  <img
                    src="../assets/imgs/promotion_qnabox_menu.png"
                    alt="메뉴 아이콘"
                  />
                  <span>( 메뉴 아이콘 ) 터치 후 </span>
                </span>
                <span className="pc_inlineblock">
                  <img
                    src="../assets/imgs/promotion_qnabox_moniter.png"
                    alt="모니터 아이콘"
                  />
                  <span>( 공사콕 서비스 신청하기 아이콘 ) 에서 신청</span>
                </span>
              </div>
            </>
          }
        />
      </div>
    </div>
  );
}
