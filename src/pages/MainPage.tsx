import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

function MainPage() {
  return (
    <div>
      <Header />
      <Banner />
      <body>
        <div className="start">
          <div className="start-l">
            <div className="start-l-wrap">
              <img src="http://www.grinmydesign.com/cypers/images/cy_logo.png" alt="사이퍼즈로고" />
              <a href="#">사이퍼즈</a>
              <img src="http://www.grinmydesign.com/cypers/images/nexon_logo.png" alt="넥슨로고" />
              <a href="#">넥슨</a>
              <img src="http://www.grinmydesign.com/cypers/images/dp_logo.png" alt="던파" />
              <a href="#">던파</a>
            </div>
            <input type="text" placeholder="아이디" />
            <input type="password" placeholder="비밀번호" />
            <div className="login_box">
              <a href="#">LOGIN</a>
            </div>
            <div className="login_bottom">
              <a href="#">회원가입</a>
              <a href="#">아이디/비밀번호 찾기</a>
            </div>
          </div>
          <a href="#" className="start-r">
            <img src="http://www.grinmydesign.com/cypers/images/angae.png" alt="안개정제소" />
          </a>
        </div>
        <div className="bottom">
          <div className="news">
            <div className="box1">
              <img
                src="http://www.grinmydesign.com/cypers/images/cy_icon1.png"
                alt="메인  아이콘"
              />
              <span>공지사항</span>
              <img
                src="http://www.grinmydesign.com/cypers/images/add-plus-button.png"
                alt="더보기"
              />
              <ul>
                <li>
                  <a href="#">리얼 사이퍼즈 2019 당선자 안내</a>
                </li>
                <li>
                  <a href="#">6월 20일 업데이트 피드백 설문조사 당첨자 안내</a>
                </li>
                <li>
                  <a href="#">[완료] 7월 25일 정기점검 안내 (06:00~10:00)</a>
                </li>
                <li>
                  <a href="#">7월 25일 정기점검 보상지급 일정</a>
                </li>
                <li>
                  <a href="#">비매너 이용자 제재 결과 안내 (7월 23일)</a>
                </li>
                <li>
                  <a href="#">(완료) 7/23(화) Toss 결제 서비스 이용</a>
                </li>
                <li>
                  <a href="#">(완료) 7/23(화) Toss 결제 서비스 이용</a>
                </li>
              </ul>
            </div>
            <div className="box2">
              <img src="http://www.grinmydesign.com/cypers/images/cy_icon1.png" alt="" />
              <span>업데이트</span>
              <img
                src="http://www.grinmydesign.com/cypers/images/add-plus-button.png"
                alt="더보기"
              />
              <ul>
                <li>
                  <a href="#">리얼 사이퍼즈 2019 당선자 안내</a>
                </li>
                <li>
                  <a href="#">6월 20일 업데이트 피드백 설문조사 당첨자 안내</a>
                </li>
                <li>
                  <a href="#">[완료] 7월 25일 정기점검 안내 (06:00~10:00)</a>
                </li>
                <li>
                  <a href="#">7월 25일 정기점검 보상지급 일정</a>
                </li>
                <li>
                  <a href="#">비매너 이용자 제재 결과 안내 (7월 23일)</a>
                </li>
                <li>
                  <a href="#">(완료) 7/23(화) Toss 결제 서비스 이용</a>
                </li>
                <li>
                  <a href="#">(완료) 7/23(화) Toss 결제 서비스 이용</a>
                </li>
              </ul>
            </div>
            <a href="#" className="box3">
              <img src="http://www.grinmydesign.com/cypers/images/meg.png" alt="매거진" />
            </a>
          </div>
          <div className="bannerbox">
            <a href="#" className="banner-box1">
              <img
                src="http://www.grinmydesign.com/cypers/images/middle_banner.jpg"
                alt="중간배너"
              />
              <span>사이퍼즈 멤버십 서비스</span>
            </a>
            <a href="#" className="banner-box2">
              <img
                src="http://www.grinmydesign.com/cypers/images/middle_banner.jpg"
                alt="중간배너"
              />
              <span>초보자&amp;귀환자 능력자님 혜택</span>
            </a>
            <a href="#" className="banner-box3">
              <img
                src="http://www.grinmydesign.com/cypers/images/middle_banner.jpg"
                alt="중간배너"
              />
              <span>PC방 프리미엄 헤택안내</span>
            </a>
          </div>
        </div>
        <div className="bottombox">
          <div className="search">
            <div className="search-wrap">
              <img src="http://www.grinmydesign.com/cypers/images/cy_icon2.png" alt="아이콘2" />
              <span>전적검색</span>
              <div className="search_box1">
                <input type="text" />
                <img
                  src="http://www.grinmydesign.com/cypers/images/magnifying-glass.png"
                  alt="검색"
                />
              </div>
              <img src="http://www.grinmydesign.com/cypers/images/cy_icon2.png" alt="아이콘2" />
              <span>전체검색</span>
              <div className="search_box2">
                <input type="text" />
                <img
                  src="http://www.grinmydesign.com/cypers/images/magnifying-glass.png"
                  alt="검색"
                />
              </div>
            </div>
          </div>
          <div className="lank">
            <div className="lank-top">
              <img
                src="http://www.grinmydesign.com/cypers/images/tit_rank_total.png"
                alt="랭킹아이콘"
              />
              <ul>
                <li>
                  <a href="#">투신전</a>
                </li>
                <li>
                  <a href="#">캐릭터랭킹</a>
                </li>
                <li>
                  <a href="#">통합랭킹</a>
                </li>
                <li>
                  <a href="#">기록실</a>
                </li>
                <li>
                  <a href="#">클랜랭킹</a>
                </li>
              </ul>
            </div>
            <div className="lank-bottom">
              <div className="lank-bottom-text1">
                <ul>
                  <li>01RANK</li>
                  <li>-212급-</li>
                  <li>훈스탠</li>
                  <li>113전 72승 41패</li>
                  <li>RP</li>
                  <li>1460</li>
                </ul>
              </div>
              <div className="lank-bottom-text2">
                <ul>
                  <li>02RANK</li>
                  <li>-210급-</li>
                  <li>아카이타</li>
                  <li>127전 59승 68패</li>
                  <li>RP</li>
                  <li>1444</li>
                </ul>
              </div>
              <div className="lank-bottom-text3">
                <ul>
                  <li>03RANK</li>
                  <li>-211급-</li>
                  <li>탑바스커빌</li>
                  <li>183전 96승 87패</li>
                  <li>RP</li>
                  <li>1394</li>
                </ul>
              </div>
              <div className="lank-bottom-text4">
                <ul>
                  <li>04RANK</li>
                  <li>-208급-</li>
                  <li>제크롭</li>
                  <li>135전 81승 54패</li>
                  <li>RP</li>
                  <li>1131</li>
                </ul>
              </div>
              <div className="lank-bottom-text5">
                <ul>
                  <li>05RANK</li>
                  <li>-201급-</li>
                  <li>사도제키엘</li>
                  <li>68전 43승 25패</li>
                  <li>RP</li>
                  <li>1050</li>
                </ul>
              </div>
            </div>
            <span>랭킹 산정기간 : 2019.07.14 기준</span>
          </div>
          <div className="propile">
            <img src="http://www.grinmydesign.com/cypers/images/propile/camiyu.png" alt="까미유" />
            <img
              src="http://www.grinmydesign.com/cypers/images/propile/callos.png"
              alt="카를로스"
            />
            <img
              src="http://www.grinmydesign.com/cypers/images/propile/daimus.png"
              alt="다이무스"
            />
            <img src="http://www.grinmydesign.com/cypers/images/propile/loras.png" alt="로라스" />
            <img src="http://www.grinmydesign.com/cypers/images/propile/matin.png" alt="마틴" />
            <img src="http://www.grinmydesign.com/cypers/images/propile/peter.png" alt="피터" />
            <img src="http://www.grinmydesign.com/cypers/images/propile/lebeca.png" alt="레베카" />
            <img
              src="http://www.grinmydesign.com/cypers/images/propile/hicarudo.png"
              alt="히카르도"
            />
            <img src="http://www.grinmydesign.com/cypers/images/propile/siva.png" alt="시바" />
            <img src="http://www.grinmydesign.com/cypers/images/propile/tara.png" alt="타라" />
            <img src="http://www.grinmydesign.com/cypers/images/propile/tomas.png" alt="토마스" />
            <img src="http://www.grinmydesign.com/cypers/images/tribia.png" alt="트리비아" />
            <div className="propile-wrap">
              <img
                src="http://www.grinmydesign.com/cypers/images/top-arrow.png"
                alt="위쪽 화살표"
              />
              <img
                src="http://www.grinmydesign.com/cypers/images/bottom-arrow.png"
                alt="아래쪽 화살표"
              />
              <div className="propile-ch">
                <div className="propile-ch-l">
                  <img
                    src="http://static.cyphers.co.kr/img/thum/new_thum_char_camille_on.jpg?1944"
                    alt="까미유"
                  />
                  <img
                    src="http://static.cyphers.co.kr/img/thum/new_thum_char_carlos_on.jpg?1944"
                    alt="카를로스"
                  />
                  <img
                    src="http://static.cyphers.co.kr/img/thum/new_thum_char_deimus_on.jpg?1944"
                    alt="다이무스"
                  />
                  <img
                    src="http://static.cyphers.co.kr/img/thum/new_thum_char_loras_on.jpg?1944"
                    alt="로라스"
                  />
                  <img
                    src="http://static.cyphers.co.kr/img/thum/new_thum_char_martin_on.jpg?1944"
                    alt="마틴"
                  />
                  <img
                    src="http://static.cyphers.co.kr/img/thum/new_thum_char_peter_on.jpg?1944"
                    alt="피터"
                  />
                </div>
                <div className="propile-ch-r">
                  <img
                    src="http://static.cyphers.co.kr/img/thum/new_thum_char_rebecca_on.jpg?1944"
                    alt="레베카"
                  />
                  <img
                    src="http://static.cyphers.co.kr/img/thum/new_thum_char_ricardo_on.jpg?1944"
                    alt="히카르도"
                  />
                  <img
                    src="http://static.cyphers.co.kr/img/thum/new_thum_char_shiva_on.jpg?1944"
                    alt="시바"
                  />
                  <img
                    src="http://static.cyphers.co.kr/img/thum/new_thum_char_tara_on.jpg?1944"
                    alt="타라"
                  />
                  <img
                    src="http://static.cyphers.co.kr/img/thum/new_thum_char_thomas_on.jpg?1944"
                    alt="토마스"
                  />
                  <img
                    src="http://static.cyphers.co.kr/img/thum/new_thum_char_trivia_on.jpg?1944"
                    alt="트리비아"
                  />
                </div>
              </div>
            </div>
            <span>캐릭터 전체보기</span>
          </div>
        </div>
        <div className="bottom-text">
          <ul>
            <li>
              <a href="#">보안센터</a>
            </li>
            <li>
              <a href="#">고객센터</a>
            </li>
            <li>
              <a href="#">다운로드</a>
            </li>
            <li>
              <a href="#">쿠폰등록</a>
            </li>
          </ul>
        </div>
      </body>
      <Footer />
    </div>
  );
}

export default MainPage;
