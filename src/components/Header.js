import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import '../styles/Header.css';
import TinderImg from '../images/TinderLogo.png';
import { IconButton } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Header = ({ backButton }) => {
    const history = useHistory();
    return (
        <div className="header">

            {backButton ? (
                <IconButton onClick = { () => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize="large" className="header_icon" />
                </IconButton>
            ) : (
                    <IconButton>
                        <PersonIcon fontSize="large" className="header_icon" />
                    </IconButton>
                )}

            <Link to="/">
                <img className="header_logo" src={TinderImg} alt="Tinder-Logo" />
            </Link>

            <Link to="/chat">
                <IconButton>
                    <QuestionAnswerIcon fontSize="large" className="header_icon" />
                </IconButton>
            </Link>

        </div>
    );
}

export default Header;