import React from 'react'
import './card.css'
export default function Card(props) {
    const { Topic, Ques, Discription } = props;
    return (
        <article className='card'>
            <div className='data'>
                <h3>{Topic}</h3>
                <h3>{Ques}</h3>
                <h4>{Discription}</h4>

            </div>
            <button className='btn'><a className='btn-a' href="/Questionlist">Start Now</a></button>
        </article>
    );
};