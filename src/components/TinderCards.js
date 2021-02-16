import { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import '../styles/TinderCards.css';
import database from '../config/firebase';

const TinderCards = () => {

    const [people, setPeople] = useState([]);

    //piece of code which runs on the condition
    useEffect(() => {

        //this is where the code runs
        const unsubscribe = database.collection('people').onSnapshot((snapshot) =>
            setPeople(snapshot.docs.map((doc) => doc.data()))
        );

        return () => {
            // this is cleanup
            unsubscribe();
        }
    }, []);

    return (
        <div>
            <div className="tinderCards_cardContainer">
                {people.map(person => {
                    return (
                        <TinderCard className="swipe" key={person.name} preventSwipe={['up', 'down']}>
                            <div className="card" style={{ backgroundImage: `url(${person.url})` }}>
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCard>
                    )
                })}
            </div>

        </div>
    );
}

export default TinderCards;