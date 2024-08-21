import { useEffect, useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

// project
// import BurgerCard from './BurgerCard';
// import { gridSpacing } from 'store/constant';
import MainCard from 'ui-component/cards/MainCard';
import BurgerCard from './BurgerCard';

// assets
// import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
  setLoading(false);
  }, []);

  /* 
  SHOW RECOMMENED BURGERS
  */

  // 임시. data 받아오면 map으로 순회
  const recommendedNum = 6;
  let recommendedItems = [];
  for (let i=0; i<recommendedNum; i++) {
    recommendedItems.push(
      <Grid item
        alignContent="center"
        key={i}
        style={{
          minWidth: "200px",
          minHeight: "200px"
        }}>
        <BurgerCard isLoading={isLoading}></BurgerCard>
      </Grid>
    );
  }

  /* 
  SHOW TOTAL BURGERS
  */




  return (
    <>
      {/*
      햄버거 추천
      비로그인 시 -> 로그인 후 추천 메뉴를 받아보세요 띄우기
      */}
      <MainCard title="오늘의 추천 메뉴!">
        <Grid container
          gap={1.5}
          wrap="nowrap"
          style={{
            overflowX: 'auto',
            display: 'flex',
          }}>
          {recommendedItems}
        </Grid>
      </MainCard>

      {/* 
      그냥 햄버거 보여줌      
      */}
      <MainCard title="전체보기" sx ={{marginTop: '20px'}}>
        <Grid container
          gap={2}
          wrap="nowrap"
          style={{
            overflowX: 'auto', // 가로 스크롤 활성화
            display: 'flex',
          }}>
          전체 햄버거 리스트가 뜹니다~
        </Grid>
      </MainCard>
    </>
  );
};

export default Home;
