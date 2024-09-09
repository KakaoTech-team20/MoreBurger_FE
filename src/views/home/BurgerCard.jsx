import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';
// ===========================|| BURGER CARD ||=========================== //

const BurgerCard = ({ isLoading, burgerData, onClick }) => {
  console.log(burgerData);
  const theme = useTheme();
  const navigate = useNavigate();


  // const [anchorEl, setAnchorEl] = React.useState(null);
 
  const handleClick = () => {
    // setAnchorEl(event.currentTarget);
    navigate(`/home/detail`);
  };

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
            margin: 'auto'
          }}
        >
          <Box 
          onClick={handleClick}
          sx={{
            p: 5.25,
            cursor: 'pointer',
            // minWidth: "250px"            
          }}>
            <Grid container direction="column" alignContent="center">
              <Grid item>
                <Grid container alignItems="center">
                  <Grid item>
                    <CardMedia
                      component="img"
                      height="140"
                      image="src/assets/images/menus/menu1.jpeg"
                      alt="Example"
                    />
                    <Typography 
                      sx={{ 
                        fontSize: '1.125rem', 
                        fontWeight: 500, 
                        mr: 1, mt: 1.75, mb: 0.75 
                      }}
                    >{burgerData.name}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ mb: 1.25 }}>
                <Typography
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: 'text.dark'
                  }}
                >
                  {burgerData.price}₩
                </Typography>
              </Grid>
              <Grid item sx={{ mb: 1.25 }}>
                <Typography
                  sx={{
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    color: 'text.dark',
                    marginTop: 0
                  }}
                >
                  {burgerData.brand}
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
