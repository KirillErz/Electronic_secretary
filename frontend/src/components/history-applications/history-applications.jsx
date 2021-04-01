import React from 'react';
import { connect } from "react-redux";
import { fetchHistory} from "../../store/actions/api-action";
import { getHistory } from '../../store/selectors'
import { makeStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ReactComponent as Edit } from '../../style/img/edet.svg';
import SvgIcon from "@material-ui/core/SvgIcon";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import EditRule from '../edit-rule/edit-rule';
import AlertDialog from '../alert-dialog/alert-dialog';
import ButtonActiveRule from '../button-active-rule/button-active-rule';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%', // Fix IE 11 issue.
        '& > *': {
            margin: theme.spacing(1),
        }
    },
    // accordion: {
    //     background:'rgba(160, 196, 224, 0.19)',
    //     borderRadius:'10px;',
    // },
    nameRule: {
        fontSize: theme.typography.pxToRem(14),
        fontWeight: theme.typography.fontWeightRegular
    },
    number: {
        fontSize: theme.typography.pxToRem(36),
        fontWeight: theme.typography.fontWeightBold,
        color: '#FFFFFF',
    },
    legend: {
        fontSize: theme.typography.pxToRem(14),
    },
    сontrol: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
    },
    column: {
        flexBasis: '33.33%',
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2),
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    summary: {
        borderBottom: '2px solid #f0f8ff',

        '& .MuiAccordionSummary-content': {
            alignItems: 'center',
            margin: '0 auto',
        },
    },
    button: {
        minWidth: '45px',
        minHeight: '45px',
        background: '#FFFFFF',
        marginRight: '2px',
        marginLeft: '2px',
        borderRadius: '10px',
    },
    edit: {
        padding: '10px'
    },
    delete: {
        padding: '4px 1px 0px 4px',
    }
}));

const Accordion = withStyles({
    root: {



        background: 'rgba(0, 165, 181, 0.7)',
        borderRadius: '10px;',
        border: 'none',
        boxShadow: 'none',
        '&:not(:first-child)': {
            borderBottom: 0,
            borderRadius: '10px;',
        },
        '&:not(:last-child)': {
            borderBottom: 0,
            borderRadius: '10px;',
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
        '& .MuiCollapse-container': {
            backgroundColor: 'rgba(255, 255, 255, 0,97)',
        },
    },
    expanded: {},
})(MuiAccordion);


const HistoryApplications = (props) => {
    const { history, loadHistory} = props;

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);


    React.useEffect(() => {
        loadHistory();
    }, []);

    if (!history) {
        return null;
    }

    const handleChange = (idTemplate) => {
        setExpanded(expanded ? false : idTemplate);
    };

    return (
        <div className={classes.root}>
            { history.map((item) => (
                <div key={item.idTemplate}>
                <Accordion classes={{ root: classes.accordion }}  expanded={expanded === item.idTemplate}>
                    <AccordionSummary className={classes.summary}>
                        <div className={classes.column}>
                            <Typography className={classes.nameRule}>{item.nameRule}</Typography>
                        </div>
                        <div className={classes.column}>
                            <ButtonActiveRule
                                active={item.activeRule}
                                id={item.idTemplate}
                            />
                            <Button
                                className={classes.button}
                                classes={{ text: classes.edit }}
                                onClick={() => { handleChange(item.idTemplate) }}
                            >
                                <SvgIcon>
                                    <Edit className="close"/>
                                </SvgIcon>
                            </Button>
                            <AlertDialog
                                id={item.idTemplate}
                            />
                        </div>
                        <div className={classes.column}>
                            <Grid container spacing={2} alignItems="center" direction="row">
                                <Grid item>
                                    <Typography className={classes.number}>
                                        {item.processedDoc}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.legend}>
                                        документов обработано<br />
                                        по этому правилу
                                    </Typography>
                                </Grid>
                            </Grid>
                        </div>
                    </AccordionSummary>
                    <EditRule
                        item={item}
                    />
                </Accordion>
                </div>))
            }
        </div>
    );

}

const mapStateToProps = (state) => ({
    history: getHistory(state)
});

const mapDispatchToProps = (dispatch) => ({
    loadHistory() {
        dispatch(fetchHistory());
    },
});

export { HistoryApplications };
export default connect(mapStateToProps, mapDispatchToProps)(HistoryApplications);
