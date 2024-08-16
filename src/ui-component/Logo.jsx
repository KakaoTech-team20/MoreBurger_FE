// material-ui
import { Typography } from '@mui/material';
// import { useTheme } from '@mui/material/styles';


// if you want to use image instead of <svg> uncomment following.
// import logoDark from 'assets/images/logo-dark.svg';
import logo from 'assets/images/logo1.jpg';


// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  // const theme = useTheme();

  return (
      // if you want to use image instead of svg uncomment following, and comment out <svg> element.
    <>
      <img src={logo} alt="모아버거" width="50" style={{borderRadius: 100}}/>
      <Typography variant='h3' style={{padding: 10}}>
        모아버거
      </Typography>
    </>
  );
};

export default Logo;
