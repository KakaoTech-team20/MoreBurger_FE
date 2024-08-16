import { useEffect, useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';

// project
// import BurgerCard from './BurgerCard';
// import { gridSpacing } from 'store/constant';
import MainCard from 'ui-component/cards/MainCard';
import { Typography } from '@mui/material';

// assets
// import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';

// ==============================|| DEFAULT DASHBOARD ||============================== //


const Home = () => {
  /*
  * 나중에 상태관리 필요할 때 사용 
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  */

  return (
    <MainCard title="오늘의 추천 메뉴!">
      <Typography variant="body2">
        추천 메뉴가 뜹니다~
      </Typography>
  </MainCard>
  );  
};

export default Home;
