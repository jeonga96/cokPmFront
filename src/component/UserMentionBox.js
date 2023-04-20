export default function PromotionUserMentionBox() {
  const mention = [
    "필요한 공사는 있는데 어떻게 진행해야 할지 모르겠어요!",
    "우리집 근처의 실력있는 업체를 알고 싶어요!",
    "광고가 아닌 실제 사용자의 리뷰를 확인하고 싶어요!",
    "한옥을 짓고 싶은데 정보가 너무 적어요!",
    "제 사업과 관련있는 업종의 다른 업체를 알고 싶어요!",
  ];
  return (
    <div className="userMentionBox">
      <div className="userMentionContainer">
        <img
          src="../assets/imgs/promition_userMentionBox_gongsaHuman.png"
          alt="공사하는 남자 일러스트"
          className="centerClass"
        />
        <span className="font_content1">
          <span>어렵고 복잡한 공사계획 때문에</span>
          <span> 고민이 많았다면?</span>
        </span>
        <div className="mentionContent_Wrap" style={{ marginTop: "50px" }}>
          {mention &&
            mention.map((item, index) => (
              <div className="mentionContent" key={index}>
                <img
                  src="../assets/imgs/promition_userMentionBox_usericon.png"
                  alt="회원"
                />
                <span>{item}</span>
              </div>
            ))}
        </div>
        <div
          className="font_content2"
          style={{ textAlign: "center", marginTop: "50px" }}
        >
          오늘부터 <span className="color_yellow_text">공사</span> 관련 업무는
          온라인에서 <span className="color_yellow_text">콕</span>
        </div>
      </div>
    </div>
  );
}
