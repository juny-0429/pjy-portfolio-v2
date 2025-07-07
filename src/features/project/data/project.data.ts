import GithubIcon from '@/assets/images/logos/github-logo.svg';
import NotionIcon from '@/assets/images/logos/notion-logo.svg';
import FeatherIcons from '@/theme/featherIcons';

import BookForestMain from '@/assets/images/project/book-forest-app.png';
import BookForestLogo from '@/assets/images/project/book-forest-logo.png';
import PjyPortfolio2Main from '@/assets/images/project/pjy-portfolio-v2.png';
import PjyPortfolio2Logo from '@/assets/images/project/pjy-portfolio-v2-logo.jpg';
import CarManagementAppMain from '@/assets/images/project/car-management-app.jpg';
import CarManagementAppLogo from '@/assets/images/project/car-management-app-logo.png';
// import SampleMain from '@/assets/images/project/sample.jpg';
// import SampleLogo from '@/assets/images/project/sample-logo.png';
import RouterAdminMain from '@/assets/images/project/router-admin.png';
import RouterAdminLogo from '@/assets/images/project/router-admin-logo.png';
import ZoneMain from '@/assets/images/project/z-one.png';
import ZoneLogo from '@/assets/images/project/z-one-logo.png';
import XplaMain from '@/assets/images/project/xpla.png';
import XplaLogo from '@/assets/images/project/xpla-logo.png';
import ApartmentManagementAppMain from '@/assets/images/project/apartment-management-app.jpg';
import ApartmentManagementAppLogo from '@/assets/images/project/apartment-management-app-logo.jpg';
// import CocktableMain from '@/assets/images/project/cocktable.jpg';
import PjyPortfolioMain from '@/assets/images/project/pjy-portfolio-v1.png';
import PjyPortfolioLogo from '@/assets/images/project/pjy-portfolio-v1-logo.jpg';
import TheTechTitanMain from '@/assets/images/project/the-titan.jpg';
import TheTechTitanLogo from '@/assets/images/project/the-titan-logo.png';
import SmileInvestMain from '@/assets/images/project/smile-invest.png';
import SmileInvestLogo from '@/assets/images/project/smile-invest-logo.png';

export const projectListData = [
  {
    id: 12,
    title: '책숲 – 도서 커머스 웹 애플리케이션',
    mainImage: BookForestMain,
    logo: BookForestLogo,
    team_en: 'Solo',
    team_ko: '개인',
    date: '25.01 ~ 25.06',
    skills: ['NEXT.js', 'TYPESCRIPT', 'SCSS', 'RECOIL', 'REACTSCROLL', 'FIGMA', 'GITHUB'],
    link: [
      { LinkIcon: FeatherIcons.Monitor, url: '' },
      { LinkIcon: GithubIcon, url: 'https://github.com/juny-0429/book-forest' },
    ],
    member: 1,
    description:
      '책숲(Book Forest)은 다양한 장르의 도서를 소개하고 판매하는 웹 기반 도서 쇼핑몰 애플리케이션입니다. Next.js(App Router)와 Supabase를 활용하여 사용자 인증, 상품 탐색, 장바구니 기능을 구현했습니다.',
    detail: {
      프로젝트목표: [
        '학습과 실무 경험을 통해 CRUD의 개념과 구현 경험은 갖추고 있었지만, 개인 프로젝트에서 이를 직접 설계하고 적용한 사례가 없어, CRUD 전 과정을 스스로 기획하고 구현하는 것을 목표로 삼았습니다.',
        '기존에 학습에만 머물렀던 App Router를 실전 프로젝트에 적용하여, Page Router와 App Router의 차이를 실제적으로 이해하는 것을 목표로 삼았습니다.',
        'Supabase를 활용해 사용자 인증(Auth)과 데이터베이스 연동을 구축하는 경험을 쌓고자 했습니다.',
        'React Query의 편리성과 다양한 기능을 경험하면서, 이번 프로젝트에서는 서버 데이터 패칭과 캐싱 최적화를 적극적으로 활용해 실전 적용 능력을 높이고자 했습니다.',
        'Figma를 통해 설계한 디자인 시스템을 바탕으로, Tailwind CSS를 활용해 빠르고 일관된 스타일로 공통 컴포넌트와 페이지를 구현하는 것을 목표로 했습니다.',
      ],
      나의역할:
        '책숲 프로젝트는 개인 역량 향상을 목표로 혼자 진행한 개인 프로젝트로, 기획부터 디자인, 개발까지 전 과정을 직접 맡아 수행했습니다. Next.js(App Router), Tailwind CSS, Supabase, Zustand 등을 활용해 도서 판매 사이트의 주요 기능(회원가입/로그인, 장바구니, 관리자 페이지, 이미지 업로드 등)을 구현하며 실무 중심의 프론트엔드 개발 경험을 쌓는 데 중점을 두었습니다.',
      이슈및해결과정: [
        'Tailwind CSS를 사용하면서 동적 값으로 클래스를 구성해 스타일을 적용하려 했지만, Tailwind는 빌드 시 클래스명을 정적으로 분석하기 때문에 동적으로 생성한 클래스는 적용되지 않는다는 점을 알게 되었습니다. 이를 해결하기 위해 조건부 스타일은 clsx나 classnames 라이브러리를 사용해 미리 정의된 클래스 조합 안에서 토글되도록 처리했고, 자주 반복되는 스타일은 컴포넌트 단위로 분리해 재사용성을 높였습니다. 이 경험을 통해 Tailwind의 동작 방식과 제약을 이해하게 되었고, 유틸리티 클래스 중심의 개발 방식을 더 익숙하게 다룰 수 있게 되었습니다.',
        '페이지 접근 제어 기능을 미들웨어에서 처리하려 했지만, 인증 상태를 확인하는 과정에서 오류가 발생했습니다. 조사 결과, 미들웨어는 서버에서 실행되기 때문에 클라이언트 측 훅(useUser)이나 브라우저 쿠키에 직접 접근할 수 없다는 점을 알게 되었습니다. 이를 해결하기 위해 Supabase의 createServerClient를 사용하고, cookies 옵션을 명시적으로 설정하여 서버 환경에서도 JWT 인증 토큰을 안전하게 읽을 수 있도록 구성했습니다. 이후 해당 토큰을 기반으로 로그인 여부와 사용자 권한을 판별해 조건에 따라 리다이렉트를 정상적으로 처리할 수 있었습니다.',
        '배너나 상품 데이터를 조회할 때 데이터 양이 많지 않음에도 5~6초 이상 지연되는 문제가 발생했습니다. 원인을 정확히 특정하긴 어려웠지만, 성능 개선을 위해 PostgreSQL 기반의 Supabase에서 쿼리 최적화 방법을 조사했고, 그 과정에서 자주 조회되는 컬럼에 인덱스를 추가하면 성능이 개선된다는 점을 확인했습니다. 실제로 인덱스를 적용하자 조회 속도가 눈에 띄게 빨라졌고, 반복적으로 호출되는 조회 로직은 서버 측에서 필터링 및 정렬이 수행되도록 RPC 함수로 분리하여 클라이언트의 불필요한 처리 비용을 줄였습니다. 이로써 전체적인 응답 속도와 렌더링 성능을 효과적으로 개선할 수 있었습니다.',
      ],
      회고: [
        '이번 프로젝트를 진행하면서 Next.js만 사용한 프론트엔드 구현에 집중한 점이 아쉬웠습니다. API를 통해 데이터를 받아오고, 이를 React Query를 활용하여 효율적으로 연동하는 방식을 적용하지 못한 점이 특히 아쉽습니다. 데이터 관리와 서버 상태 관리를 더욱 효율적으로 처리하기 위해서는 React Query와 같은 도구를 사용하는 것이 필요하다는 점을 깨달았으며, 앞으로 이를 프로젝트에 적용하여 더 나은 사용자 경험과 성능을 제공할 수 있는 프론트엔드 개발을 목표로 하고자 합니다.',
        '이번 프로젝트는 그동안 배웠던 지식과 경험을 바탕으로, 이전 버전인 v1보다 훨씬 더 탄탄하고 기본에 충실한 코드를 작성하는 데 중점을 두었습니다. 특히, 가독성과 유지보수성을 고려한 코드를 작성하려고 노력한 덕분에, v1에서 부족했던 부분들을 보완하고 개선할 수 있었습니다. 이번 작업을 통해 과거에 코드를 작성하던 저의 모습을 되돌아보는 좋은 기회가 되었고, 그때와 비교해 현재의 저의 성장과 발전을 실감할 수 있었습니다. 과거의 실수나 미숙함을 교훈 삼아, 더 나은 코드를 작성하고자 하는 의지를 불태우며, 앞으로도 이런 과정을 통해 꾸준히 발전하는 개발자가 되어야겠다는 다짐을 하게 되었습니다.',
      ],
      동작구현: '',
    },
  },
  {
    id: 11,
    title: 'PJY Portfolio v2',
    mainImage: PjyPortfolio2Main,
    logo: PjyPortfolio2Logo,
    team_en: 'Solo',
    team_ko: '개인',
    date: '24.08 ~ 24.08.09',
    skills: ['NEXT.js', 'TYPESCRIPT', 'SCSS', 'RECOIL', 'REACTSCROLL', 'FIGMA', 'GITHUB'],
    link: [
      { LinkIcon: FeatherIcons.Monitor, url: 'https://pjy-portfolio-v2.vercel.app/' },
      { LinkIcon: GithubIcon, url: 'https://github.com/juny-0429/pjy-portfolio-v2' },
    ],
    member: 1,
    description: 'Next.js Pages Router 기반으로 다크모드, 반응형 UI, 다국어 지원까지 구현한 개인 프론트엔드 실습 프로젝트입니다.',
    detail: {
      프로젝트목표: [
        'Next.js를 활용한 효율적인 웹 애플리케이션 구축',
        '유지보수와 확장성을 고려한 폴더 구조 설계',
        '웹 접근성을 향상시키기 위한 시멘틱 태그 사용',
        '모바일과 PC에서 모두 최적화된 반응형 웹 디자인 구현',
        'Recoil을 사용하여 함수형 드로워, 모달, 다크모드 설정 값 상태 관리',
      ],
      나의역할:
        '이 프로젝트에서 저는 전체 UI 개발과 상태 관리, 반응형 설계, 다국어 지원까지 전반적인 프론트엔드 구현을 주도했습니다. 다크모드, 드로워, 모달 등 인터랙티브한 기능을 Recoil을 통해 전역 상태로 관리하고, 클라이언트 렌더링 시 localStorage에서 사용자 설정 값을 불러오는 커스텀 훅을 구현하여 초기 상태가 자연스럽게 반영되도록 처리했습니다. Emotion을 활용해 다양한 해상도에 대응하는 반응형 스타일을 설계하고, next-i18next 설정과 useTranslation 훅을 활용해 다국어 전환 기능을 직접 구현함으로써 사용자 환경에 최적화된 화면 경험을 완성했습니다.',
      이슈및해결과정: [
        'Next.js의 서버 사이드 렌더링(SSR) 특성 때문에 다크 모드가 실시간으로 제대로 적용되지 않는 문제를 겪었습니다. 로컬 스토리지에 저장된 변경된 값에 따라 스타일이 즉시 반영되지 않고 새로고침을 해야만 반영되는 문제가 발생했습니다. 문제를 해결하기 위해 Recoil을 사용하여 다크 모드 상태를 전역으로 관리하고, useEffect를 통해 클라이언트 측에서 로컬 스토리지의 값을 불러와 초기화하는 훅을 만들었습니다.',
        'Next.js에서 App Router 방식이 아닌 Pages Router 방식으로 다국어 지원을 구현하면서 어려움을 겪었습니다. App Router에서는 상대적으로 쉽게 다국어를 적용할 수 있었지만, Page Router에서는 다국어 지원을 위해 별도의 라이브러리인 next-i18next를 설치하고 설정해야 했습니다. 이를 해결하기 위해, next-i18next 설정 파일을 수정하여 기본 언어를 명확히 지정하고, 각 컴포넌트에서 useTranslation 훅을 사용하여 네임스페이스를 명확하게 불러오도록 하여 번역이 정상적으로 적용되도록 수정 했습니다.',
        '비로그인 시 로컬스토리지에 저장된 장바구니와 로그인 후 DB의 장바구니 데이터가 일치되지 않는 문제가 있었습니다. 이를 해결하기 위해 로그인 시 로컬스토리지의 데이터를 Supabase DB에 병합하고, 이후 로컬스토리지를 초기화하는 방식으로 처리하여 두 저장소 간의 데이터가 자연스럽게 연동되도록 만들었습니다. 이로써 로그인 전후에도 장바구니 상태가 충돌 없이 일관되게 유지되도록 구현했습니다.',
        'Alert, Confirm, Custom 모달을 어떻게 함께 관리할지 고민하다가, 함수형 호출 방식으로 모달을 열고 닫을 수 있도록 설계했습니다. Zustand로 모달 상태를 배열로 관리하면서 각각의 모달을 유연하게 제어할 수 있도록 구현했고, 여러 모달이 동시에 표시돼도 충돌 없이 작동하며, 새로운 모달 타입도 쉽게 추가할 수 있는 구조를 만들었습니다.',
        'Supabase의 기본 인증 테이블인 auth.users는 이메일과 비밀번호 등 최소 정보만을 저장하기 때문에, 사용자 이름, 전화번호 등 추가 정보를 저장하기 위해 별도의 user 테이블을 구성했습니다. 하지만 회원가입 시 두 테이블의 데이터가 동시에 생성되어야 하며, 중간에 하나라도 실패하면 데이터 정합성이 깨지는 문제가 있었습니다. 이를 해결하기 위해 React Query를 통해 회원가입 요청 흐름을 단계적으로 제어하고, auth.users에 사용자 등록 후 반환된 id를 기반으로 user 테이블에 추가 정보를 삽입하는 구조로 구현했습니다. 이후 단계에서 실패할 경우, auth.users 데이터를 삭제하여 두 테이블 간 호환성과 정합성을 유지했습니다. 이 과정에서 인증용 테이블과 사용자 정보 테이블의 역할을 명확히 분리해 확장성과 유지보수성을 확보했습니다.',
      ],
      회고: [
        '이번 프로젝트를 통해 Supabase를 처음 사용해보았고, 프론트엔드 관점에서 쉽게 접근할 수 있다는 점은 만족스러웠지만, 데이터 조회 속도 면에서는 아쉬움이 있었습니다. 특히 데이터 양이 많지 않은 상황에서도 응답 지연이 자주 발생했는데, 이는 쿼리 최적화 부족, 인덱스 미설정, 네트워크 지연 등 여러 요인이 복합적으로 작용한 결과라고 생각합니다. 해당 이슈를 해결하기 위해 PostgreSQL 인덱스 개념을 학습하고 직접 적용해보았으며, RPC를 활용해 서버 측에서 효율적으로 데이터를 처리하는 방식도 도입했습니다. 이번 경험을 통해 단순히 프론트엔드에서 데이터를 불러오는 데 그치지 않고, 백엔드 구조와 쿼리 성능 최적화에 대한 이해도 함께 필요하다는 점을 체감했고, 앞으로는 이러한 부분도 함께 고민할 수 있는 개발자로 성장해야겠다고 느꼈습니다.',
        '이번 프로젝트를 통해 로그인, 비로그인 등 사용자 인증 흐름과 접근 제어에 대한 기본적인 로직을 직접 구현해보며 일부 구조를 이해할 수 있었습니다. 하지만 프론트엔드 개발자로서 여전히 인증 시스템에 대한 깊이 있는 이해가 부족하다는 것을 느꼈고, 특히 JWT 토큰과 리프레시 토큰의 구조와 보안 방식에 대해 더 깊이 있게 학습할 필요성을 크게 느꼈습니다. 앞으로는 프론트엔드 관점뿐 아니라 인증과 세션 관리까지 고려할 수 있는 개발자로 성장하고자 합니다.',
        '이번 프로젝트를 통해 데이터 흐름과 상태 관리의 중요성을 실감했습니다. 특히 로그인 상태에 따라 로컬스토리지와 서버 데이터를 어떻게 일치시킬지, 모달처럼 전역적으로 사용되는 UI 상태를 어떻게 설계하고 유지할지를 고민하며, 단순한 컴포넌트 구현을 넘어서 전체 애플리케이션 구조를 고려하는 관점을 배울 수 있었습니다. 앞으로는 기능 중심 구현뿐 아니라 데이터 일관성과 사용자 흐름까지 고려하는 방향으로 더 성장해 나가고자 합니다.',
      ],
      동작구현: '',
    },
  },
  {
    id: 10,
    title: '무인 기기 관리 페이지',
    mainImage: CarManagementAppMain,
    logo: CarManagementAppLogo,
    team_en: 'Code in Design',
    team_ko: '코드인디자인',
    date: '24.07 ~ 24.08',
    skills: ['REACT', 'TYPESCRIPT', 'EMOTION', 'CHAKRA_UI', 'REACT_QUERY', 'RECOIL', 'FIGMA', 'GITHUB'],
    member: 4,
    description: 'React와 React Query, Google Maps를 사용하여 지도 마커를 통해 지점 관리를 할 수 있는 프로젝트',
    detail: {
      프로젝트목표: 'React와 React Query, Google Maps를 사용하여 지도 마커를 통해 지점 관리를 할 수 있는 프로젝트',
      나의역할: [
        '지점 데이터를 표시하는 테이블을 만들고 필터와 검색 기능을 추가하여 사용자가 원하는 지점을 쉽게 찾을 수 있도록 구현.',
        '일부 페이지 퍼블리싱을 작업과 React Query를 활용하여 API와의 데이터 연동을 구현.',
      ],
      이슈및해결과정:
        '필터와 검색 기능을 사용해 필요한 데이터에 맞는 요청 값을 API로 전송하고, 원하는 데이터만 응답받도록 구현하였습니다. 그러나 실제로 API에 전송되는 요청 값과 쿼리스트링 간의 동기화 문제가 발생했습니다. 이 문제를 useQueryParams를 활용하여 커스텀 훅을 만들어 해결하였습니다.',
      회고: '',
      동작구현: '',
    },
  },
  // {
  //   id: 9,
  //   title: '청년 배관 - 솔라피 연동',
  //   mainImage: SampleMain,
  //   logo: SampleLogo,
  //   team_en: 'Code in Design',
  //   team_ko: '코드인디자인',
  //   date: '24.07 ~ 24.07',
  //   skills: ['SOLAPI', 'NEXT.js', 'FIGMA', 'GITHUB'],
  //   member: 1,
  //   description: '',
  //   detail: {
  //     프로젝트목표: '',
  //     나의역할: '솔라피를 연동하여 고객이 문의하기를 작성할 때, 관리자에게 메시지 알림이 전송되도록 구현하는 것을 목표로 했습니다.',
  //     이슈및해결과정: '',
  //     회고: '솔라피 연동을 통해 API 통합에 대한 깊은 이해를 쌓을 수 있었으며, 예외 처리와 비동기 작업의 중요성을 다시 한 번 체감하게 되었습니다. 프로젝트 전체를 처음부터 수행하지는 않았지만, 해당 연동 부분에서 효율적인 문제 해결 능력을 발휘할 수 있었습니다.',
  //     동작구현: '',
  //   },
  // },
  {
    id: 8,
    title: '연결 장비 통합관리 시스템',
    mainImage: RouterAdminMain,
    logo: RouterAdminLogo,
    team_en: 'Code in Design',
    team_ko: '코드인디자인',
    date: '24.06 ~ 24.08',
    skills: ['VUE', 'TYPESCRIPT', 'SCSS', 'CHART_JS', 'TANSTACK_TABLE', 'VUETIFY', 'PINIA', 'FIGMA', 'GITHUB'],
    member: 2,
    description:
      'Typescript와 Sass(Scss)를 활용한 어드민 페이지 개발 프로젝트로, Pinia와 Tanstack Query를 통한 상태 관리, Vue Router를 사용한 라우팅, Tanstack Table과 Vuetify 기반의 UI 컴포넌트를 적용하여 구현되었습니다.',
    detail: {
      프로젝트목표:
        '이 프로젝트는 특정 기기를 관리할 수 있는 어드민 페이지를 개발하는 것을 목표로 합니다. 관리자는 이 페이지를 통해 기기 상태를 모니터링하고, 데이터를 효율적으로 처리하며, 필요한 페어링 설정을 손쉽게 조정할 수 있습니다.',
      나의역할: ['프로젝트 공용 컴포넌트 구현', 'Table 과 Chart를 포함한 어드민 페이지 전반의 퍼블리싱', '스웨거(Swagger) 문서를 기반으로, Vue Query를 활용한 API 연동 및 데이터 처리 로직 구현'],
      이슈및해결과정: [
        'Vue Query의 setQueryData API를 처음 사용하면서 삭제된 데이터를 캐시에서 제외하거나 변경된 목록으로 즉시 업데이트하는 작업이 어려웠으나, 공식 문서와 예제를 참조해 삭제된 항목을 필터링하고 수정된 데이터를 반영하는 방식으로 캐시를 수동 업데이트하는 방법을 구현하며 해결 하였습니다.',
        'Vue에서 구조분해할당을 사용했을 때, 반응형 객체의 속성이 변경되더라도 Vue가 이를 감지하지 못해 UI 업데이트가 끊기는 문제를 겪었으나, 이를 해결하기 위해 toRefs를 사용하여 구조분해된 속성도 반응성을 유지할 수 있도록 변경했습니다. 이를 통해 Vue의 반응성 시스템이 데이터 변화를 실시간으로 추적하도록 개선했으며, 반응형 객체를 다룰 때 구조분해할당으로 인해 발생할 수 있는 문제와 그 해결 방법에 대해 깊이 이해할 수 있었습니다.',
        'Vue Chart.js 라이브러리 사용 중 테마 커스텀 방식에 어려움을 겪었고, 캔버스 태그로 구성된 차트에서 가로 사이즈 깨짐 현상이 발생했습니다. 이를 리사이징 및 반응형 설정을 최적화하여 해결 하였습니다.',
      ],
      회고: [
        '이번 프로젝트에서는 기존에 라이브러리를 사용해 모달을 구현하던 방식에서 벗어나, 처음으로 함수 형태의 모달을 구현해 보았습니다. 비동기 컴포넌트 로딩과 Pinia를 활용한 전역 상태 관리 방식으로 모달을 관리하는 접근 방식을 도입했습니다. 각 모달에 맞춘 커스텀 훅을 만들어, openModal과 closeModal 함수로 모달을 열고 닫는 로직을 일관되게 유지하며, 동적으로 props를 전달해 다양한 상황에 맞는 모달을 쉽게 재사용할 수 있었습니다. 이러한 구현 방식을 통해 성능 최적화와 코드의 재사용성을 모두 달성할 수 있었으며, 프로젝트 전반에서 모달을 보다 유연하고 효율적으로 관리할 수 있었습니다.',
        '큰 규모의 프로젝트로 Vue를 사용해보았는데, React와 Next.js에 익숙한 저에게 Vue는 새로운 관점에서의 개발 경험을 제공했습니다. Vue는 컴포넌트 기반 아키텍처와 반응형 데이터 바인딩 덕분에 UI 상태 관리를 매우 직관적으로 처리할 수 있었습니다. 특히 템플릿 문법이 간결하고 선언적이라, 빠르게 컴포넌트를 구성하고 로직을 작성할 수 있었던 점이 인상적이었습니다. 하지만 React와 비교 했을 때 생태계가 작아 이슈를 해결하거나 구현 방법을 찾는데 어려움을 겪었습니다.  이번 프로젝트를 통해 Vue의 장단점을 파악할 수 있었고, 앞으로의 개발에서도 Vue를 효율적으로 사용할 수 있을 자신감을 얻게 되었습니다.',
      ],
      동작구현: '',
    },
  },
  {
    id: 7,
    title: 'z-one(체육 대학 합격 예측)',
    mainImage: ZoneMain,
    logo: ZoneLogo,
    team_en: 'Code in Design',
    team_ko: '코드인디자인',
    date: '24.03 ~ 24.05',
    skills: ['NEXT.js', 'RTK', 'AG_GRID', 'CHAKRA_UI', 'STORYBOOK', 'TYPESCRIPT', 'SWIPER', 'FIGMA', 'GITHUB'],
    link: [{ LinkIcon: FeatherIcons.Monitor, url: 'https://z-one.kr/' }],
    member: 3,
    description:
      'Z-ONE 프로젝트는 체육대학 입시에 특화된 정보 제공 및 합격 예측 플랫폼을 개발하는 프로젝트입니다. 입시 데이터 분석을 통해 수집한 정보를 바탕으로, 체육대학 입시를 준비하는 수험생들에게 정확하고 신뢰성 높은 합격 예측을 제공하는 것입니다.',
    detail: {
      프로젝트목표:
        ' 입시 데이터 분석을 통해 수집한 정보를 바탕으로, 체육대학 입시를 준비하는 수험생들에게 정확하고 신뢰성 높은 합격 예측을 제공하는 것입니다. Z-ONE은 수험생들이 각 대학의 모집 요강을 손쉽게 열람할 수 있도록 지원하고, 97.6%의 정확도를 자랑하는 합격 예측 시스템과 국내 최대 체육대학 입시 데이터베이스를 바탕으로 한 통합 솔루션을 제공합니다.',
      나의역할: [
        '선임 개발자와 함께 디자인 시안을 바탕으로 공용 컴포넌트를 설계 및 제작',
        '어드민 페이지의 퍼블리싱을 단독으로 담당하고, 전체 화면 구성 및 스타일 구현',
        '대학 찾기 페이지와 어드민 페이지의 API 연동 작업 전반을 전담',
        '필터 항목이 많은 검색 페이지에서 필터 데이터를 쿼리스트링과 동기화하고, 이에 맞는 API 요청 구조를 설계',
        '사내 보일러플레이트 구조를 빠르게 이해하고,, 선임 개발자의 코드 리뷰를 바탕으로 사내 컨벤션에 맞춰 작업 수행',
      ],
      이슈및해결과정: [
        '필터를 적용해 API 요청을 보내는 과정에서 대량의 필터 데이터를 다루는 문제가 발생했습니다. 필터 항목이 많아지고 데이터가 복잡해지면서, 요청을 효율적으로 처리하는 데 어려움을 겪었습니다. 이를 해결하기 위해 처음으로 useReactForm을 사용하여 필터 데이터를 관리하고, useQueryParams를 통해 쿼리스트링을 동기화한 후 API 요청을 보내는 방식을 선택했습니다. 하지만 useReactForm을 처음 사용하다 보니 필터 데이터의 속성 추가와 입력 데이터 관리에 있어 어려움이 있었고, 이 데이터를 변환하여 쿼리스트링에 등록하고 API 요청 파라미터로 보내는 과정에서도 많은 시행착오가 있었습니다. 특히, 쿼리스트링과 API 요청 파라미터 값이 일치하지 않아 발생하는 동기화 문제를 해결하는 데 시간이 걸렸습니다. 이를 해결하기 위해 필터 데이터를 일관성 있게 관리하는 커스텀 훅을 작성하여 쿼리스트링과 API 요청 간의 동기화를 맞추는 데 성공 3했습니다. 이 과정에서 새로운 라이브러리를 활용한 데이터 처리와 API 요청 관리 방법에 대한 깊은 이해를 쌓을 수 있었습니다.',
        '입사 후 처음으로 진행한 팀 프로젝트였기 때문에, 기존에 설계된 프로젝트 구조에 적응하고 사내 컨벤션에 맞춰 코드를 작성하는 데 시간이 걸렸습니다. 이를 해결하기 위해 선임 개발자에게 지속적으로 질문하며 배우고, 퇴근 후에는 다른 프로젝트와 비교하며 회사의 프로젝트 구조를 익혀나갔습니다.',
      ],
      회고: '이번 프로젝트는 입사 후 처음으로 진행한 팀 프로젝트였습니다. 처음 맡은 팀 프로젝트인 만큼 기존에 설계된 프로젝트 구조와 사내 컨벤션에 적응하는 데 시간이 걸렸습니다. 프로젝트를 진행하면서 선임 개발자에게 PR 리뷰를 받으며 코드의 부족한 부분에 대해 지적받았고, 이를 통해 실시간으로 학습하며 개선해 나갔습니다. 특히, Next.js를 경험하면서 SSR, 폴더 구조 등 다양한 측면에서 많은 것을 배울 수 있었습니다. 주요 이슈는 필터 기능을 적용해 대량의 데이터를 API 요청에 맞게 처리하는 과정에서 발생했습니다. 필터 항목이 많아지면서 이를 쿼리스트링에 동기화하고 API 요청 파라미터로 변환하는 과정에서 어려움을 겪었습니다. 처음으로 useReactForm과 useQueryParams를 사용해 필터 데이터를 관리하고, 이를 기반으로 커스텀 훅을 작성해 API 요청과 쿼리스트링 간의 동기화 문제를 해결했습니다. 이 과정에서 속성 추가 및 데이터 관리에서 시행착오가 있었지만, 문제를 해결하면서 데이터 처리와 API 통신에 대한 이해도를 크게 높일 수 있었습니다. 처음엔 낯설고 어려운 점이 많았지만, 선임 개발자와의 협업과 학습을 통해 프로젝트 전반에 대한 자신감을 키울 수 있었고, 이를 통해 데이터 관리, 동기화, Next.js 활용 능력 등에서 한 단계 성장할 수 있는 계기가 되었습니다.',
      동작구현: '',
    },
  },
  {
    id: 6,
    title: 'Xpla - 다국어 작업, 일부 퍼블리싱',
    mainImage: XplaMain,
    logo: XplaLogo,
    team_en: 'Code in Design',
    team_ko: '코드인디자인',
    date: '24.02 ~ 24.02',
    skills: ['NEXT.js', 'FIGMA', 'GITHUB'],
    link: [{ LinkIcon: FeatherIcons.Monitor, url: 'https://www.xpla.io/en' }],
    member: 1,
    description: '',
    detail: {
      프로젝트목표:
        'Next.js의 app router 방식을 사용하여 다국어 기능을 추가하는 것을 목표로 했습니다. 이를 통해 다양한 언어를 사용하는 사용자에게 보다 친숙하고 접근성 높은 웹사이트를 제공하는 것이 주된 목표 였습니다.',
      나의역할: ['프로젝트 내 i18next를 활용한 다국어 지원 추가 및 언어 선택에 따른 콘텐츠 변경', '일부 페이지 퍼블리싱 구현 및 수정'],
      이슈및해결과정: '',
      회고: '',
      동작구현: '',
    },
  },
  {
    id: 5,
    title: '입주민 대상 아파트 생활 서비스 (모바일 화면 퍼블리싱)',
    mainImage: ApartmentManagementAppMain,
    logo: ApartmentManagementAppLogo,
    team_en: 'Code in Design',
    team_ko: '코드인디자인',
    date: '23.12 ~ 24.02',
    skills: ['VUE', 'STORYBOOK', 'FIGMA', 'GITHUB'],
    member: 1,
    description: '아파트 관리 정보를 위한 모바일 앱 화면 퍼블리싱 프로젝트 입니다.',
    detail: {
      프로젝트목표:
        'Vue 3의 Composition API를 활용하여, 입주민 대상 아파트 생활 서비스를 위한 모바일 전용 UI를 퍼블리싱한 프로젝트입니다. 반응형 디자인과 컴포넌트 기반 설계를 적용해 모바일 환경에서의 사용성과 유지보수성을 모두 고려하였습니다.',
      나의역할: [
        'Vue 3 프로젝트 초기 설정 및 Composition API 기반 컴포넌트 구조 구성',
        '재사용성과 반응형 레이아웃을 고려한 모바일 전용 UI 퍼블리싱 수행',
        'Storybook을 도입하여 개발 중인 컴포넌트의 UI 상태를 시각적으로 관리',
      ],
      이슈및해결과정: [
        '이번 프로젝트는 Vue를 처음 접해보며 진행한 첫 Vue 프로젝트였습니다. 익숙하지 않은 Vue의 문법과 생태계에 적응하는 과정에서 많은 시행착오를 겪었으며, 특히 React와 다른 props 처리 방식에 익숙해지는 데 어려움을 느꼈습니다.',
        '프로젝트 초기 설계 단계에서 유지보수성과 확장성을 고려한 폴더 구조를 어떻게 설계할지 고민이 많았습니다. 다양한 자료를 참고하며 적합한 구조를 찾기 위해 많은 시간을 투자했습니다.',
        '초기에 시멘틱 태그를 제대로 적용하지 않아 웹 접근성 측면에서 부족함이 있었습니다. 이후 시멘틱 태그의 중요성을 인식하고 관련 내용을 학습한 후 프로젝트 전반에 걸쳐 태그를 수정하였으며, 이로 인해 불필요한 시간이 소요된 부분이 있었습니다.',
      ],
      회고: `Vue 3를 처음으로 본격적으로 다뤄본 프로젝트로, React에 익숙한 상태에서 Vue만의 구조와 문법에 적응해가는 과정을 직접 겪으며 성장할 수 있는 계기가 되었습니다.
특히 Composition API를 활용하면서 Vue의 선언적 구조와 반응성 설계 방식에 대해 실제로 체득할 수 있었으며, 초기의 시행착오를 통해 문서 기반 학습과 빠른 적용 사이의 균형을 잡는 법을 익혔습니다.
시멘틱 태그, 폴더 구조, 접근성 같은 프론트엔드 개발자로서의 기본기에 대해 다시 한 번 중요성을 느낀 프로젝트였습니다. 실무에서의 실수와 수정 과정을 통해, 기본을 놓치지 않는 습관이 얼마나 중요한지를 몸소 체감할 수 있었습니다.
Vue 관련 자료가 제한적이었던 상황 속에서도, 스스로 문제를 정의하고 해답을 찾아가는 문제 해결력을 기를 수 있었던 의미 있는 경험이었습니다.`,
      동작구현: '',
    },
  },
  // {
  //   id: 4,
  //   title: '[임시 중단] Cocktable(칵테일 테이블오더 앱)',
  //   mainImage: CocktableMain,
  //   logo: '',
  //   team_en: 'Solo',
  //   team_ko: '개인',
  //   date: '23.8.30 ~',
  //   skills: ['TYPESCRIPT', 'REACT', 'SPRING', 'JPA', 'RESTful', 'ORACLE', 'GITHUB'],
  //   link: [
  //     { LinkIcon: GithubIcon, url: 'https://github.com/Green-0lives' },
  //     { LinkIcon: NotionIcon, url: 'https://juny0429.notion.site/Cocktable-App-b6ae5d9ad1454ae585b6bfae56f6fdcb?pvs=4' },
  //   ],
  //   member: 7,
  //   description:
  //     '기존의 칵테일 주문 방식은 메뉴판을 봐도 어떤 맛일지 상상하기 어려웠고, 맛을 잘 모르는 칵테일에 경우 실망하기도 했습니다. 커스텀 기능을 통해 나만의 칵테일을 주문하고, 손님들은 예상치 못한 맛이 아닌, 자신의 입맛에 딱 맞는 칵테일을 즐길 수 있게 될 것입니다.',
  //   detail: {
  //     프로젝트목표: '고객이 메뉴 선택에서 오는 불확실성을 줄이고, 맞춤형 칵테일을 통해 고객 만족도를 높이는 것을 목표로 합니다.',
  //     나의역할: '프론트엔드와 백엔드 개발 전반을 담당하며, 주요 기능 설계와 구현, 그리고 데이터베이스 설계 및 관리까지 맡았습니다.',
  //     이슈및해결과정: '칵테일의 맛과 특징을 사용자가 쉽게 이해할 수 있도록 UI/UX를 구성하는 데 많은 어려움이 있었습니다. 또한, 실시간 주문 처리와 데이터 동기화 문제도 해결해야 했습니다.',
  //     회고: '사용자의 입장에서 생각하고, 최대한 직관적인 인터페이스를 제공하는 것이 중요함을 느꼈습니다. 기술적인 어려움도 많았지만, 이를 해결하며 많은 성장을 이뤘습니다.',
  //     동작구현: '주요 기능으로는 칵테일 추천 알고리즘, 주문 내역 실시간 확인, 사용자 리뷰 시스템 등이 있습니다. React로 프론트엔드를 구성하고, Spring과 JPA로 백엔드를 개발했습니다.',
  //   },
  // },
  {
    id: 3,
    title: 'PJY Portfolio v1',
    mainImage: PjyPortfolioMain,
    logo: PjyPortfolioLogo,
    team_en: 'Solo',
    team_ko: '개인',
    date: '23.03 ~ 23.04',
    skills: ['REACT', 'SCSS', 'FIGMA', 'GITHUB'],
    link: [
      { LinkIcon: FeatherIcons.Monitor, url: 'https://github.com/juny0429/pjy-portfolio' },
      { LinkIcon: GithubIcon, url: 'https://github.com/juny-0429/pjy-portfolio-v1' },
    ],
    member: 7,
    description: '반려동물을 주제로 한 클라우드 펀딩 프로젝트입니다. 스프링부트와 마이바티스를 활용한 MVC Model2 기반으로 구현 했습니다.',
    detail: {
      프로젝트소개: '칵테일 주문을 간편하게 하고, 고객이 자신의 취향에 맞는 칵테일을 쉽게 찾을 수 있도록 돕는 애플리케이션입니다.',
      프로젝트목표: '고객이 메뉴 선택에서 오는 불확실성을 줄이고, 맞춤형 칵테일을 통해 고객 만족도를 높이는 것을 목표로 합니다.',
      나의역할: '프론트엔드와 백엔드 개발 전반을 담당하며, 주요 기능 설계와 구현, 그리고 데이터베이스 설계 및 관리까지 맡았습니다.',
      이슈및해결과정: '칵테일의 맛과 특징을 사용자가 쉽게 이해할 수 있도록 UI/UX를 구성하는 데 많은 어려움이 있었습니다. 또한, 실시간 주문 처리와 데이터 동기화 문제도 해결해야 했습니다.',
      회고: '사용자의 입장에서 생각하고, 최대한 직관적인 인터페이스를 제공하는 것이 중요함을 느꼈습니다. 기술적인 어려움도 많았지만, 이를 해결하며 많은 성장을 이뤘습니다.',
      동작구현: '주요 기능으로는 칵테일 추천 알고리즘, 주문 내역 실시간 확인, 사용자 리뷰 시스템 등이 있습니다. React로 프론트엔드를 구성하고, Spring과 JPA로 백엔드를 개발했습니다.',
    },
  },
  {
    id: 2,
    title: 'The Tech Titan (인사관리 그룹웨어 애플리케이션)',
    mainImage: TheTechTitanMain,
    logo: TheTechTitanLogo,
    team_en: 'Himedia Academy',
    team_ko: '하이디미어 학원',
    date: '23.01 ~ 23.03',
    skills: ['REACT', 'HTML', 'CSS', 'JAVA', 'SPRING', 'RESTful', 'ORACLE', 'MUI', 'FIGMA', 'GITHUB'],
    link: [
      { LinkIcon: GithubIcon, url: 'https://github.com/2TeamHR' },
      { LinkIcon: NotionIcon, url: 'https://juny0429.notion.site/2-HOT6-87a66064580d498285c07ac16cf378e7?pvs=4' },
    ],
    member: 1,
    description: '인사관리 그룹웨어를 주제로한 프로젝트입니다. 스프링부트 기반의 RestAPI 서버를 연동한 React.js SPA 애플리케이션이 특징입니다.',
    detail: {
      프로젝트소개: '칵테일 주문을 간편하게 하고, 고객이 자신의 취향에 맞는 칵테일을 쉽게 찾을 수 있도록 돕는 애플리케이션입니다.',
      프로젝트목표: '고객이 메뉴 선택에서 오는 불확실성을 줄이고, 맞춤형 칵테일을 통해 고객 만족도를 높이는 것을 목표로 합니다.',
      나의역할: '프론트엔드와 백엔드 개발 전반을 담당하며, 주요 기능 설계와 구현, 그리고 데이터베이스 설계 및 관리까지 맡았습니다.',
      이슈및해결과정: '칵테일의 맛과 특징을 사용자가 쉽게 이해할 수 있도록 UI/UX를 구성하는 데 많은 어려움이 있었습니다. 또한, 실시간 주문 처리와 데이터 동기화 문제도 해결해야 했습니다.',
      회고: '사용자의 입장에서 생각하고, 최대한 직관적인 인터페이스를 제공하는 것이 중요함을 느꼈습니다. 기술적인 어려움도 많았지만, 이를 해결하며 많은 성장을 이뤘습니다.',
      동작구현: '주요 기능으로는 칵테일 추천 알고리즘, 주문 내역 실시간 확인, 사용자 리뷰 시스템 등이 있습니다. React로 프론트엔드를 구성하고, Spring과 JPA로 백엔드를 개발했습니다.',
    },
  },
  {
    id: 1,
    title: 'SMILE INVEST(크라우드 펀딩 사이트)',
    mainImage: SmileInvestMain,
    logo: SmileInvestLogo,
    team_en: 'Himedia Academy',
    team_ko: '하이디미어 학원',
    date: '22.12 ~ 23.01',
    skills: ['REACT', 'HTML', 'CSS'],
    link: [
      { LinkIcon: GithubIcon, url: 'https://github.com/smile-invest/smile-invest' },
      { LinkIcon: NotionIcon, url: 'https://juny0429.notion.site/4-feat-2b4d78de7c1b497da8e1ddd4be91e8b3?pvs=4' },
    ],
    member: 7,
    description: '반려동물을 주제로 한 클라우드 펀딩 프로젝트입니다. 스프링부트와 마이바티스를 활용한 MVC Model2 기반으로 구현 했습니다.',
    detail: {
      프로젝트소개: '칵테일 주문을 간편하게 하고, 고객이 자신의 취향에 맞는 칵테일을 쉽게 찾을 수 있도록 돕는 애플리케이션입니다.',
      프로젝트목표: '고객이 메뉴 선택에서 오는 불확실성을 줄이고, 맞춤형 칵테일을 통해 고객 만족도를 높이는 것을 목표로 합니다.',
      나의역할: '프론트엔드와 백엔드 개발 전반을 담당하며, 주요 기능 설계와 구현, 그리고 데이터베이스 설계 및 관리까지 맡았습니다.',
      이슈및해결과정: '칵테일의 맛과 특징을 사용자가 쉽게 이해할 수 있도록 UI/UX를 구성하는 데 많은 어려움이 있었습니다. 또한, 실시간 주문 처리와 데이터 동기화 문제도 해결해야 했습니다.',
      회고: '사용자의 입장에서 생각하고, 최대한 직관적인 인터페이스를 제공하는 것이 중요함을 느꼈습니다. 기술적인 어려움도 많았지만, 이를 해결하며 많은 성장을 이뤘습니다.',
      동작구현: '주요 기능으로는 칵테일 추천 알고리즘, 주문 내역 실시간 확인, 사용자 리뷰 시스템 등이 있습니다. React로 프론트엔드를 구성하고, Spring과 JPA로 백엔드를 개발했습니다.',
    },
  },
];
