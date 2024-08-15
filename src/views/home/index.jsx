import { useEffect, useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';

// project
import BurgerCard from './BurgerCard';

// assets
// import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';

// ==============================|| DEFAULT DASHBOARD ||============================== //


const Home = () => {
  const [setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid item xs={12} md={4}>
      <BurgerCard isLoading={isLoading} />
    </Grid>
);  
};

export default Home;
