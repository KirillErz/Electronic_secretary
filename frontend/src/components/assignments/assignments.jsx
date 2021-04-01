import React from 'react';
import { FieldArray } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import AssignmentItem from '../assignment-item/assignment-item';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import SeButton from '../castom-button/castom-button'



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
    addAssignment: {
        maxWidth: '285px',
    }
}));

function  Assignment() {
    this.toAssignment = ``;
    this.attributeResponsible = false;
    this.attributeControl = false;
    this.attributePlus = false;
    this.noteExecutor = ``;
    this.workDay = 0;
}


const Assignments = (props) =>  {
    const classes = useStyles();
    const { formik} = props

    return (
        <React.Fragment>
            <div className={classes.container}>
                <Typography className={classes.headerRule}>
                    На кого создать поручение
                </Typography>
                <FieldArray name="assignments">
                    {({ push, remove }) => (
                        <React.Fragment>
                            <AssignmentItem
                                formik={formik}
                                onRemove={remove}
                            />
                            <SeButton
                                variant="contained"
                                className={classes.addAssignment}
                                onClick={() =>
                                    push(new Assignment())
                                }
                                startIcon={<AddIcon fontSize="large" />}
                            >
                                добавить поручение
                            </SeButton>
                        </React.Fragment>
                    )}
                </FieldArray>
            </div>
        </React.Fragment>
    );
}

export default Assignments;