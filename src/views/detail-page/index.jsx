import { useEffect, useState } from 'react';

// material-ui
import { Grid, CardMedia, Typography, Button, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';


// project
// import BurgerCard from './BurgerCard';
// import { gridSpacing } from 'store/constant';
import MainCard from 'ui-component/cards/MainCard';

// assets

// ==============================|| DETAIL PAGE ||============================== //

const DetailPage = () => {
    const theme = useTheme();

    /* 
    제품 정보 받아오기
    */
//   const [isLoading, setLoading] = useState(true);
//   useEffect(() => {
//   setLoading(false);
//   }, []);
return (
    <Grid container spacing={2}
        sx={{ padding: '2rem 15rem 2rem 15rem'}}>
      {/* 브랜드명 */}
      <Grid item xs={12} sx={{marginBottom: 5}}>
        <Typography sx={theme.typography.h2} gutterBottom>
          브랜드 명
        </Typography>
        <Divider />
      </Grid>

      {/* 좌측: 이미지 */}
      <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
        <CardMedia
          component="img"
          image="/src/assets/images/menus/menu1.jpeg" // 실제 이미지 경로로 변경
          alt="버거 사진"
          sx={{ width: '80%', height: 'auto' }}
        />
      </Grid>

      {/* 우측: 정보 */}
      <Grid item xs={6}>
        <Typography sx={theme.typography.h3} gutterBottom>
          이름
        </Typography>
        <Typography sx={theme.typography.body1} gutterBottom>
          햄버거 설명
        </Typography>
        <Typography sx={theme.typography.subtitle1} gutterBottom>
          가격: 00,000원
        </Typography>

        {/* 옵션 선택 (단품, 세트) */}
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          <Grid item xs={6}>
            <Button variant="outlined" fullWidth>
              단품 00,000원
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="outlined" fullWidth>
              세트 00,000원
            </Button>
          </Grid>
        </Grid>

        {/* 알레르기 정보 */}
        <Typography variant="subtitle1" sx={{ marginTop: 5 }}>
          알레르기 정보
        </Typography>
        <Divider sx={{ marginBottom: 2 }} />
        <Typography variant="subtitle2" sx={{ marginTop: 2 }}>
          서버에서 받아온 알레르기 정보
        </Typography>

        {/* 장바구니 및 구매 버튼 */}
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          <Grid item xs={6}>
            <Button variant="contained" color="primary" fullWidth>
              장바구니
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" color="secondary" fullWidth>
              구매
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

    /* return (
        <Grid container>
            <Grid item xs={6}
            sx ={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <CardMedia
                    component="img"
                    image="/src/assets/images/menus/menu1.jpeg"
                    alt="Example"
                    sx = {{
                        width: '20rem',
                        height: '20rem',
                        padding: '30px',
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <Grid item>
                    <Typography
                    sx={{
                        fontSize: '0.8rem',
                        fontWeight: 500,
                        color: 'text.dark',
                        marginTop: 0
                    }}
                    >
                    브랜드이름                                                                                                                                                                                                                                                                                                                                                           
                    
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    ); */
};


export default DetailPage;
