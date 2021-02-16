import Avatar from '@material-ui/core/Avatar';
import '../styles/Chat.css';
import { Link } from 'react-router-dom';

const Chat = ({ name, message, profilePic, timeStamp }) => {
    return (
        <Link to={`/chat/${name}`}>
            <div className="chat">
                <Avatar className="chat_image" src={profilePic} />
                <div className="chat_details">
                    <h2>{name}</h2>
                    <p>{message}</p>
                </div>
                <p className="chat_timeStamp">{timeStamp}</p>
            </div>
        </Link>
    );
}

export default Chat;