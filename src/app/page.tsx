'use client';

import Image from 'next/image';
import { useState } from 'react';
import Visibility from '@mui/icons-material/RemoveRedEye';
// import axios from 'axios';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material';
// Internal app
import bg from '%/images/bg.png';
import arte from '%/images/arte.png';
import Link from 'next/link';

export default function Signin() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const styleLabel = {
    position: 'relative',
    display: 'flex',
    flexFlow: 'row',
    color: '#000',
    '&:before': {
      content: "''",
      position: 'absolute',
      left: '0px',
      top: '0px',
      bottom: '0px',
      width: '3px',
      height: '100%',
      zIndex: 7,
      background: '#7D4DBE',
      borderRadius: '1px',
      display: 'block',
    },
  };

  const createAccount = async (formData: FormData) => {
    'use server';
    const consultantId = formData.get('consultantId');
    const country = formData.get('country');
    console.log({ consultantId, country });
  };

  console.log({ createAccount });

  return (
    <Grid container columns={12} sx={{ display: 'flex', minHeight: '100%' }}>
      <Grid item lg={7} sx={{ px: { xs: 2, sm: 0 }, display: { xs: 'none', lg: 'block' } }}>
        <Box sx={{ position: 'relative', height: '100vh' }}>
          <Box sx={{ position: 'absolute', zIndex: 1, display: 'flex', alignItems: 'center', height: '100%' }}>
            <Image src={arte} alt="Arte Cliente" />
          </Box>
          <Image src={bg} alt="Pelcas Cliente" style={{ height: 'inherit' }} />
        </Box>
      </Grid>
      <Grid item xs={12} lg={5}>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            height: '100%',
            justifyContent: 'center',
          }}
        >
          <Box sx={{ width: 376, bgcolor: '#fff', borderRadius: 2, px: 2, py: 3, zIndex: 9 }}>
            <Stack spacing={2}>
              <Box>
                <Typography variant="h5" color="#000" fontWeight={700}>
                  Buenas tardes
                </Typography>
                <Typography variant="h6" color="#7D4DBE" fontWeight={700}>
                  Edgar Lazaro {{ stateForm }}
                </Typography>
              </Box>
              <Box sx={styleLabel}>
                <Typography color="#000" sx={{ pl: 1 }}>
                  Inicio de sesión
                </Typography>
              </Box>
              <FormControl sx={{ width: '100%' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>

              <Link href="/signin">
                <Typography color="#000" fontWeight={300}>
                  Recuperar mi contraseña
                </Typography>
              </Link>

              <Button variant="contained">Iniciar sesión</Button>
            </Stack>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
