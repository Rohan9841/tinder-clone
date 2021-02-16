import { Avatar } from '@material-ui/core';
import { useState } from 'react';
import '../styles/ChatScreen.css';

const ChatScreen = () => {

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            id: '1',
            name: 'Ellen',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Ellen_DeGeneres_2011.jpg/220px-Ellen_DeGeneres_2011.jpg',
            message: 'Whats up?'
        },
        {
            id: '2',
            name: 'Ellen',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Ellen_DeGeneres_2011.jpg/220px-Ellen_DeGeneres_2011.jpg',
            message: 'How is it going?'
        },
        {
            id: '3',
            message: 'Where are you?'
        }
    ])

    const handleChange = (e) =>{
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input !== ""){
            setMessages([
                ...messages, {message: input}
            ]);
            setInput('');
        }

    }

    return (
        <div className="chatScreen">
            <p className="chatScreen_timeStamp">You matched with Ellen on 10/08/2020</p>
            {messages.map((message) => (
                message.name ? (
                    <div className="chatScreen_message" key={message.id}>
                        <Avatar className="chatScreen_image" alt={message.name} src={message.image} />
                        <p className="chatScreen_text">{message.message}</p>
                    </div>
                ) : (
                        <div className="chatScreen_message" key={message.id} >
                            <p className="chatScreen_textUser">{message.message}</p>
                        </div>
                    )

            )
            )}

            <form className="chatScreen_input" onSubmit = {handleSubmit}>
                <input value = {input}className="chatScreen_inputField" type="text" placeholder="Type a message..." onChange = {handleChange}/>
                <button className="chatScreen_inputButton">Send</button>
            </form>
        </div>
    );
}

export default ChatScreen;