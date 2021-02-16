import '../styles/Chats.css';
import Chat from './Chat';

const Chats = () => {
    return (
        <div className="chats">
            <Chat name="Sarah" message="Hey! How are you?" timeStamp="35 minutes ago" profilePic="https://upload.wikimedia.org/wikipedia/commons/2/29/Sarah_Bolger_%2848484781976%29_%28cropped%29.jpg" />
            <Chat name="Ellen" message="How is it going?" timeStamp="35 minutes ago" profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Ellen_DeGeneres_2011.jpg/220px-Ellen_DeGeneres_2011.jpg" />
            <Chat name="Sarah" message="Hey! How are you?" timeStamp="35 minutes ago" profilePic="https://upload.wikimedia.org/wikipedia/commons/2/29/Sarah_Bolger_%2848484781976%29_%28cropped%29.jpg" />
            <Chat name="Sarah" message="Hey! How are you?" timeStamp="35 minutes ago" profilePic="https://upload.wikimedia.org/wikipedia/commons/2/29/Sarah_Bolger_%2848484781976%29_%28cropped%29.jpg" />
        </div>
    );
}

export default Chats;