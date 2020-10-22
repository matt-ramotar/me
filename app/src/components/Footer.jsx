import React from 'react';
import { Box, Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

import { SocialProvider, SocialLink } from '@mui-treasury/components/socialLink';

export default function Footer() {
  return (
    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Box style={{ display: 'flex' }}>
        <SocialProvider>
          <SocialLink brand={'Envelope'} href='mailto:matt@mattramotar.com' />
          <SocialLink brand={'GithubCircle'} href='https://github.com/matt-ramotar' />
          <SocialLink brand={'LinkedIn'} href='https://www.linkedin.com/in/matt-ramotar' />
          <SocialLink brand={'Twitter'} href='https://twitter.com/mattramotar' />
        </SocialProvider>
      </Box>

      <Box style={{ display: 'flex' }}>
        <Typography variant='h6' color='textSecondary'>
          Built with ❤️ in Portland
        </Typography>
      </Box>
    </Box>
  );
}
