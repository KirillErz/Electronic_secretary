
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';

 const  SeTextField =  withStyles({
    root: {

      '& .MuiInputLabel-root' : {
        color: 'rgba(0, 0, 0, 0.5);',
      },
      '& label.Mui-focused': {
        color: '#000000',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          //border: 'solid 3px',
          borderColor: 'rgba(0, 165, 181, 0.7)',
        },
        '&:hover fieldset': {
          borderColor: '#ADCEE8',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'rgba(0, 165, 181)',
        },
        borderRadius:'12px',


      },
    },
  })(TextField);

  export default SeTextField;