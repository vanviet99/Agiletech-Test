import React from 'react';
import Grid from '@mui/material/Grid';
import './banner.css'
function Banner() {
  return (
    <Grid container className='banner'>
      <Grid item lg={4} xs={4} sm={4} className='banner_content'>
        <p className='banner_p'>Data Warehouse is a data storage area that has been
        tested for security, so you can store your data here
        safely but not be afraid of being stolen by others.</p>
        <button className='banner_button'>Lear more</button>
      </Grid>
      <Grid item lg={8} xs={8} sm={8}>
        <img src="https://s3-alpha-sig.figma.com/img/b141/5dac/039cbccbb3a55ae069a3291f512521c8?Expires=1693785600&Signature=QGFk9Xx0MItgLaWTvP6KUAOJ~LvprA3HI2yRwoavZOwT2WGY6OenziBeVLEbQeIEMHSOypTIENOAI3ZqgNx2BA1jufwAyWX9T7uVCZPKwJFSxqyfMBB8Mn2j5ZXqnKCkE70MBWrOOV6X1B1JLdRyYJbgW5Om2Aw6f-lGb-06pMZqweBXACsEVKobtae8VcXPmY2Nk4JJzCzGRZvJKBXJDqgJLFFNxxpWkMQ77BKr71ixpSGqaconm4Ly~B24YoK5cAK9IkN-T6n~NAhYdfDOJvj495X5DKkGzLmBiDh0aC6fYKhWOAkILqQB4z8EsgOY3XuRjECmv6Dk8XBRneeBOg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
      </Grid>
      <p className='banner_child'>Save your data<br></br> storage here.</p>
    </Grid>
  );
}

export default Banner;
