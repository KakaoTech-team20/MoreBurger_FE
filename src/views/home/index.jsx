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
  return (
    <>
      <MainCard title="오늘의 추천 메뉴!">
        <Grid container spacing={2}>
          <BurgerCard isLoading={isLoading}></BurgerCard>
        </Grid>
      </MainCard>
    </>
  );  
};

export default Home;
