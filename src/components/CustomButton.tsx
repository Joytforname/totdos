import { Button } from '@mui/material';

interface CustomButtonProps {
  label: string;
  onClick: () => void;
  isActive: boolean;
  testid: string;
  disabled?: boolean;
}

const CustomButton = (props: CustomButtonProps) => {
  const { label, onClick, isActive, testid, disabled = false } = props;

  return (
    <Button
      data-testid={testid}
      size='small'
      variant='text'
      sx={{
        textTransform: 'none',
        fontWeight: 'light',
        px: 1,
        minWidth: 0,
        maxHeight: '25px',
        border: isActive ? '1px solid #838383' : 'none',
        color: '#838383',
        '&:disabled': {
          px: 1,
        },
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
