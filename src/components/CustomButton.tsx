import { Button } from '@mui/material';

interface CustomButtonProps {
  label: string;
  onClick: () => void;
  isActive: boolean;
  testid: string;
}

const CustomButton = (props: CustomButtonProps) => {
  const { label, onClick, isActive, testid } = props;
  return (
    <Button
      data-testid={testid}
      size='small'
      variant='outlined'
      sx={{
        textTransform: 'none',
        fontWeight: 'light',
        px: 1,
        minWidth: 0,
        maxHeight: '25px',
        border: isActive ? '1px solid #838383' : 'none',
        color: '#838383',
      }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
