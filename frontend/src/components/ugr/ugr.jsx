import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import SeTextField from '../castom-text-field/castom-text-field';
import BlueCheckbox from '../blue-checkbox/blue-checkbox';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: theme.breakpoints.width('md'),
        '& > *': {
            marginTop: theme.spacing(1),
        }
    },
    headerRule: {
        alignSelf: 'end',
        fontSize: '24px',
        fontWeight: '400'
    },
    formLabel: {
        color:'#000000',
        fontSize: '14px',
    },
    formLabelCheckbox: {
        fontSize: '13px'
    },
    formControl: {
        margin: theme.spacing(0),
      },
}));

export default function Ugr(props) {

    const classes = useStyles();
    const {formik} = props
    return (
        <React.Fragment>
        <div className={classes.container}>
            <Typography className={classes.headerRule}>
                Указать начальника УГР в подрезолюции
            </Typography>
            <Grid container spacing={5}>
                <Grid item xs={12} >
                    <FormGroup>
                        <FormControlLabel
                            control={<BlueCheckbox checked={formik.values.chiefUgr}  onChange={() => formik.setFieldValue("chiefUgr", !formik.values.chiefUgr)} name="chiefUgr" />}
                            label="Указать"
                            classes={{ label: classes.formLabelCheckbox }}
                        />
                    </FormGroup>
                </Grid>
                { formik.values.chiefUgr &&
                 <React.Fragment>
                    <Grid item xs={12}>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel focused={false} classes={{ root: classes.formLabel }} component="legend">Признак “Плюс”</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={<BlueCheckbox checked={formik.values.ugrAttributePlus}  onChange={() => formik.setFieldValue("ugrAttributePlus", !formik.values.ugrAttributePlus)} name="ugrAttributePlus" />}
                                    label="Использовать"
                                    classes={{ label: classes.formLabelCheckbox }}
                                />
                            </FormGroup>
                            <FormLabel focused={false} classes={{ root: classes.formLabel }} component="legend">Признак “Контроль”</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={<BlueCheckbox checked={formik.values.ugrAttributeControl}  onChange={() => formik.setFieldValue("ugrAttributeControl", !formik.values.ugrAttributeControl)} name="ugrAttributeControl" />}
                                    label="Использовать"
                                    classes={{ label: classes.formLabelCheckbox }}
                                />
                            </FormGroup>
                            <FormLabel focused={false} classes={{ root: classes.formLabel }} component="legend">Признак “Ответственный”</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={<BlueCheckbox checked={formik.values.ugrAttributeResponsible}  onChange={() => formik.setFieldValue("ugrAttributeResponsible", !formik.values.ugrAttributeResponsible)} name="ugrAttributeResponsible" />}
                                    label="Использовать"
                                    classes={{ label: classes.formLabelCheckbox }}
                                />
                            </FormGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <SeTextField
                            variant="outlined"
                            size="small"
                            fullWidth
                            id="ugrNoteExecutor"
                            name="ugrNoteExecutor"
                            value={formik.values.ugrNoteExecutor}
                            onChange={formik.handleChange}
                            label="Примечание исполнителю"
                            placeholder="Введите примечание исполнителю"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={2} sm={3}>
                        <SeTextField
                            variant="outlined"
                            size="small"
                            fullWidth
                            id="ugrWorkDay"
                            name="ugrWorkDay"
                            value={formik.values.ugrWorkDay}
                            onChange={formik.handleChange}
                            label="Количество рабочих дней"
                            placeholder=""
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                </React.Fragment>
                }
            </Grid>
            </div>
        </React.Fragment>
    )
}