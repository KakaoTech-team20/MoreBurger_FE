import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { getFetch } from 'api/getFetch';

// material-ui
import { useTheme } from '@emotion/react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

// project
// import BurgerCard from './BurgerCard';
// import { gridSpacing } from 'store/constant';
import MainCard from 'ui-component/cards/MainCard';
import BurgerCard from './BurgerCard';
import mockTotalData from 'api/mockTotalData';
import mockRecommenedData from 'api/mockRecommenedData';

// assets
// import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Home = () => {
  const [isLoading, setLoading] = useState(false);
  const [recommendedData, setRecommendedData] = useState(mockRecommenedData);
  const [totalData, setTotalData] = useState(mockTotalData);
  const location = useLocation();
  const theme = useTheme();
  const navigation = useNavigate();

  const role = location.state?.role;
  const token = localStorage.getItem('token');
  console.log('token', token);

  /* useEffect(() => {
    const fetchData = async () => {
      try {
          const response = await getFetch("/burgers");
          setTotalData(response);
      } catch (error) {
          console.error('Failed to fetch total burger data:', error);
      }
  };

  fetchData();
  }, []) */

  const handleLogin = (e) => {
    navigation('./pages/login/login3');
  }

  const handleRegister = (e) => {
    navigation('./pages/register/register3')
  }

  const onCardClick = (e) => {
    navigation(`home/detail`, {
      state: { burgerId }
    });
  }


  if (token === null) {
    return (
      <Grid container spacing={5}>
        <Grid item
          textAlign='center'
          sx={{width: '100%'}}>
          <MainCard sx={{height: '700px', alignContent: 'center'}}>
            <Typography sx={theme.typography.h3}>로그인 하면 메뉴 보여주지</Typography>
            <Button variant='contained' sx={{margin: 2}} onClick={handleLogin}>로그인</Button>
            <Button variant='contained' sx={{margin: 2}} onClick={handleRegister}>회원가입</Button>
          </MainCard>
        </Grid>
      </Grid>
    )
  }
  /* 
  SHOW RECOMMENED BURGERS
  */

  // 임시. data 받아오면 map으로 순회
  let recommendedItems = [];
  if (recommendedData && recommendedData.burgers) {
    recommendedItems = recommendedData.burgers.map((burger, index) => (
      <Grid item
        alignContent="center"
        xs={3}
        sx={{ minWidth: "250px" }}
        key={burger.id}>
        <BurgerCard
          isLoading={isLoading}
          burgerData={burger}
          onClick={() => onCardClick(burger.id)}
        />
      </Grid>
    ));
  }


  /* 
  SHOW TOTAL BURGERS
  */
  let totalItems = [];
  if (totalData && totalData.burgers) {
    totalItems = totalData.burgers.map((burger, index) => (
      <Grid item
        xs={3}
        alignContent="center"
        sx={{ minWidth: "250px" }}
        key={burger.id}>
        <BurgerCard
          isLoading={isLoading}
          burgerData={burger}
          onClick={() => onCardClick(burger.id)}
        />
      </Grid>
    ));
  }



  return (
    <>
      {/*
      햄버거 추천
      비로그인 시 -> 로그인 후 추천 메뉴를 받아보세요 띄우기
      */}
      <MainCard title="오늘의 추천 메뉴!">
        <Grid container spacing={3}
          padding={3}
          wrap='nowrap'
          style={{
            overflowX: 'auto',
          }}>
          {recommendedItems}
        </Grid>
      </MainCard>

      {/* 
      그냥 햄버거 보여줌      
      */}
      <MainCard title="전체보기" sx ={{marginTop: '20px'}}>
        <Grid container
          paddingX={3}
          spacing={4}
          // marginX="auto"
          >
          {totalItems}
        </Grid>
      </MainCard>
    </>
  );
};

export default Home;
