import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

const Metavex = styled.div`
  margin-top: 104px;

  .desc {
    margin-bottom: 30px;
  }
`;

const Giftcard = styled.div`
  margin-bottom: 100px;
  .desc {
    margin-bottom: 52px;
  }
  img {
    margin-right: 132px;
  }
`;

const Cooperation = styled.div`
  display: none !important;
  margin: 155px 0 155px;
  h3 {
    // font-family: DM Sans;
    font-weight: bold;
    font-size: 42px;
    line-height: 52px;
    letter-spacing: -0.4px;
    color: #1e0e62;
  }
  p {
    // font-family: DM Sans;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    color: rgba(21, 20, 57, 0.4);
    opacity: 0.7;
    margin: 36px 0 46px;
  }
  .box > div {
    width: 800px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    img {
      margin: 10px 50px;
    }
  }
`;

const Franchise = styled.div`
  margin-bottom: 110px;
  display: none !important;

  .box.frcs {
    width: 1168px;
    height: 341.66px;
    background: radial-gradient(
      96.32% 571.83% at 98.4% 19.88%,
      #8fb3ff 0%,
      #9d6be8 27.72%,
      #de2778 54.29%,
      #b03de2 100%
    );
    // background: linear-gradient(264.7deg, #E37777 6.83%, #F2554C 42.09%, #FEC458 64.55%, #FEC957 86.42%, #DB788D 101.5%);
    // filter: blur(80px);
    border-radius: 20px;
    color: white;
  }
  h3 {
    // font-family: Poppins;
    font-weight: 600;
    font-size: 40px;
    line-height: 60px;
  }
  p {
    // font-family: Inter;
    font-weight: 800;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.01em;
    color: rgba(255, 255, 255, 0.83);
    margin: 15px 0 28px;
  }
  button {
    all: unset;
    width: 202px;
    height: 52px;
    background: #1b2e49;
    border-radius: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    img {
      margin-left: 10px;
    }
  }
`;

const Container = styled.div`
  // height: 2207px;

  ${Metavex}, ${Giftcard}, ${Cooperation}, ${Franchise} {
    display: flex;
    justify-content: center;
  }
  .box {
    width: 1201px;
    display: flex;
    justify-content: flex-start;

    &.frcs {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  h1 {
    // font-family: Noto Sans KR;
    font-weight: bold;
    font-size: 50px;
    color: #19191b;
    letter-spacing: -1.56316px;
    line-height: 57px;
    margin-bottom: 40px;
  }
  .desc {
    // font-family: Noto Sans KR;
    font-size: 24px;
    line-height: 35px;
  }
  .more_btn {
    all: unset;
    // font-family: DM Sans;
    font-weight: bold;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: -0.531474px;
    color: #5454d4;
    cursor: pointer;
  }

  h1 {
    // font-family: Noto Sans KR;
    font-weight: bold;
    font-size: 50px;
    color: #19191b;
    letter-spacing: -1.56316px;
    line-height: 57px;
    margin-bottom: 40px;
  }
  .desc {
    // font-family: Noto Sans KR;
    font-size: 24px;
    line-height: 35px;
  }
  .more_btn {
    all: unset;
    // font-family: DM Sans;
    font-weight: bold;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: -0.531474px;
    color: #5454d4;
    cursor: pointer;
  }
`;

const Business = () => {
  return (
    <Element name="business">
      <Container className="full-width">
        <Metavex>
          <div className="box">
            <div>
              <h1>METAVEX</h1>
              <p className="desc">
                메타벡스는 ISMS 및 AML에 중점을 두도록 설계된
                <br />
                가상 자산 거래소입니다.
                <br />
                <br />
                안전하고 투명한 서비스를 제공합니다.
              </p>
              <button className="more_btn">Learn more</button>
            </div>
            <img src="/assets/img/business/img_metavex.png" alt="" />
          </div>
        </Metavex>
        <Giftcard>
          <div className="box">
            <img src="/assets/img/business/img_doublelink.png" alt="" />
            <div>
              <h1>더블링크 상품권</h1>
              <p className="desc">
                디지털 금융을 선도하는 블록 체인 상품권
                <br />
                플랫폼입니다.
              </p>
              <button className="more_btn">Learn more</button>
            </div>
          </div>
        </Giftcard>
        <Cooperation>
          <div className="box frcs">
            <h3>제휴사</h3>
            <p>
              Startup Framework includes great form options for your startup
              projects.
              <br />
              Each component is coded for web which makes creating a website
              quick and easy.
            </p>
            <div>
              <img src="/assets/img/business/img_cooperation.png" alt="" />
              <img src="/assets/img/business/img_cooperation.png" alt="" />
              <img src="/assets/img/business/img_cooperation.png" alt="" />
              <img src="/assets/img/business/img_cooperation.png" alt="" />
              <img src="/assets/img/business/img_cooperation.png" alt="" />
            </div>
          </div>
        </Cooperation>
        <Franchise>
          <div className="box frcs">
            <h3>제휴 가맹점 모집</h3>
            <p>
              링크 상품권의 다양한 결제 혜택을 놓치지 마세요!
              <br />
              더블링크와 제휴된 가맹점에서 링크 상품권 이용이 가능합니다.
            </p>
            <button>
              신청하러가기
              <img src="/assets/img/business/icon_vector.png" alt="" />
            </button>
          </div>
        </Franchise>
      </Container>
    </Element>
  );
};

export default Business;
