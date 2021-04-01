import React from 'react';
import Divider from '@material-ui/core/Divider';
import Resolutions from '../resolutions/resolutions';
import Assignments from '../assignments/assignments';
import RuleHeader from '../form-rule-header/form-rule-header';
import Ugr from '../ugr/ugr';
import RuleFooter from '../form-rule-footer/form-rule-footer';
import { FormikProvider } from 'formik';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    divider: {
        margin: theme.spacing(2, 0),
        background: theme.palette.divider.dark,
    },
    formWrapper: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: theme.spacing(1),
    }
}));


const Rule = (props) => {
    const { formik } = props
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.formWrapper}>
                <RuleHeader
                    formik={formik}
                />
                <Divider className={classes.divider} />
                <FormikProvider value={formik}>
                    <Resolutions
                        formik={formik}
                    />
                </FormikProvider>
                <Divider className={classes.divider} />
                <Ugr
                    formik={formik}
                />
                <Divider className={classes.divider} />
                <RuleFooter
                    formik={formik}
                />
                <Divider className={classes.divider} />
                 <FormikProvider value={formik}>
                    <Assignments
                        formik={formik}
                    />
                </FormikProvider>
            </div>
        </React.Fragment>
    )
}

export default Rule;