import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// material-ui
import { Grid, CardMedia, Typography, Button, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';


// project
// import { gridSpacing } from 'store/constant';
import MainCard from 'ui-component/cards/MainCard';
import DetailPageSeller from './DetailPageSeller';
import DetailUpdateSeller from './DetailUpdateSeller';
import mockDetail from 'api/mockDetail';

// assets

// ==============================|| DETAIL PAGE ||============================== //

const DetailPage = () => {
    const theme = useTheme();
    const location = useLocation();
    const burgerId = location.state?.burgerId || 1;
    const role = localStorage.getItem('role');
    const [data, setData] = useState(mockDetail);
    const [isLoading, setLoading] = useState(true);
    const allergies = data.allergies.map((allergy) => allergy).join(' ');

    console.log(allergies);
    
    
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
          const jsonData = data.json();
          setData(jsonData);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }, [burgerId]);

    // burgerId가 없으면 DetailPageSeller 컴포넌트를 렌더링
    if (!burgerId && role === 'seller') {
      return <DetailPageSeller />;
    } else if (role === 'seller') {
      return <DetailUpdateSeller />
    } else {
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
            {data.brand}
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
            {data.name}
          </Typography>
          <Typography sx={theme.typography.menuCaption} gutterBottom>
            {data.description}
          </Typography>
  
          {/* 옵션 선택 (단품, 세트) */}
          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            <Grid item xs={6}>
              <Button variant="outlined" fullWidth>
                {data.price} 원
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="outlined" fullWidth>
              {data.price + 1900} 원
              </Button>
            </Grid>
          </Grid>
  
          {/* 알레르기 정보 */}
          <Typography  sx={{ marginTop: 5 }}>
            알레르기 정보
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <Typography variant="subtitle2" sx={{ marginTop: 2 }}>
            {allergies}
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
    }

};


export default DetailPage;
