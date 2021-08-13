import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Container = styled.div`
  width: 100%;
`;

const Wrap = styled.div`
  .bg {
    position: relative;
    height: 800px;
    width: 100%;
    min-width: 1400px;
    object-fit: cover;
  }

  .contents {
    position: absolute;
    top: 0px;
    width: 100%;
  }
`;

const Menu = styled.div`
  min-width: 1400px;
  .header {
    padding: 37px 106px;
    display: flex;

    .navigator {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      line-height: 29px;
      text-align: end;

      div {
        margin-left: 85px;
        font-size: 18px;
        line-height: 26px;
        cursor: pointer;
        color: white;

        &.navi_route {
          &:hover {
            color: #00ffb2;
          }
        }

        img {
          width: 15px;
          margin-left: 8px;
          position: absolute;
          top: 44px;
        }
      }
    }
  }
`;

const Text = styled.div`
  padding: 30px 106px 100px;
  width: 100%;
  color: white;

  p {
    width: 950px;
    font-size: 24px;
    line-height: 32px;
    margin-top: 44px;

    &.title {
      width: 1100px;
      font-weight: 700;
      font-size: 68px;
      line-height: 86px;
    }
  }
`;

const Button = styled.button`
  width: 202px;
  height: 52px;
  background-color: #1b2e49;
  border-radius: 50px;
  margin-left: 106px;
  color: white;
  font-size: 15px;
  cursor: pointer;
  border: none;

  img {
    width: 16px;
    margin-left: 9px;
    margin-bottom: -3px;
  }
`;

const Main = () => {
  return (
    <Container>
      <Wrap>
        <div className="bg">
          <img className="bg" src="/assets/img/main/img_main.png" alt="" />
        </div>
        <div className="contents">
          <Menu>
            <div className="header">
              <img src="/assets/img/common/doublelink_logo.png" alt=""></img>
              <div className="navigator">
                <Link to="doublelink" smooth={true}>
                  <div className="navi_route">DOUBLELINK</div>
                </Link>
                <Link to="business" smooth={true}>
                  <div className="navi_route">BUSINESS</div>
                </Link>
                <div>
                  KOR
                  <img src="/assets/img/main/img_down_arrow.png" alt=""></img>
                </div>
              </div>
            </div>
          </Menu>

          <Text>
            <p className="title">
              링크상품권은 강력한 보안 체계를
              <br /> 바탕으로 제공됩니다.
            </p>
            <p>
              링크상품권은 최고의 암호화 기술이 적용된 상품권 서비스로
              <br />
              국내외 보안표준 및 규정을 준수하며 최고의 서비스를 제공합니다.
              <br />
              링크상품권은 온/오프라인 기반의 다양한 소셜커머스 및 오픈마켓,
              도서, 공연 및 문화,
              <br />
              앱스토어 컨텐츠 구매에 이용할 수 있습니다
            </p>
          </Text>

          <Button>
            VIEW MORE
            <img src="/assets/img/main/img_right_arrow.png" alt="" />
          </Button>
        </div>
      </Wrap>
    </Container>
  );
};

export default Main;
