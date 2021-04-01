import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

 const  SeButton =  withStyles({
    root: {
        borderRadius: '12px',
        background: '#0CB4C5',
        boxShadow: 'none',
        fontSize: '24',
        fontWeight: '600',
        color: '#ffff',
        padding: '8px 16px',
        "&:hover": {
          //you want this to be the same as the backgroundColor above
          backgroundColor: "rgba(0, 165, 181, 0.6);"
      }
    },
  })(Button);

  export default SeButton;