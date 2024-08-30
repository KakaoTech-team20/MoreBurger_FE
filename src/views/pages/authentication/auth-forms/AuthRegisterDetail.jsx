import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import { RadioGroup, Radio } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets

// ===========================|| USER DETAIL ||=========================== //

const AuthRegisterDetail = ({ ...others }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const customization = useSelector((state) => state.customization);

  const [data, setData] = useState([]);

  const labels = ['난류', '밀', '대두', '우유', '쇠고기', '토마토', '오징어', '닭고기', '조개류'];
  const [clickedBtns, setClickedBtns] = useState(Array(labels.length).fill(false));

  const handleClick = (index) => {
    const newClickedBtns = [...clickedBtns];
    newClickedBtns[index] = !newClickedBtns[index];
    setClickedBtns(newClickedBtns);
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
          nickname: '',
          submit: null         
        }}
        onSubmit={(values, { setSubmitting }) => {
          // 여기에 상태 업데이트 로직 추가
        }}
      >
        {({ errors, handleSubmit, isSubmitting }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <Grid container spacing={3} direction="column" alignItems="center">
              <Grid item
                display="flex"
                justifyContent="center"
                alignItems="center"
                marginTop={2}>
                  <Typography sx={{...theme.typography.body1}}>나는</Typography>
                  <RadioGroup row sx={{marginX: '16px'}}>
                    <FormControlLabel value="구매자" control={<Radio />} label="구매자" />
                    <FormControlLabel value="판매자" control={<Radio />} label="판매자" />
                  </RadioGroup>
              </Grid>

              <Grid item>
                <TextField label="닉네임" variant="outlined" size="small"/>
              </Grid>

              <Grid item
                display="flex"
                justifyContent="center"
                alignItems="center">
                  <Typography sx={{...theme.typography.body1}}>성별</Typography>
                  <RadioGroup row sx={{marginX: '16px'}}>
                    <FormControlLabel value="남자" control={<Radio />} label="남자" />
                    <FormControlLabel value="여자" control={<Radio />} label="여자" />
                  </RadioGroup>
              </Grid>

              <Grid item display="flex" alignItems="center">
                <Typography sx={{...theme.typography.body1}}>나이</Typography>
                <TextField variant="outlined" type='number' size="small"
                  sx={{ 
                    width: '60px',
                    ml: 2,
                    '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button' : {
                      'WebkitAppearance' : 'none',
                      margin: 0
                    }
                  }} />
              </Grid>

              <Grid item>
                <RadioGroup row sx={{alignItems: 'center' }}>
                  <Typography sx={{...theme.typography.body1, marginX: 2}}>나는</Typography>
                  <FormControlLabel value="소식좌" control={<Radio />} label="소식좌" />
                  <FormControlLabel value="보통좌" control={<Radio />} label="보통좌" />
                  <FormControlLabel value="대식좌" control={<Radio />} label="대식좌" />
                </RadioGroup>
              </Grid>

              <Grid item marginTop={2}>
                <Typography sx={{...theme.typography.h5, textAlign: 'center', padding: 1}}>매운 맛을 좋아하시나요?</Typography>
                  <RadioGroup row>
                    <FormControlLabel value="좋아요" control={<Radio />} label="좋아요" />
                    <FormControlLabel value="보통이에요" control={<Radio />} label="보통이에요" />
                    <FormControlLabel value="못먹어요" control={<Radio />} label="못먹어요" />
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
                        onClick={() => handleClick(index)}
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
