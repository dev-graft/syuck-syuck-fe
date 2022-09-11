interface IURL {
    [URL: string]: string;
  }
const URL: IURL = {
  // common
  LOGIN: "/login", // 로그인
  SIGNUP: "/signup", // 회원가입
  MAIN: "/", // 메인 페이지
  RESIDENT: "/resident", // 거주민
  EMPLOYEE: "/employee", // 직원
  SEAT: "/seat", // 좌석예약
  SITE: "/site", // 좌석예약 리스트
  SITE_CREATE: "/site/create", // 좌석예약
  TIMETALBE: "", // 시간표
};
  
export default URL;