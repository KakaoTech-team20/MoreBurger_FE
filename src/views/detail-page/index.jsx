import { useEffect, useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';

// project
// import BurgerCard from './BurgerCard';
// import { gridSpacing } from 'store/constant';
import MainCard from 'ui-component/cards/MainCard';

// assets
// import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const DetailPage = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
  setLoading(false);
  }, []);


  return (
    <>
    상세페이지
    </>
  );
};

export default DetailPage;
