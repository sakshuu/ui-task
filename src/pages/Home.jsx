import React from 'react'
import  Group1  from "./../assets/images/Group1.jpg";
import  Group2  from "./../assets/images/Group2.png";
import  Group3  from "./../assets/images/Group3.jpg";
import  Group4  from "./../assets/images/Group4.jpg";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {  Box, Typography  } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';


const Home = () => {
  const card = [
    {
      picture: Group1,
      title:"AI + RPA is what we do",
      desc:"Future-Proof your business. Drive efficiency, profitability and deliver on customer experience"
    },
    {
      picture: Group2,
      sub_title : {
      title:"AI + RPA Automation",
      url:"https://www.xivtech.io./services/AIandRPAautomation"
      },
      title:"Make Bolder Choices",
      icon: <ArrowRightAltIcon/>,
      desc:"Digital focused strategies to realize market-changing ideas"
    },
    {
      picture: Group3,
      sub_title : {
        title:"Bulid Better Apps",
        url:"https://www.xivtech.io./services/enterprise-apps"
      },
      title:"Innovate with Speed",
      icon: <ArrowRightAltIcon/>,
      desc:"Create higher quality software, deliver on customer expectations and business goals"
    },
    {
      picture: Group4,
      sub_title : {
        title:"DevOps",
        url:"https://www.xivtech.io./services/delivery-pipeline-automation"
      },
      title:"Embrace Cloud",
      icon: <ArrowRightAltIcon/>,
      desc:"With Cloud-First accelerate innovation and optimize performance"
    }
  ]

  const cardContent =  card?.map((item) => <Grid id="main-content" data-aos="fade-up"
  data-aos-duration="2000" container spacing={4}>
    <Box direction="column"
justifyContent="space-evenly"
alignItems="baseline"
spacing={4}
   >
     <Grid item xs={6} md={4}>
      <Box className="sub-content">
  <a id='sub-url' href={item.sub_title?.url}>{item.sub_title?.title}</a>
  <Typography id="sub" variant='subtitle1'>{item.icon}</Typography>
      </Box>
  <Typography variant='h3' id="heading">{item?.title}</Typography>
  <Typography variant='body1'>{item?.desc}</Typography>
  </Grid>
    </Box>

    <Box direction="column"
 justifyContent="space-evenly"
 alignItems="baseline"
 spacing={4}
  >
  <Grid  item xs={6} md={6}>
  <img src={item?.picture} className='picture' alt="" /> 
  </Grid>
    </Box>
    </Grid>
   )

return <>
<Box className="main">
  <Typography variant="h5" component="h6" id='content'>Let's Collaborate</Typography>
  <Grid>{cardContent}</Grid>
</Box>
</>

}

export default Home