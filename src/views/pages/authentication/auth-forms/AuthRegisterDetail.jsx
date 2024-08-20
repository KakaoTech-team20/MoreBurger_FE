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

// ===========================|| FIREBASE - REGISTER ||=========================== //

const AuthRegisterDetail = ({ ...others }) => {
  const navigate = useNavigate();

  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const customization = useSelector((state) => state.customization);
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(true);

  const [strength, setStrength] = useState(0);
  const [level, setLevel] = useState();

  const googleHandler = async () => {
    console.error('Register');
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setStrength(temp);
    setLevel(strengthColor(temp));
  };

  const handleNext = () => {
    navigate('/pages/register/detail3');
  }

  useEffect(() => {
    changePassword('123456');
  }, []);

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

            <FormControl fullWidth
                /* error={Boolean(touched.email && errors.email)} */
                sx={{ ...theme.typography.customInput }}
            >
              <InputLabel htmlFor="outlined-adornment-sex">성별 칸</InputLabel>
              <OutlinedInput
                id="outlined-adornment-sex"
                type="string"
                name="sex"
                onBlur={handleBlur}
                onChange={handleChange}
                inputProps={{}}
              />
            </FormControl>

            <FormControl fullWidth
                /* error={Boolean(touched.email && errors.email)} */
                sx={{ ...theme.typography.customInput }}
            >
              <InputLabel htmlFor="outlined-adornment-nickname">닉네임</InputLabel>
              <OutlinedInput
                id="outlined-adornment-nickname"
                type="string"
                value={values.email}
                name="nickname"
                onBlur={handleBlur}
                onChange={handleChange}
                inputProps={{}}
              />
              {touched.email && errors.email && (
                <FormHelperText error id="standard-weight-helper-text--register">
                  {errors.email}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-age">나이 칸</InputLabel>
              <OutlinedInput
                id="outlined-adornment-age"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                name="age"
                label="Age"
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e);
                  changePassword(e.target.value);
                }}
                inputProps={{}}
              />
              {touched.password && errors.password && (
                <FormHelperText error id="standard-weight-helper-text-password-register">
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>

            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button
                  /* 버튼 클릭 시 사용자 세부정보 입력 페이지로 */
                  onClick={handleNext}
                  disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="secondary">
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
