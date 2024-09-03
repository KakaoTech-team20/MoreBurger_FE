import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';

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
import { margin } from '@mui/system';

// assets
// import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const location = useLocation();
  const theme = useTheme();
  const navigation = useNavigate();

  const role = location.state?.role;
  const token = localStorage.getItem('token');
  console.log('token', token);
  
  if (token === null) {
    return (
      <Grid container spacing={5}>
        <Grid item
          textAlign='center'
          sx={{width: '100%'}}>
          <MainCard sx={{height: '700px', alignContent: 'center'}}>
            <Typography sx={theme.typography.h3}>로그인 하면 메뉴 보여주지</Typography>
            <Button variant='contained' sx={{margin: 2}}>로그인</Button>
            <Button variant='contained' sx={{margin: 2}}>회원가입</Button>
          </MainCard>
        </Grid>
      </Grid>
    )
  }
  /* 
  SHOW RECOMMENED BURGERS
  */

  // 임시. data 받아오면 map으로 순회
  const recommendedNum = 10;
  let recommendedItems = [];
  for (let i=0; i<recommendedNum; i++) {
    recommendedItems.push(
      <Grid item
        alignContent="center"
        xs={3}
        sx={{minWidth: "250px"}}
        key={i}>
        <BurgerCard isLoading={isLoading}></BurgerCard>
      </Grid>
    );
  }

  /* 
  SHOW TOTAL BURGERS
  */
const totalNum = 11;
let totalItems = [];
for (let i=0; i<totalNum; i++) {
  totalItems.push(
    <Grid item
      xs={3}
      alignContent="center"
      // margin="auto"
      sx={{minWidth: "250px"}}
      key={i}>
        <BurgerCard isLoading={isLoading}></BurgerCard>
    </Grid>
  )
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
