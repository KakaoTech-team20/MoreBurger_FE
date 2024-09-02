import { useEffect, useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

// project
// import BurgerCard from './BurgerCard';
// import { gridSpacing } from 'store/constant';
import MainCard from 'ui-component/cards/MainCard';
import BurgerCard from './BurgerCard';
import { useLocation } from 'react-router-dom';

// assets
// import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const location = useLocation();

  const role = location.state?.role;
  
  useEffect(() => {
  setLoading(false);
  }, []);

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
