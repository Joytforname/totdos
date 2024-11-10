import { Stack, Typography } from '@mui/material';
import NotDoneCounter from './NotDoneCounter';
import Filter from './Filter';
import ClearCompleteButton from './ClearCompleteButton';

const Footer = () => {
  return (
    <Stack
    data-testid='footer'
      direction={'row'}
      spacing={2}
      alignItems={'center'}
      justifyContent={'space-between'}
      sx={{ borderTop: '1px solid #E0E0E0', p: 1 }}
    >
      <NotDoneCounter />
      <Filter />
      <ClearCompleteButton />
    </Stack>
  );
};

export default Footer;
