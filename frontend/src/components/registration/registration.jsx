
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useFormik } from 'formik';
import SeButton from '../castom-button/castom-button';
import SeTextField from '../castom-text-field/castom-text-field';
import {connect} from "react-redux";
import {getRegistrationStatus} from '../../store/selectors'
import {credential} from "../../store/actions/api-action";
import {InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import React, { useState } from 'react';
import * as yup from 'yup';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Alert from '@material-ui/lab/Alert';
import FormHelperText from '@material-ui/core/FormHelperText';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'При регистрации введите данные от МосЭДО.'}<br />
      {'Убедитесь, что Ваши данные от МосЭДО введены верно.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#0CB4C5',
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
  },
}));

const validationSchema = yup.object({
  fio_credential: yup
    .string()
    .required('Необходимо ввести логин'),
  email: yup
    .string()
    .required('Необходимо ввести почту'),
  pass_credential: yup
    .string()
    .required('Необходимо ввести пароль'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('pass_credential'), null], 'Пароли не совпадают')
});

const useForm = (sendFormRegistr) => (
  useFormik({
    initialValues: {
      fio_credential: '',
      pass_credential: '',
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const newUserCredentials = {
        fio_credential: values.fio_credential,
        email: values.email,
        pass_credential: values.pass_credential,
      };
      sendFormRegistr(JSON.stringify(newUserCredentials, null, 2));
    }
  }
));

const Registration = (props) => {
  const {sendFormRegistr, status} = props;
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);


  const formik = useForm(sendFormRegistr);
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PersonOutlineIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Регистрация
        </Typography>
        {
          status  && <div>
            { status.isRegistration === true ?
          <Alert variant="filled" severity="success">
            {status.message}
          </Alert> :
          <Alert variant="filled" severity="error">
             {status.message}
           </Alert>
          }
          </div>
        }
        <form className={classes.form} onSubmit={formik.handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <SeTextField
                variant="outlined"
                required
                fullWidth
                id="login"
                label="Логин"
                name="fio_credential"
                value={formik.values.fio_credential}
                onChange={formik.handleChange}
                autoComplete="lname"
                error={formik.touched.fio_credential && Boolean(formik.errors.fio_credential)}
                helperText={formik.touched.fio_credential && formik.errors.fio_credential}
              />
               <FormHelperText>
                Введите данные от МосЭДО.Пример: Воронцов М.Д.
               </FormHelperText>
            </Grid>
            <Grid item xs={12}>
               <SeTextField
                InputProps={{ // <-- This is where the toggle button is added.
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
                }}
                variant="outlined"
                required
                fullWidth
                name="pass_credential"
                value={formik.values.pass_credential}
                onChange={formik.handleChange}
                label="Пароль"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                error={formik.touched.pass_credential && Boolean(formik.errors.pass_credential)}
                helperText={formik.touched.pass_credential && formik.errors.pass_credential}
              />
            </Grid>
            <Grid item xs={12}>
               <SeTextField
                variant="outlined"
                required
                fullWidth
                name="passwordConfirmation"
                value={formik.values.passwordConfirmation}
                onChange={formik.handleChange}
                label="Подтвердить пароль"
                type={showPassword ? "text" : "password"}
                id="passwordConfirmation"
                autoComplete="current-password"
                error={formik.touched.passwordConfirmation && Boolean(formik.errors.passwordConfirmation)}
                helperText={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
              />
            </Grid>
            <Grid item xs={12}>
              <SeTextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Почта"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  autoComplete="email"
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
            </Grid>
          </Grid>
          <Box mt={3}>
            <Copyright />
          </Box>
          <SeButton
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Зарегистрироваться
          </SeButton>
        </form>
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  status: getRegistrationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  sendFormRegistr(registrData) {
    dispatch(credential(registrData));
  }
});

export {Registration};
export default connect(mapStateToProps, mapDispatchToProps)(Registration);