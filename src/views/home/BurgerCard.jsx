import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';
// ===========================|| BURGER CARD ||=========================== //

const BurgerCard = ({ isLoading }) => {
  const theme = useTheme();

  // const [anchorEl, setAnchorEl] = React.useState(null);

  /*
  * 이미지 클릭 시 상세페이지로 이동하도록 핸들러 변경
  */  
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  /*
  추천 버거 자료 받아오는 함수
  */

  return (
    <>
      {isLoading ? (
        <SkeletonEarningCard />
      ) : (
        <MainCard
          border={false}
          content={false}
          sx={{
            bgcolor: 'primary.light',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <Box sx={{ p: 5.25 }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container alignItems="center">
                  <Grid item>
                    <Typography sx={{ fontSize: '1.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>맛있는 햄버거</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ mb: 1.25 }}>
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: 'secondary.200'
                  }}
                >
                  8,000₩
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </MainCard>
      )}
    </>
  );
};

BurgerCard.propTypes = {
  isLoading: PropTypes.bool
};

export default BurgerCard;
