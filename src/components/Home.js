import React from 'react'
import './Home.css';

function Home(props) {
    let myStyle = {
        color: props.mode === 'dark'?'white':'#0c0d2a',
        backgroundColor: props.mode === 'dark'?'#0c0d2a':'white'
    }
  return (
    <div className='container Home1' style={myStyle}>
      Welcome to the largest text editor of India.
    </div>
  )
}

export default Home
