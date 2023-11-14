import React from 'react'
import './Home.css'
import Card from './../components/Card.jsx';

const CardItem = [
  {
      Topic: 'Array',
      Ques: 36,
      Discription: 'Not yet started',
      id: 1,
  },
  {
      Topic: 'Array',
      Ques: 36,
      Discription: 'Not yet started',
      id: 2,
  },
  {
      Topic: 'Array',
      Ques: 36,
      Discription: 'Not yet started',
      id: 3,
  },
  {
      Topic: 'Array',
      Ques: 36,
      Discription: 'Not yet started',
      id: 4,
  },
  {
      Topic: 'Array',
      Ques: 36,
      Discription: 'Not yet started',
      id: 5,
  },
  {
      Topic: 'Array',
      Ques: 36,
      Discription: 'Not yet started',
      id: 6,
  },
];

export default function Home() {
  console.log(CardItem);
  return (
    <div className='main'>
      <div className='head'>
      <h1>450 DSA Cracker</h1>
      <h2>Your Gateway to crack DSA 🔥</h2>
      <h2>Start Solving</h2>
      </div>
      <div className='heading'>
        <h4>Code your way to the top and win big in the 45 Day DSA Coding Challenge by CodeStudio!</h4>
      </div>
      <section className='Cardlist'>
          {CardItem.map((item) => {
            return <Card {...item} key={item.id} />;
          })}
      </section>
      <footer>
          {/* <h1>hi</h1> */}
      </footer>
  </div>
  )
}