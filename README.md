# More Burger_FE

### 버전 정보(package.json 발췌)
    "@emotion/cache": "^11.11.0",
    "@emotion/react": "^11.11.3",
    "@emotion/styled": "^11.11.0",
    "@fontsource/inter": "^5.0.16",
    "@fontsource/poppins": "^5.0.8",
    "@fontsource/roboto": "^5.0.8",
    "@mui/icons-material": "^5.15.10",
    "@mui/lab": "^5.0.0-alpha.165",
    "@mui/material": "^5.15.10",
    "@mui/system": "^5.15.9",
    "@mui/utils": "^5.15.11",
    "@reduxjs/toolkit": "^2.2.1",
    "@tabler/icons-react": "^2.47.0",
    "@vitejs/plugin-react": "^4.2.1",
    "apexcharts": "^3.46.2",
    "env-cmd": "^10.1.0",
    "formik": "^2.4.5",
    "framer-motion": "^11.0.6",
    "material-ui-popup-state": "^5.0.10",
    "prop-types": "^15.8.1",
    "react": "^18.2.0",
    "react-apexcharts": "^1.4.1",
    "react-device-detect": "^2.2.3",
    "react-dom": "^18.2.0",
    "react-perfect-scrollbar": "^1.5.8",
    "react-redux": "^9.1.0",
    "react-router": "6.21.3",
    "react-router-dom": "^6.22.1",
    "redux": "^5.0.1",
    "redux-persist": "^6.0.0",
    "swr": "^2.2.5",
    "vite": "^5.2.10",
    "vite-jsconfig-paths": "^2.0.1",
    "web-vitals": "^3.5.2",
    "yup": "^1.3.3"

### build 파일 생성 및 실행(로컬 기준)

#### 실행 순서
1. yarn build
2. yarn global add serve
3. serve -s dist

#### 환경
* nodejs 18

(참고) 최신 nodejs(저의 경우 22)에서 빌드 파일 실행 시 모듈 중 하나랑 충돌 났어서 18로 내렸습니다