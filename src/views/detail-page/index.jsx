import React, { useEffect, useState } from 'react';

// material-ui
import { Grid, CardMedia, Typography, Button, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';


// project
// import { gridSpacing } from 'store/constant';
import MainCard from 'ui-component/cards/MainCard';

// assets

// ==============================|| DETAIL PAGE ||============================== //

const DetailPage = () => {
    const theme = useTheme();

    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
      // 데이터 가져오기 요청
      fetch(`https://moreburger.org/api/burgers/${burgerId}`) // 여기에 실제 API 엔드포인트를 입력하세요.
        .then((response) => {
          if (!response.ok) {
            throw new Error('버거 상세 데이터 불러오기 실패');
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }, []); // 빈 배열을 넣어 컴포넌트가 처음 렌더링될 때만 실행되도록 설정
  

    return (
    <Grid container spacing={2}
        sx={{
            padding: '24px 8rem 24px 8rem',
            width: '100%',
            // minWidth: '600px'
        }}>
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
          sx={{ width: '20rem', height: '20rem' }}
        />
      </Grid>

      {/* 우측: 정보 */}
      <Grid item xs={6}>
        <Typography sx={theme.typography.h3} gutterBottom>
          이름
        </Typography>
        <Typography sx={theme.typography.menuCaption} gutterBottom>
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
        <Typography  sx={{ marginTop: 5 }}>
          알레르기 정보
        </Typography>
        <Divider sx={{ marginBottom: 2 }} />
        <Typography variant="subtitle2" sx={{ marginTop: 2 }}>
          서버에서 받아온 알레르기 정보
        </Typography>

        {/* 장바구니 및 구매 버튼 */}
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          <Grid item xs={6}>
            <Button
                variant='contained'
                fullWidth
                sx={{...theme.components.MuiButton}}>
              장바구니
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
                variant='contained'
                fullWidth
                sx={{...theme.components.MuiButton}}>
              구매
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    );
};


export default DetailPage;
