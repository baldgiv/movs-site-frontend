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
    <><Box fixed sx={{backgroundColor:'#f5f5fe',width:'1920px',height:'100px',paddingLeft:'2%',paddingRight:'2%'}}>
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
      <Box fixed sx={{backgroundColor:'#f5f5fe',width:'100%',paddingLeft:'5%',paddingRight:'2%',paddingTop:'5%'}}>
      <Stack
          
          position={'absolute'}
          justifyContent='space-between'
          alignItems='left'
         >
         <Image src="/earth.svg" width={1720} height={600}/>
         <Stack direction={'column'}
          position={'absolute'}
          justifyContent='space-between'
          sx={{paddingLeft:'9%',paddingTop:'7%'}}
          >
         <Box 
         border={1}
         borderColor="#ffffff"
         borderRadius="40px"
         bgcolor={'rgba(0, 0, 0, 0.12)'}
         width={'205px'}
         height={'35px'}
        
         >
          <Typography 
          color={'#ffffff'}
          fontSize={10}
          variant={"body1"}
          padding={'5%'}
          paddingLeft={'11%'}
          >
            ПРОФФЕСИОНАЛЬНЫЙ ТЕСТ
          </Typography>
        </Box>
        <Typography
        width={'460px'}
        color={'#ffffff'}
        variant={"body2"}
        fontSize={44}
        >
          Добро пожаловать в мир науки
        </Typography>
        <Button 
        variant="contained"
        sx={{bgcolor:'#fd5600',width:'222px',height:'56px'}}
        >
          Пройти
        </Button>
        <Typography
        variant={"body1"}
        fontSize={16}
        color={'#ffffff'}
        paddingTop={'4%'}
        >
          Пройдите небольшой тест, чтобы узнать подходит ли вам данная кафедра.
        </Typography>
         

         </Stack>
      </Stack>

      </Box>
    </>
    
  )
}
