import React from 'react'
import { Grid } from '@mui/material'
import './footer.css'
function Footer() {
  return (
    <Grid container className='footer'>
        <Grid item lg={5} xs={5} sm={5} className='footer_main'>
            <div className='cricle1'><svg xmlns="http://www.w3.org/2000/svg" width="49" height="35" viewBox="0 0 49 35" fill="none">
                    <rect y="15" width="20" height="20" rx="10" fill="#9C69E2"/>
                    <rect x="29" width="20" height="35" rx="10" fill="#F063B8"/>
            </svg></div>
            <p className='footer_title'>DataWarehouse</p>
        </Grid>
        <Grid item lg={2} xs={2} sm={2}>
            <p className='footer_menu'>About</p>
        </Grid>
        <Grid item lg={2} xs={2} sm={2}>
            <p className='footer_menu'>Help</p>
        </Grid>
        <Grid item lg={3} xs={3} sm={3}>
            <p className='footer_menu'>Social Media</p>
        </Grid>
        <Grid lg={5} xs={5} sm={5}>
        <p className='fotter_one'>Warehouse Society,234<br></br>
            Bahagia Ave Street
            PRBW 29281
        </p>
        <p className='footer_one_tow'>
        info@warehouse.project<br></br>
        1-232-3434 (Main)
        </p>
        </Grid>
        <Grid lg={2} xs={2} sm={2}>
        <ul className='footer_ul'>
            <li className='footer_li'>
            Profile
            </li>
            <li className='footer_li'>Features</li>
            <li className='footer_li'>Careers</li>
            <li className='footer_li'>DW News</li>
        </ul>
        </Grid>
        <Grid lg={2} xs={2} sm={2}>
        <ul className='footer_ul'>
            <li className='footer_li'>
            Support
            </li>
            <li className='footer_li'>Sign up</li>
            <li className='footer_li'>Guide</li>
            <li className='footer_li'> Reports</li>
            <li className='footer_li'> Q&A</li>
        </ul>
        </Grid>
        <Grid item lg={3} xs={3} sm={3} className='footer_end' >
        <svg xmlns="http://www.w3.org/2000/svg" width="51" height="52" viewBox="0 0 51 52" fill="none" className='footer_svg'>
  <circle opacity="0.1" cx="25.5046" cy="25.9612" r="25.0671" fill="#212353"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="51" height="52" viewBox="0 0 51 52" fill="none" className='footer_svg'>
  <circle opacity="0.1" cx="25.5046" cy="25.9612" r="25.0671" fill="#212353"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="51" height="52" viewBox="0 0 51 52" fill="none" className='footer_svg'>
  <circle opacity="0.1" cx="25.5046" cy="25.9612" r="25.0671" fill="#212353"/>
</svg>
        </Grid>
        <Grid xs={12} lg={12} sm={12} className='footer_df'>
            <p className='footer_footer'>© Datawarehouse™, 2020. All rights reserved.<br></br>
            Company Registration Number: 21479524.</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none">
            <circle opacity="0.2" cx="30.9194" cy="30.7212" r="30.0806" fill="#9C69E2"/>
            <path d="M15.8789 26.6836C15.8789 21.1607 20.3561 16.6836 25.8789 16.6836H35.9595C41.4823 16.6836 45.9595 21.1607 45.9595 26.6836V30.7481C45.9595 36.2709 41.4823 40.7481 35.9595 40.7481H15.8789V26.6836Z" fill="#9C69E2"/>
            <circle cx="24.9038" cy="28.7158" r="2.00537" fill="white"/>
            <circle cx="30.9204" cy="28.7158" r="2.00537" fill="white"/>
            <circle cx="36.936" cy="28.7158" r="2.00537" fill="white"/>
            <path d="M25.9058 39.7454H15.8789V42.2291C15.8789 43.7837 17.5748 44.7439 18.9079 43.9441L25.9058 39.7454Z" fill="#9C69E2"/>
            </svg>
        </Grid>
    </Grid>
  )
}

export default Footer