import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ResolutionItem from '../resolution-item/resolution-item';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import SeButton from '../castom-button/castom-button'
import { FieldArray } from 'formik';


const useStyles = makeStyles((theme) => ({
    divider: {
        margin: theme.spacing(2, 0),
        background: theme.palette.divider.dark,
    },
    iconButtonLabel: {
        justifyContent: 'end'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: theme.breakpoints.width('md'),
        '& > *': {
            marginTop: theme.spacing(3),
        }
    },
    headerRule: {
        alignSelf: 'end',
        fontSize: '24px',
        fontWeight: '400'
    },
    divider: {
        margin: theme.spacing(2, 0),
        background: theme.palette.divider.dark,
    },
    addResolution: {
        maxWidth: '285px',
    }
}));

function Resolution() {
    this.toResolution = ``;
    this.attributeResponsible = false;
    this.attributeControl = false;
    this.attributePlus = false;
    this.noteExecutor = ``;
    this.workDay = 0;
}


const Resolutions = (props) =>  {
    const classes = useStyles();
    const { formik} = props

    return (
        <React.Fragment>
            <div className={classes.container}>
                <Typography className={classes.headerRule}>
                    На кого создать подрезолюцию
                </Typography>
                <FieldArray name="resolutions"
                    render={({ push, remove }) => (
                        <React.Fragment>
                            <ResolutionItem
                                formik={formik}
                                onRemove={remove}
                            />
                            <SeButton
                                variant="contained"
                                className={classes.addResolution}
                                onClick={() =>
                                    push(new Resolution())
                                }
                                startIcon={<AddIcon fontSize="large" />}
                            >
                                добавить подрезолюцию
                            </SeButton>
                        </React.Fragment>
                    )}
                />
            </div>
        </React.Fragment>
    );
}

export default Resolutions;