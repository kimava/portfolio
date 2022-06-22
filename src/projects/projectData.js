export const ProjectItems = [
  {
    title: 'Book Log',
    desc: `기존 팀 프로젝트로 진행했던 것을 리팩토링한 프로젝트입니다. 유저가 원하는 책을 검색하고 마이리스트에 추가한 뒤, 독서 상태, 평점, 메모를 업데이트하고 관리할 수 있는 앱입니다.
    Firebase Auth를 이용해 Google/Github 계정으로 로그인 하기와 탈퇴 기능을 구현했습니다.
    리팩토링 과정에서 Context API, 재사용 가능한 컴포넌트의 중요성 등에 대해 학습했습니다.
    실제 유저 피드백을 받아 기능을 개선하고 있습니다.
    `,
    thumnail: 'booklog',
    stack: [
      'React',
      'Styled Components',
      'Google Books API',
      'Firebase Auth',
      'Firebase Realtime DB',
      'Axios',
    ],
    gitLink: `https://github.com/kimava/v32-toucans-team-02`,
    projectLink: `https://ava-booklog.netlify.app/`,
    blogLink: `https://velog.io/@avakim/Search-Page-Context-API-%EC%82%AC%EC%9A%A9%EC%9D%98-%EC%9E%98%EB%AA%BB%EB%90%9C-%EC%98%88`,
  },

  {
    title: 'Journal',
    desc: `
    일기장에 일기 쓰기가 귀찮은 날, 간단하게 기록을 남기려고 만든 일기 앱입니다.
    이전 프로젝트에서 Google/Github provider만 이용했던 것과 달리, 이메일 계정으로 회원가입 및 로그인, P/W reset 기능을 추가했습니다. 
    Redux를 이용한 상태 관리, Redux-thunk로 비동기 처리하기 등을 배울 수 있었습니다. 
    `,
    thumnail: 'journal',
    stack: [
      'React',
      'Redux',
      'Styled Components',
      'Firebase Auth',
      'Firebase Realtime DB',
    ],
    gitLink: `https://github.com/kimava/journal`,
    projectLink: `https://avajournal.netlify.app/`,
    blogLink: `https://velog.io/@avakim/Firebase-Realtime-DB%EC%97%90%EC%84%9C-%EC%9D%BD%EC%96%B4-%EC%98%A8-%EB%8D%B0%EC%9D%B4%ED%84%B0-Redux-store%EC%97%90-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8-%ED%95%98%EA%B8%B0-Redux-thunk-%EC%9D%B4%EC%9A%A9`,
  },
];
