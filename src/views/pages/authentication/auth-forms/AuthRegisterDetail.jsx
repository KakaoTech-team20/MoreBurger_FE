import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { RadioGroup, Radio } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// third party
import { Formik } from 'formik';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets

// ===========================|| USER DETAIL ||=========================== //

const AuthRegisterDetail = ({ ...others }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const customization = useSelector((state) => state.customization);
  const url = 'https://moreburger.org/api/auth/signup';

  const labels = ['난류', '밀', '새우', '대두', '우유', '쇠고기', '토마토', '오징어', '닭고기', '조개류'];
  const [clickedBtns, setClickedBtns] = useState(Array(labels.length).fill(false));

  const handleClick = (index, setFieldValue, values) => {
    const newClickedBtns = [...clickedBtns];
    newClickedBtns[index] = !newClickedBtns[index];
    setClickedBtns(newClickedBtns);

    const selectedAllergies = labels.filter((_, i) => newClickedBtns[i]);
    setFieldValue("allergies", selectedAllergies);
  }

  const handlerRegister = async (values, {setErrors, setSubmittin}) => {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(values)
      });

      if (!res.ok) {
        const errorData = await res.json();
        setErrors({ submit: errorData.message || '서버 오류'});
      } else {
        console.log('sign up successful');
        navigate('/pages/login/login3');
      }
    } catch (error) {
      setErrors({ submit: '회원가입 정보 전송 실패'});
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2} marginBottom={2}>
        <Grid item xs={12}>
          <Box sx={{ alignItems: 'center', display: 'flex' }}>
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />            
          </Box>
        </Grid>
      </Grid>

      <Formik
        initialValues={{
          email: location.state?.email || 'user123@moreburger.org',
          password: location.state?.password || 'defaultPassword',
          age: '',
          nickname: '',
          sex: null,
          spicy: null,
          capacity: null,
          allergies: null,
          role: ''
        }}
        onSubmit={handlerRegister}
      >
        {({ values, setFieldValue, handleChange, handleSubmit, isSubmitting }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <Grid container spacing={3} direction="column" alignItems="center">
              <Grid item
                display="flex"
                justifyContent="center"
                alignItems="center"
                marginTop={2}>
                  <Typography sx={{...theme.typography.body1}}>나는</Typography>
                  <RadioGroup row sx={{marginX: '16px'}}
                    name='role'
                    value={values.role}
                    onChange={handleChange}
                  >
                    <FormControlLabel value="user" control={<Radio />} label="구매자" />
                    <FormControlLabel value="seller" control={<Radio />} label="판매자" />
                  </RadioGroup>
              </Grid>

              <Grid item>
                <TextField
                  label="닉네임" variant="outlined" size="small"
                  name='nickname'
                  value={values.nickname}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item
                display="flex"
                justifyContent="center"
                alignItems="center">
                  <Typography sx={{...theme.typography.body1}}>성별</Typography>
                  <RadioGroup row sx={{marginX: '16px'}}
                    name='sex'
                    value={values.sex}
                    onChange={handleChange}
                  >
                    <FormControlLabel value="male" control={<Radio />} label="남자" />
                    <FormControlLabel value="female" control={<Radio />} label="여자" />
                  </RadioGroup>
              </Grid>

              <Grid item display="flex" alignItems="center">
                <Typography sx={{...theme.typography.body1}}>나이</Typography>
                <TextField variant="outlined" type='number' size="small"
                  name='age'
                  value={values.age}
                  onChange={(e) => {
                    const value = e.target.value;
                    setFieldValue('age', value === '' ? '' : parseInt(value, 10));  // 값이 비어있으면 빈 문자열, 아니면 정수로 변환
                  }}
                  sx={{
                    width: '60px',
                    ml: 2,
                    '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button' : {
                      'WebkitAppearance' : 'none',
                      margin: 0
                    }
                  }}
                />
              </Grid>

              <Grid item>
                <RadioGroup row sx={{alignItems: 'center' }}
                  name='capacity'
                  value={values.capacity}
                  onChange={(e) => {
                    setFieldValue('capacity', parseInt(e.target.value, 10));
                  }}
                >
                  <Typography sx={{...theme.typography.body1, marginX: 2}}>나는</Typography>
                  <FormControlLabel value={0} control={<Radio />} label="소식좌" />
                  <FormControlLabel value={1} control={<Radio />} label="보통좌" />
                  <FormControlLabel value={2} control={<Radio />} label="대식좌" />
                </RadioGroup>
              </Grid>

              <Grid item marginTop={2}>
                <Typography sx={{...theme.typography.h5, textAlign: 'center', padding: 1}}>매운 맛을 좋아하시나요?</Typography>
                  <RadioGroup row
                    name='spicy'
                    value={values.spicy}
                    onChange={(e) => {
                      setFieldValue('spicy', parseInt(e.target.value, 10));
                    }}                  >
                    <FormControlLabel value={0} control={<Radio />} label="좋아요" />
                    <FormControlLabel value={1} control={<Radio />} label="보통이에요" />
                    <FormControlLabel value={2} control={<Radio />} label="못먹어요" />
                  </RadioGroup>
              </Grid>

              <Grid item marginTop={3}>
                <Typography sx={{...theme.typography.h5, padding: 1, textAlign: 'center'}}>알러지가 있나요?</Typography>
                <Grid 
                  container 
                  justifyContent="center"
                  alignItems="center"
                  spacing={1}
                  sx={{marginTop: 1}}
                >
                  {labels.map((label, index) => (
                    <Grid item key={index}>
                      <Button
                        variant={clickedBtns[index] ? "contained" : "outlined"}
                        sx={{ mx: 1 }}
                        onClick={() => handleClick(index, setFieldValue, values)}
                      >
                        {label}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>

            <Box sx={{ mt: 2, marginTop: 5 }}>
              <AnimateButton>
                <Button
                  disableElevation disabled={isSubmitting} fullWidth size="large" 
                  type="submit"
                  variant="contained"
                  color="secondary">
                  회원가입 완료
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AuthRegisterDetail;
