# youtube-app

## 시작하기

레포지토리를 clone 혹은 다운로드 후, 아래 명령어로 필요한 툴들을 설치한다.

```bash
yarn install
```

서버를 구동시키고, 결과물을 [http://localhost:3000](http://localhost:3000)에서 확인한다.

```bash
yarn start
```

## 구현 사항

- Youtube Data API v3 이용하여 화면 구현
- 모바일 반응형 디자인 구현 
- SVG 파일 내 색상 등 최적화   
- 컴포넌트 재사용성 고려한 구조   
- flex를 사용한 레이아웃 구성
- 모달 애니메이션 효과 적용
- api key 외부노출 방지를 위한 환경 변수 처리
- 호출 할당량 초과 시 토스트 알럿 구현
 
## 사용한 주요 툴

- react : 17.0.2
- typescript : 4.4.3
- react-router-dom : 5.3.0
- redux: 4.1.1
- emotion/css: 11.1.3
- emotion/react: 11.4.1
- emotion/styled: 11.3.0
- reduxjs/toolkit: 1.6.1
  상태관리 라이브러리로 action과 reducer를 한 번에 정의할 수 있고 Immer가 내장되어 있는 redux-toolkit 사용
- qs : 6.10.1
  API 통신 시 파라미터 객체를 쿼리 문자열변환하기 위해 사용

## 폴더 구조

```sh
src
 ├─ component
 │     ├─ common
 │     │     ├─ DefaultNoResult
 │     │     ├─ Loader
 │     │     ├─ SearchBar
 │     │     └─ button
 │     │          ├─ Button
 │     │          ├─ FilterButton
 │     │          ├─ LoadMoreButton
 │     │          └─ ShuffleButton
 │     ├─ home
 │     │     ├─ CompactVideoClip
 │     │     ├─ Player
 │     │     ├─ Playlist
 │     │     └─ SearchResult
 │     ├─ icons
 │     │     ├─ CloseIcon
 │     │     ├─ FilterIcon
 │     │     ├─ HeartIcon
 │     │     ├─ SearchIcon
 │     │     └─ ShuffleIcon
 │     ├─ Layout
 │     │     └─ index
 │     ├─ modals
 │     │     ├─ ApplyModal
 │     │     ├─ content  -- Filters
 │     │     ├─ Toast
 │     │     ├─ ModalWrapper
 │     │     └─ ModalController
 │     └─ page
 │           └─ HomePage
 ├─ constants
 │     ├─ filter
 │     ├─ localStorage
 │     ├─ modal
 │     └─ search
 ├─ hook : 기능 단위로 로직을 모은 custom hook을 생성
 │     ├─ dom - useBodyScrollLockEffect, useModalBackground : 모달을 위한 hook
 │     ├─ useGetFilter : 정렬 필터 기능을 위한 hook
 │     ├─ useGetLikeVideo : 좋아요 기능을 위한 hook
 │     ├─ useGetPlaylist : 재생 목록을 받아오고 재생 영상을 선택하는 hook
 │     ├─ useGetShuffle : 셔플 기능을 위한 hook
 │     ├─ useLoadFrameApi : 코인정보 모달을 위한 hook
 │     └─ useYoutubeApi : IFrame Player API 사용가능한 IFrame을 위한 hook
 ├─ model
 │     └─ youtube
 ├─ features
 │     └─ youtube - youtubeSlice
 ├─ reducer
 │     └─ index
 ├─ selector
 │     ├─ index
 │     └─ youtube
 ├─ store
 │     └─ store
 ├─ styles
 │     ├─ colors
 │     ├─ fonts
 │     ├─ layout
 │     ├─ GlobalStyle
 │     └─ ZIndex
 └─ utils
       ├─ api
       ├─ localStorage
       └─ ModalHandler
```

## 코드 스타일

- 컴포넌트의 스타일이 2개 이하이면 하나의 파일로 작성한다.
  - `Compoent.tsx`
- 컴포넌트의 스타일이 3개 이상이면 스타일 파일을 분리하여 컴포넌트 폴더를 사용한다.
  - `Component/index.tsx`, `Component/styles.ts`
- 컴포넌트는 대문자로 시작한다.
  - `Component.tsx` (O)
  - `component.tsx` (X)
- 비슷한 컴포넌트들은 한폴더에 묶어서 사용하되, 그 폴더 이름은 소문자로 사용한다.
  - `home/Player.tsx`
  - `home/Playlist.tsx`
