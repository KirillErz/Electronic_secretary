import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import SeTextField from '../castom-text-field/castom-text-field';
import Divider from '@material-ui/core/Divider';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import BlueCheckbox from '../blue-checkbox/blue-checkbox'

const useStyles = makeStyles((theme) => ({
    formLabel: {
        color:'#000000',
        fontSize: '14px',
    },
    formLabelCheckbox: {
        fontSize: '13px'
    },
    remove: {
        // "&:hover, &.Mui-focusVisible": { backgroundColor: "yellow" },


        position:'absolute',
        top: '-47px',
        right: '-55px',

    },
    containerItem: {
        position: 'relative',
    },
    divider: {
        margin: theme.spacing(2, 0),
        background: theme.palette.divider.dark,
    },
    close: {
    //    "&.MuiSvgIcon-root": { backgroundColor: 'yellow'},

    }
}));

const ResolutionItem = ({formik, onRemove }) => {

    const classes = useStyles();
    return (
        <React.Fragment>
    {formik.values.resolutions.map((item, index) => (

        <React.Fragment>
             <div key={index} className={classes.containerItem}>
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <SeTextField
                            variant="outlined"
                            size="small"
                            fullWidth
                            id="toResolution"
                            name={`resolutions[${index}].toResolution`}
                            value={item.toResolution}
                            onChange={formik.handleChange}
                            label="Укажите, на кого создать подрезолюцию"
                            placeholder="Скопируйте Фамилию И.О. и описание из ЭДО"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel focused={false} classes={{root: classes.formLabel}} component="legend">Признак “Плюс”</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={<BlueCheckbox checked={item.attributePlus}  onChange={() => formik.setFieldValue(`resolutions[${index}].attributePlus`, !item.attributePlus)} name={`resolutions[${index}].attributePlus`} />}
                                    label="Использовать"
                                    classes={{label:classes.formLabelCheckbox}}
                                />
                            </FormGroup>
                            <FormLabel focused={false} classes={{root: classes.formLabel}} component="legend">Признак “Контроль”</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={<BlueCheckbox checked={item.attributeControl}  onChange={() => formik.setFieldValue(`resolutions[${index}].attributeControl`, !item.attributeControl)} name={`resolutions[${index}].attributeControl`} />}
                                    label="Использовать"
                                    classes={{label:classes.formLabelCheckbox}}
                                />
                            </FormGroup>
                            <FormLabel focused={false} classes={{root: classes.formLabel}} component="legend">Признак “Ответственный”</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={<BlueCheckbox checked={item.attributeResponsible}  onChange={() => formik.setFieldValue(`resolutions[${index}].attributeResponsible`, !item.attributeResponsible)} name={`resolutions[${index}].attributeResponsible`} />}
                                    label="Использовать"
                                    classes={{label:classes.formLabelCheckbox}}
                                />
                            </FormGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                            <SeTextField
                                variant="outlined"
                                size="small"
                                fullWidth
                                id="noteExecutor"
                                name={`resolutions[${index}].noteExecutor`}
                                value={item.noteExecutor}
                                onChange={formik.handleChange}
                                label="Примечание исполнителю"
                                placeholder="Введите примечание исполнителю"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <SeTextField
                            variant="outlined"
                            size="small"
                            fullWidth
                            id="workDay"
                            name={`resolutions[${index}].workDay`}
                            value={item.workDay}
                            onChange={formik.handleChange}
                            label="Количество рабочих дней"
                            placeholder=""
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                </Grid>
                { (index > 0) &&
                    <IconButton
                        className={classes.remove}
                        aria-label="delete"
                        onClick={() => onRemove(index)}>
                        <CloseIcon style={{fill: "#0CB4C5"}} className={classes.close} fontSize="large" />
                    </IconButton>
                }
            </div>
            { (formik.values.resolutions.length-1) != index &&
                        <Divider className={classes.divider} />
                    }
        </React.Fragment>

    ))}
  </React.Fragment>
    );
}

export default ResolutionItem;