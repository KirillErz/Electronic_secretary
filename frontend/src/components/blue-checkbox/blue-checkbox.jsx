import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
const BlueCheckbox = withStyles({
    root: {
      color: '#0CB4C5',
      '&$checked': {
        color: '#0CB4C5',
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  export default BlueCheckbox;