import React from 'react';

function Header() {
  return (
    <div>
      <header>
        <nav>
          <img src="../images/cy_logo.png" alt="사이퍼즈" />
          <div className="wrap">
            <ul>
              <li>
                <a href="#">새소식</a>
              </li>
              <li>
                <a href="#">게임정보</a>
              </li>
              <li>
                <a href="#">이벤트</a>
              </li>
              <li>
                <a href="#">자료실</a>
              </li>
              <li>
                <a href="#">고객센터</a>
              </li>
            </ul>
            <div className="submenu">
              <ul>
                <li>
                  <a href="#">공지사항</a>
                </li>
                <li>
                  <a href="#">업데이트</a>
                </li>
                <li>
                  <a href="#">매거진</a>
                </li>
                <li>
                  <a href="#">이클립스</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">세계관</a>
                </li>
                <li>
                  <a href="#">캐릭터</a>
                </li>
                <li>
                  <a href="#">게임 가이드</a>
                </li>
                <li>
                  <a href="#">아이템 박스</a>
                </li>
              </ul>
              <ul></ul>
              <ul>
                <li>
                  <a href="#">게임설치</a>
                </li>
                <li>
                  <a href="#">동영상 갤러리</a>
                </li>
                <li>
                  <a href="#">이미지 갤러리</a>
                </li>
                <li>
                  <a href="#">보이스 박스</a>
                </li>
                <li>
                  <a href="#">BGM 박스</a>
                </li>
                <li>
                  <a href="#">모바일 앱</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">고객센터홈</a>
                </li>
                <li>
                  <a href="#">문의하기</a>
                </li>
                <li>
                  <a href="#">원격지원</a>
                </li>
                <li>
                  <a href="#">약관 및 정책</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
