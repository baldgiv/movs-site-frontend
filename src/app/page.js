"use client";

import {
  Button,
  Container,
  Link,
  Box,
  Stack,
  TextField,
  Typography,
  AppBar,
} from "@mui/material";

import Image from "next/image";



export default function Home() {
  return (
      <Box fixed sx={{backgroundColor:'#f5f5fe',width:'200vh',paddingLeft:'2%',paddingRight:'2%'}}>
         <Stack
          direction={'row'}
          justifyContent='space-between'
          alignItems='center'
         >
         <Image src="/logo.svg" width={230} height={60}/>
         <Stack
            direction='row'
            spacing={3}
          >
        <Typography>
          Абитуриентам
        </Typography>
        <Typography>
          Студентам
        </Typography>
        <Typography>
          Научные работы
        </Typography>
        <Typography>
          Кафедра
        </Typography>
        <Typography>
          Преподаватели
        </Typography>
        </Stack>
        <Typography>
          Войти
        </Typography>
      </Stack>
      </Box>
  )
}
