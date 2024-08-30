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
import Google from 'assets/images/icons/social-google.svg';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// ===========================|| USER DETAIL ||=========================== //

const AuthRegisterDetail = ({ ...others }) => {
  const navigate = useNavigate();

  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const customization = useSelector((state) => state.customization);
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(true);

  const [strength, setStrength] = useState(0);
  const [level, setLevel] = useState();

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
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
      >
        {({ errors, handleBlur, handleChange, handleSubmit, sendAuth, isValid, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <Grid container spacing={3} direction="column" alignItems="flex-start">
              <Grid item>
                  <RadioGroup row>
                    <FormLabel>나는</FormLabel>
                    <FormControlLabel value="구매자" control={<Radio />} label="구매자" />
                    <FormControlLabel value="판매자" control={<Radio />} label="판매자" />
                  </RadioGroup>
              </Grid>

              <Grid item>
                <TextField label="닉네임" variant="outlined" size="small" />
              </Grid>              

              <Grid item>
                <TextField label="나이" type='number' variant="outlined" size="small" sx={{ width: '60px', ml: 2 }} />
              </Grid>

              <Grid item>
                <FormLabel>성별</FormLabel>
                  <RadioGroup row>
                    <FormControlLabel value="여자" control={<Radio />} label="여자" />
                    <FormControlLabel value="남자" control={<Radio />} label="남자" />
                  </RadioGroup>
              </Grid>

              <Grid item>
                <FormLabel>매운 맛을 좋아하시나요?</FormLabel>
                  <RadioGroup row>
                    <FormControlLabel value="좋아요" control={<Radio />} label="좋아요" />
                    <FormControlLabel value="보통이에요" control={<Radio />} label="보통이에요" />
                    <FormControlLabel value="못먹어요" control={<Radio />} label="못먹어요" />
                  </RadioGroup>
              </Grid>

              <Grid item>
                <FormLabel>나는</FormLabel>
                <RadioGroup row>
                  <FormControlLabel value="소식좌" control={<Radio />} label="소식좌" />
                  <FormControlLabel value="보통좌" control={<Radio />} label="보통좌" />
                  <FormControlLabel value="대식좌" control={<Radio />} label="대식좌" />
                </RadioGroup>
              </Grid>

              <Grid item>
                <FormLabel>갖고 계신 알러지를 알려주세요</FormLabel>
                <Grid container>
                  <FormControlLabel control={<Checkbox />} label="있어요" />
                  <FormControlLabel control={<Checkbox />} label="없어요" />
                </Grid>
              </Grid>

              <Grid item>
                <Button variant="contained">새우</Button>
                <Button variant="contained" sx={{ mx: 1 }}>땅콩</Button>
                <Button variant="contained">우유</Button>
                <Button variant="contained" sx={{ mx: 1 }}>쇠고기</Button>
                <Button variant="contained">토마토</Button>
                <Button variant="contained" sx={{ mx: 1 }}>오징어</Button>
                <Button variant="contained">닭고기</Button>
                <Button variant="contained" sx={{ mx: 1 }}>조개류</Button>
              </Grid>
            </Grid>

            <Box sx={{ mt: 2 }}>
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
