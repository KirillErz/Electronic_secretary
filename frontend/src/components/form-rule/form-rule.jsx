import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useFormik, FormikProvider } from 'formik';
import * as yup from 'yup';
import nextId from "react-id-generator";
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import Rule from '../rule/rule'
import {createRule} from "../../store/actions/api-action";
import {connect} from "react-redux";
import {getUserData} from '../../store/selectors'
import SeButton from '../castom-button/castom-button'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    // position:'fixed',
    // overflow: 'hidden',
    // height:'100%',
  },
  headerRule: {
    alignSelf:'end',
    fontSize:'24px',
    fontWeight:'600'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    // height: '100%',
    // overflowY: 'auto',
    // overflowX: 'hidden',
    // paddingRight: '15px',
    // marginRight: '-35px',
    // marginBottom: '150px',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  divider: {
    margin: theme.spacing(2, 0),
    background: theme.palette.divider.dark,
  },
}));


const useForm = (sendFormRule,userData) => (
  useFormik({
    initialValues: {
      idUser:userData.id,
      nameRule:``,
      numDocument: ``,
      fromDocument: ``,
      toWhomDocument:``,
      summary:``,
      documentPages: ``,
      authorResolution: ``,
      keyWordResolution: ``,

      chiefUgr: false,
      ugrAttributeResponsible: false,
      ugrAttributeControl: false,
      ugrAttributePlus: false,
      ugrNoteExecutor: ``,
      ugrWorkDay: 0,

      resolutions: [{
        toResolution: ``,
        attributeResponsible: false,
        attributeControl: false,
        attributePlus: false,
        noteExecutor: ``,
        workDay: 0,
      }],

      assignment: ``,

      assignments: [{
        toAssignment: ``,
        attributeResponsible: false,
        attributeControl: false,
        attributePlus: false,
        noteExecutor: ``,
        workDay: 0,
      }]

    },
    validationSchema: ``,
    onSubmit: (values) => {
      const template = {
        idUser: values.idUser,
        nameRule: values.nameRule ? values.nameRule : false,
        numDocument: values.numDocument ? values.numDocument : false,
        fromDocument: values.fromDocument ? values.fromDocument : false,
        toWhomDocument: values.toWhomDocument ? values.toWhomDocument : false,
        summary: values.summary ? values.summary : false,
        documentPages: values.documentPages ? values.documentPages : false,
        authorResolution: values.authorResolution ? values.authorResolution : false,
        keyWordResolution: values.keyWordResolution ? values.keyWordResolution : false,

        chiefUgr: values.chiefUgr,
        ugrAttributeResponsible: values.ugrAttributeResponsible,
        ugrAttributeControl: values.ugrAttributeControl,
        ugrAttributePlus: values.ugrAttributePlus,
        ugrNoteExecutor: values.ugrNoteExecutor ? values.ugrNoteExecutor : false,
        ugrWorkDay: values.ugrWorkDay,

        resolutions: values.resolutions.map(obj=>({...obj, toResolution: obj.toResolution ? obj.toResolution : false, noteExecutor: obj.noteExecutor ? obj.noteExecutor : false})),

        assignment: values.assignment,

        assignments: values.assignments.map(obj=>({...obj, toAssignment: obj.toAssignment ? obj.toAssignment: false, noteExecutor: obj.noteExecutor ? obj.noteExecutor : false})),
      };
      console.log();
      sendFormRule(JSON.stringify(template, null, 2));
    }
  }
));


const FormRule = (props) => {
  const {sendFormRule, userData} = props;
  const classes = useStyles();
  const formik = useForm(sendFormRule,userData);

  return (
    <React.Fragment>
      <Container component="main" >
        <div className={classes.paper}>
          <Typography className={classes.headerRule}>
            Создание нового правила
          </Typography>
          <form className={classes.form} onSubmit={formik.handleSubmit}>
            <Rule
              formik={formik}
            />
            <SeButton
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Создать правило
          </SeButton>
          </form>
        </div>
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  userData: getUserData(state)
});

const mapDispatchToProps = (dispatch) => ({
  sendFormRule(authData) {
    dispatch(createRule(authData));
  }
});

export {FormRule};
export default connect(mapStateToProps, mapDispatchToProps)(FormRule);








