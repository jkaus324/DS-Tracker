import React from 'react'
import Header from '../components/Header';
import './QuestionList.css'
export default function Questionlist() {
    return (
    <>
    <footer className='footer'>
       <Header/>
    </footer>
    <div>
      <div className='head'>
      <h1>450 DSA Cracker</h1>
      </div>
      <table>
  <tr>
    <th></th>
    <th>id</th>
    <th>Questions</th>
  </tr>
  <tr>
    <td>100</td>
    <td>1</td>
    <td><a>Find the maximum and minimum element in an array</a></td>
  </tr>
  <tr>
    <td>100</td>
    <td>2</td>
    <td><a>Reverse the array</a></td>
  </tr>
  <tr>
    <td>100</td>
    <td>3</td>
    <td><a>Given an array which consists of only 0, 1 and 2. Sort the array without using any sorting algo</a></td>
  </tr>
  <tr>
    <td>100</td>
    <td>4</td>
    <td><a>Move all the negative elements to one side of the array</a></td>
  </tr>
  <tr>
    <td>100</td>
    <td>5</td>
    <td><a>Find the Union and Intersection of the two sorted arrays.</a></td>
  </tr>
  <tr>
    <td>100</td>
    <td>6</td>
    <td><a>Write a program to cyclically rotate an array by one.</a></td>
  </tr>
  <tr>
    <td>100</td>
    <td>7</td>
    <td><a>find Largest sum contiguous Subarray [V. IMP]</a></td>
  </tr>
  <tr>
    <td>100</td>
    <td>8</td>
    <td><a>Minimise the maximum difference between heights [V.IMP]</a></td>
  </tr>
  <tr>
    <td>100</td>
    <td>9</td>
    <td><a>Minimum no. of Jumps to reach end of an array</a></td>
  </tr>
  <tr>
    <td>100</td>
    <td>10</td>
    <td><a>find duplicate in an array of N+1 Integers</a></td>
  </tr>
</table>  
  </div>
    </>
    );
};