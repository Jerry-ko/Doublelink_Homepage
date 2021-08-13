import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

const Container = styled.div``;

const Wrap = styled.div`
  padding-top: 130px;
`;

const Section = styled.section`
  text-align: center;
  .title {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  .desc {
    font-size: 22px;
    line-height: 32px;
    color: #151439;
    opacity: 40%;
  }
`;

const Article = styled.article`
  margin-top: 62px;

  .top-item,
  .bottom-item {
    display: flex;
    justify-content: center;
  }

  .bottom-item {
    margin-top: 20px;
  }

  .item {
    &:nth-child(1),
    &:nth-child(3) {
      margin-right: 20px;
    }

    .imgBox {
      width: 446px;
      height: 303px;
      overflow: hidden;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .text {
      padding: 51px 55px;
      border: 2px solid #ebeaed;
      width: 446px;
      height: 289.18px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      box-shadow: 0px 5px 5px #ebeaed;

      .title {
        font-size: 20px;
        color: #1e0e62;
      }

      .desc {
        font-size: 18px;
        line-height: 26px;
      }
    }
  }
`;

const Keyword = styled.div`
  margin-top: 146px;
  margin-bottom: 166px;
  display: flex;
  justify-content: space-between;
  width: 1200px;

  .keyword_item {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-size: 24px;
      line-height: 46px;
      font-weight: 700;
      margin-top: 24px;
      margin-bottom: 20px;
    }
    img {
      margin-left: 40px;
    }

    &:nth-child(1) {
      img {
        width: 114px;
        margin-top: 5px;
      }
    }

    &:nth-child(2) {
      img {
        width: 91px;
      }
    }

    &:nth-child(3) {
      img {
        width: 118px;
        margin-top: 8.8px;
      }
    }

    span {
      color: #696871;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      width: 320px;
    }
  }
`;

const DoubleLink = () => {
  return (
    <Container>
      <Element name="doublelink">
        <Wrap>
          <Section>
            <div className="title">기업소개</div>
            <div className="desc">
              We are creating a financial environment where anyone can invest
              easily
              <br />
              and effectively.
            </div>
            <Article>
              <div className="top-item">
                <div className="item">
                  <div className="imgBox">
                    <img
                      src="/assets/img/doubleLink/img_coreValue.png"
                      alt=""
                    />
                  </div>
                  <div className="text">
                    <div className="title">CORE VALUE</div>
                    <div className="desc">
                      풍부한 비즈니스 경험, 고급 기술 및 전문
                      <br />
                      성을 갖춘 구조화되고 안전한 시스템 및<br />고 가용성
                      서비스를 제공합니다.
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="imgBox">
                    <img
                      src="/assets/img/doubleLink/img_whoYouAre.png"
                      alt=""
                    />
                  </div>
                  <div className="text">
                    <div className="title">WHO WE ARE</div>
                    <div className="desc">
                      Doublink는 블록 체인 기술을 통해
                      <br /> 혁신적인 금융 서비스를 창출하는
                      <br /> 회사입니다.
                    </div>
                  </div>
                </div>
              </div>

              <div className="bottom-item">
                <div className="item">
                  <div className="imgBox">
                    <img src="/assets/img/doubleLink/img_mission.png" alt="" />
                  </div>
                  <div className="text">
                    <div className="title">MISSION</div>
                    <div className="desc">
                      지속적인 혁신은 보다 편리하고
                      <br />
                      안정적인 디지털 금융 플랫폼의 미래를
                      <br /> 주도합니다.
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="imgBox">
                    <img src="/assets/img/doubleLink/img_future.png" alt="" />
                  </div>
                  <div className="text">
                    <div className="title">WINDOW TO THE FUTURE</div>
                    <div className="desc">
                      누구나 쉽고 효과적으로 투자 할 수있는
                      <br /> 금융 환경을 조성하고 있습니다.
                    </div>
                  </div>
                </div>
              </div>
            </Article>
          </Section>
          <Keyword>
            <div className="keyword_item">
              <img src="/assets/img/doubleLink/img_card.png" alt="" />
              <p>안전성</p>
              <span>
                See how you stack up against comparable
                <br /> companies in similar stages.
              </span>
            </div>
            <div className="keyword_item">
              <img src="/assets/img/doubleLink/img_calculator.png" alt="" />
              <p>혁신적인</p>
              <span>
                Benchmark the health of your monetization <br /> and pricing
                strategy.
              </span>
            </div>
            <div className="keyword_item">
              <img src="/assets/img/doubleLink/img_camera.png" alt="" />
              <p>효과적</p>
              <span>
                Audit where revenue leakage exists and
                <br /> where you can increase retention.
              </span>
            </div>
          </Keyword>
        </Wrap>
      </Element>
    </Container>
  );
};

export default DoubleLink;
