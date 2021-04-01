import React from 'react';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { removeRule } from "../../store/actions/api-action";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as Delete } from '../../style/img/delete.svg';
import SeButton from '../castom-button/castom-button'


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  button: {
      minWidth: '45px',
      minHeight: '45px',
      background: '#FFFFFF',
      marginRight: '2px',
      marginLeft: '2px',
      borderRadius: '10px',
  },
  delete: {
      padding: '4px 1px 0px 4px',
  }
}));

const AlertDialog = (props) => {
  const {id, handleRemoveRule} = props

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [idTemplate, setId] = React.useState();

  React.useEffect(() => {
    setId(id);
  }, []);

  const handleAgree = () => {
    handleRemoveRule(idTemplate);
    setOpen(false);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
    <Button
        className={classes.button}
        classes={{ text: classes.delete }}
        onClick={() => { handleClickOpen() }}
      >
        <SvgIcon>
          <Delete />
        </SvgIcon>
      </Button>
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Вы уверены что хотите удалить правило?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            После удаления документы по данному правилу не будут регистрироваться.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <SeButton onClick={handleClose} size="small">
            Нет
          </SeButton>
          <SeButton onClick={handleAgree} size="small">
            Да
          </SeButton>
        </DialogActions>
      </Dialog>
    </div>
    </React.Fragment>
  );
}


const mapDispatchToProps = (dispatch) => ({

  handleRemoveRule(idTemplate) {
      dispatch(removeRule(idTemplate));
  }
});

export { AlertDialog };
export default connect(null, mapDispatchToProps)(AlertDialog);