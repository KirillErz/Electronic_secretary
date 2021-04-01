
import React from 'react';
import { connect } from "react-redux";
import { setActiveRule } from "../../store/actions/api-action";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import Button from '@material-ui/core/Button';
import SvgIcon from "@material-ui/core/SvgIcon";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        minWidth: '45px',
        minHeight: '45px',
        background: '#FFFFFF',
        marginRight: '2px',
        marginLeft: '2px',
        borderRadius: '10px',
    },
    active: {
        padding: '10px'
    }
}));


const ButtonActiveRule = (props) => {

    const {id, active, handleActiveRule} = props;
    const classes = useStyles();
    const [activeRule, setActive] = React.useState(active);
    const [idTemplate, setId] = React.useState();

    React.useEffect(() => {
      setId(id);
    }, []);

    const handleChange = () => {
        setActive(!activeRule);
        handleActiveRule(idTemplate, !activeRule, setActive);
    };


    return (
        <Button
        className={classes.button}
        classes={{ text: classes.active }}
        onClick={() => {handleChange()}}
    >
        <SvgIcon>
            { !activeRule ?
                <PlayArrowIcon />
                :  <PauseIcon />
            }
        </SvgIcon>
    </Button>
    );
};

const mapDispatchToProps = (dispatch) => ({

    handleActiveRule(idTemplate, active, setActive) {
        dispatch(setActiveRule(idTemplate, active, setActive));
    }
  });

  export { ButtonActiveRule };
  export default connect(null, mapDispatchToProps)(ButtonActiveRule);