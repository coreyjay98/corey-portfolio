import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  IconButton,
} from '@mui/material';
import myLogo from '../../../public/logo-black-back.png';
import styles from './NavigationBar.module.scss';
import Image from 'next/image';

const NavigationBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative" className={styles.appBar}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Image
              src={myLogo}
              alt="CJ logo"
              width={100}
              height={100}
              layout="responsive"
            />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Work
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Contact
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default NavigationBar;
