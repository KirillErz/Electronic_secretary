import React from 'react';
import Grid from '@material-ui/core/Grid';
import SeTextField from '../castom-text-field/castom-text-field';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: theme.breakpoints.width('md'),
        '& > *': {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
        }
    },
}));


export default function RuleFooter(props) {
    const {formik} = props
    const classes = useStyles();
    return (
    <div className={classes.container}>
        <Grid container spacing={5}>
            <Grid item xs={12}>
                <SeTextField
                    fullWidth
                    id="assignment"
                    name="assignment"
                    value={formik.values.assignment}
                    onChange={formik.handleChange}
                    label="Поручение к подрезолюции"
                    placeholder="Введите поручение к подрезолюции"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    size="small"
                />
            </Grid>
        </Grid>
    </div>
    );
}




