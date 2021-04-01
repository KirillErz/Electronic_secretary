import logo from '../../logo.png';
import {connect} from "react-redux";
import {getAuthorizationStatus, getUserData} from '../../store/selectors'
import {AuthorizationStatus} from "../../utils/const";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {logout} from "../../store/actions/api-action";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
    exitButton: {
        color: '#00A5B5',
        fontWeight: '600',
        textTransform: 'none'
    }
}));


const  Header = (props) =>  {
    const {authorizationStatus, userData, exit, history} = props;
    const classes = useStyles();
    return (
        <header className="page-header">
            <div className="logo-wrapped">
                <span className="logo_pj">Электронный секретарь</span>
            </div>
            <img src={logo} className="logo_mka" alt="logo" />
            { (authorizationStatus === AuthorizationStatus.AUTH && history.location.pathname != `/`) &&
                <div className="autorization">
                    <div className="user">
                        <span className="user_name">{userData.name}</span>
                    </div>
                    <div className="autorization_exit">
                       <Button
                        className={classes.exitButton}
                        onClick={() => {exit()}}
                        startIcon={<ExitToAppIcon fontSize="large" />}>
                           Выход
                        </Button>
                    </div>
                </div>
            }
        </header>
    )
}

const mapStateToProps = (state) => ({
    authorizationStatus: getAuthorizationStatus(state),
    userData: getUserData(state)
  });

  const mapDispatchToProps = (dispatch) => ({
    exit() {
      dispatch(logout());
    }
  });


  export {Header};
  export default connect(mapStateToProps, mapDispatchToProps)(Header);