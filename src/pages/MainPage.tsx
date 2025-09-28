import React, { useState } from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';

const MainPage: React.FC = () => {
  const [rankingIndex, setRankingIndex] = useState<number>(0);
  const [profileIndex, setProfileIndex] = useState<number>(0);

  type RankTextsType = {
    [key: string]: string[];
  };

  const rankTexts: RankTextsType[] = [
    {
      bottomText1: ['01RANK', '-212급-', '훈스탠', '113전 72승 41패', 'RP', '1460'],
      bottomText2: ['02RANK', '-210급-', '아카이타', '127전 59승 68패', 'RP', '1444'],
      bottomText3: ['03RANK', '-211급-', '탑바스커빌', '183전 96승 87패', 'RP', '1394'],
      bottomText4: ['04RANK', '-208급-', '제크롭', '135전 81승 54패', 'RP', '1131'],
      bottomText5: ['05RANK', '-201급-', '사도제키엘', '68전 43승 25패', 'RP', '1050'],
    },
    {
      bottomText1: ['01RANK', '-207급-', '짱아', '그린아카데미', '', '2870'],
      bottomText2: ['02RANK', '-120급-', '짱구', '그린아카데미2', '', '2850'],
      bottomText3: ['03RANK', '-100급-', '엄마', '그린아카데미3', '', '2750'],
      bottomText4: ['04RANK', '-97급-', '아빠', '그린아카데미4', '', '2620'],
      bottomText5: ['05RANK', '-95급-', '흰둥이', '그린아카데미5', '', '2540'],
    },
    {
      bottomText1: ['01RANK', '-95급-', '티엔', '매일수련중', '', '3022'],
      bottomText2: ['02RANK', '-109급-', '하랑', '매일튀는중', '', '2974'],
      bottomText3: ['03RANK', '-98급-', '엘리', '성냥다내꼬야', '', '2967'],
      bottomText4: ['04RANK', '-103급-', '샬럿', '비구름을그릴게요', '', '2966'],
      bottomText5: ['05RANK', '-95급-', '마를렌', '큰거야', '', '2964'],
    },
    {
      bottomText1: ['01RANK', '-56급-', '피터', '염동력의힘', '승리수', '468승'],
      bottomText2: ['02RANK', '-107급-', '카를로스', '선백라이징후판단', '승리수', '457승'],
      bottomText3: ['03RANK', '-112급-', '빅터', '손가락그만튕겨', '승리수', '449승'],
      bottomText4: ['04RANK', '-113급-', '아이작', '이쓰레기가', '승리수', '442승'],
      bottomText5: ['05RANK', '-107급-', '제키엘', '사이버교주', '승리수', '440승'],
    },
    {
      bottomText1: ['01RANK', '-135급-', '이글', '백수가 제일이야', '누적 CP', '1,033,455'],
      bottomText2: ['02RANK', '-109급-', '토마스', '매일알바중', '누적 CP', '841,254'],
      bottomText3: ['03RANK', '-120급-', '타라', '다불태워버릴거야', '누적 CP', '832,087'],
      bottomText4: ['04RANK', '-103급-', '루이스', '아무도죽게하지않겠어', '누적 CP', '757,810'],
      bottomText5: ['05RANK', '-97급-', '다이무스', '이글일해라', '', '725,184'],
    },
  ];

  const onRankingClick = (index: number): void => {
    setRankingIndex(index);
  };

  const profileImages: string[] = [
    '/images/propile/camiyu.png',
    '/images/propile/callos.png',
    '/images/propile/daimus.png',
    '/images/propile/loras.png',
    '/images/propile/matin.png',
    '/images/propile/peter.png',
    '/images/propile/lebeca.png',
    '/images/propile/hicarudo.png',
    '/images/propile/siva.png',
    '/images/propile/tara.png',
    '/images/propile/tomas.png',
    '/images/tribia.png',
  ];

  return (
    <div>
      <Header />
      <Banner />
      <div>
        <div className="start">
          <div className="start-l">
            <div className="start-l-wrap">
              <img src="/images/cy_logo.png" alt="사이퍼즈로고" />
              <a href="#">사이퍼즈</a>
              <img src="/images/nexon_logo.png" alt="넥슨로고" />
              <a href="#">넥슨</a>
              <img src="/images/dp_logo.png" alt="던파" />
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
            <img src="/images/angae.png" alt="안개정제소" />
          </a>
        </div>

        <div className="bottom">
          <div className="news">
            <div className="box1">
              <img src="/images/cy_icon1.png" alt="메인아이콘" />
              <span>공지사항</span>
              <img src="/images/add-plus-button.png" alt="더보기" />
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
              </ul>
            </div>
            <div className="box2">
              <img src="/images/cy_icon1.png" alt="" />
              <span>업데이트</span>
              <img src="/images/add-plus-button.png" alt="더보기" />
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
              </ul>
            </div>
            <a href="#" className="box3">
              <img src="/images/meg.png" alt="매거진" />
            </a>
          </div>
          <div className="bannerbox">
            <a href="#" className="banner-box">
              <p>사이퍼즈 멤버십 서비스</p>
            </a>
            <a href="#" className="banner-box">
              <p>초보자&amp;귀환자 능력자님 혜택</p>
            </a>
            <a href="#" className="banner-box">
              <p>PC방 프리미엄 헤택안내</p>
            </a>
          </div>
        </div>

        <div className="bottombox">
          <div className="search">
            <div className="search-wrap">
              <img src="/images/cy_icon2.png" alt="아이콘2" />
              <span>전적검색</span>
              <div className="search_box1">
                <input type="text" />
                <img src="/images/magnifying-glass.png" alt="검색" />
              </div>
              <img src="/images/cy_icon2.png" alt="아이콘2" />
              <span>전체검색</span>
              <div className="search_box2">
                <input type="text" />
                <img src="/images/magnifying-glass.png" alt="검색" />
              </div>
            </div>
          </div>

          <div className="lank">
            <div className="lank-top">
              <img src="/images/tit_rank_total.png" alt="랭킹아이콘" />
              <ul>
                {['투신전', '캐릭터랭킹', '통합랭킹', '기록실', '클랜랭킹'].map(
                  (text: string, idx: number): JSX.Element => (
                    <li key={idx}>
                      <a
                        href="#"
                        className={rankingIndex === idx ? 'active' : ''}
                        onClick={(e): void => {
                          e.preventDefault();
                          onRankingClick(idx);
                        }}
                      >
                        {text}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="lank-bottom">
              {[1, 2, 3, 4, 5].map(
                (num: number): JSX.Element => (
                  <div key={num} className={`lank-bottom-text${num}`}>
                    <ul>
                      {rankTexts[rankingIndex][`bottomText${num}`].map(
                        (txt: string, idx: number): JSX.Element => (
                          <li key={idx}>{txt || (idx === 4 && rankingIndex !== 3 ? 'RP' : '')}</li>
                        ),
                      )}
                    </ul>
                  </div>
                ),
              )}
            </div>
            <span>랭킹 산정기간 : 2019.07.14 기준</span>
          </div>

          <div className="propile">
            {profileImages.map((src: string, idx: number) => (
              <img
                className="proprileImg"
                key={idx}
                src={src}
                style={{ display: idx === profileIndex ? 'block' : 'none' }}
              />
            ))}

            <div className="propile-wrap">
              <div className="progile-wrap-arrow">
                <img src="/images/top-arrow.png" alt="위쪽 화살표" />
              </div>

              <div className="propile-ch">
                <div className="propile-ch-l">
                  {[
                    'images/ch/new_thum_char_camille_off.jpg',
                    'images/ch/new_thum_char_carlos_off.jpg',
                    'images/ch/new_thum_char_deimus_off.jpg',
                    'images/ch/new_thum_char_loras_off.jpg',
                    'images/ch/new_thum_char_martin_off.jpg',
                    'images/ch/new_thum_char_peter_off.jpg',
                  ].map((thumbSrc, i) => (
                    <img
                      className=".swiper-container .swiper-slide"
                      key={i}
                      src={thumbSrc}
                      alt=""
                      style={{ cursor: 'pointer' }}
                      onClick={() => setProfileIndex(i)}
                    />
                  ))}
                </div>

                <div className="propile-ch-r">
                  {[
                    'images/ch/new_thum_char_rebecca_off.jpg',
                    'images/ch/new_thum_char_ricardo_off.jpg',
                    'images/ch/new_thum_char_shiva_off.jpg',
                    'images/ch/new_thum_char_tara_off.jpg',
                    'images/ch/new_thum_char_thomas_off.jpg',
                    'images/ch/new_thum_char_trivia_off.jpg',
                  ].map((thumbSrc, i) => {
                    const index = i + 6;
                    return (
                      <img
                        key={index}
                        src={thumbSrc}
                        alt=""
                        style={{ cursor: 'pointer' }}
                        onClick={() => setProfileIndex(index)}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="progile-wrap-arrow">
                <img src="/images/bottom-arrow.png" alt="아래쪽 화살표" />
              </div>
            </div>

            <span>캐릭터 전체보기</span>
            <div className="propile-ch-imgs">
              {profileImages.map((src: string, idx: number) => (
                <img
                  key={idx}
                  src={src}
                  alt=""
                  onClick={(): void => setProfileIndex(idx)}
                  style={{ cursor: 'pointer' }}
                />
              ))}
            </div>
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
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
