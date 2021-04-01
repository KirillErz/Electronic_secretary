import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {login} from "../../store/actions/api-action";
import {connect} from "react-redux";
import {getUserStatus} from '../../store/selectors'
import SeTextField from '../castom-text-field/castom-text-field';
import SeButton from '../castom-button/castom-button'



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#0CB4C5',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  login: {
    borderRadius: '400px',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const validationSchema = yup.object({
  username: yup
    .string()
    .required('Необходимо ввести логин'),
  password: yup
    .string()
    .required('Необходимо ввести пароль'),
});


const useForm = (sendFormLogin) => (
  useFormik({
    initialValues: {},
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const {username, password} = values;
      sendFormLogin({username, password});
    }
  }
));

const Login = (props) => {
  const {sendFormLogin, status} = props;
  const classes = useStyles();
  const formik = useForm(sendFormLogin);

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Вход
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <SeTextField
            className={classes.login}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="login"
            label="Логин"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            autoComplete="username"
            autoFocus
          />
          <SeTextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            //helperText={status && `${status.statusText}`}
            autoComplete="current-password"
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Запомнить меня"
          /> */}
          <SeButton
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Вход
          </SeButton>
        </form>
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  status: getUserStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  sendFormLogin(authData) {
    dispatch(login(authData));
  }
});

export {Login};
export default connect(mapStateToProps, mapDispatchToProps)(Login);