import React from 'react'
import Header from '../components/Header'


function Home() {
  return (
    <div>
      <Header></Header>
      
      <div className='introduction felx-with-center' style={{backgroundImage: 'url(./introbg.svg)'}}>

        <div>
          <h1>Krzysztof K-n</h1>

          <div className="intro-content d-flex justify-content-between">
            <p>Frontend <br/> Developer </p>
            <button className='primary-button font-bold'>Get Strated</button>

          </div>
        </div>
          
          
      </div>       

    </div>
  )
}

export default Home