import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionActions from '@material-ui/core/AccordionActions';
import Divider from '@material-ui/core/Divider';
import Rule from '../rule/rule'
import { useFormik } from 'formik';
import {saveRule} from "../../store/actions/api-action";
import {connect} from "react-redux";
import SeButton from '../castom-button/castom-button'


const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 97%)',
    },
    details: {

    },
    submit: {
        margin: theme.spacing(0, 2, 0),
      },
}))


const EditRule = (props) => {
    const {item, sendFormRule} = props;
    console.log(item);
    const classes = useStyles();
    const formik = useFormik({
        initialValues: item,
        validationSchema: "",
        onSubmit: (values) => {
            console.log('test',values);
            const template = {
                idCredantial: values.idCredantial,
                idTemplate: values.idTemplate,
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
            sendFormRule(JSON.stringify(template, null, 2));
        },
        setFieldValue: (values) => {
            delete values.resolutions;
         },
      });

    return (
        <form className={classes.form} onSubmit={formik.handleSubmit}>
            <AccordionDetails className={classes.details}>
                <Rule
                    formik={formik}
                />
            </AccordionDetails>
            <Divider />
            <AccordionActions>
                {/* <Button onClick={() => toastr.success('The title', 'The message')} size="small">Отмена</Button> */}
                <SeButton
                    className={classes.submit}
                    type="submit"
                    size="large">
                    Сохранить
                </SeButton>
            </AccordionActions>
        </form>
    )
}

const mapDispatchToProps = (dispatch) => ({
    sendFormRule(templateData) {
      dispatch(saveRule(templateData));
    }
  });

  export {EditRule};
  export default connect(null, mapDispatchToProps)(EditRule);