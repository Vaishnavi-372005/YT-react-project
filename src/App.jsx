import React from 'react'
import Navbar from './assets/components/Navbar'
import Sidebar from './assets/components/Sidebar'
import MainBox from './assets/components/MainBox'
import Style from './assets/components/css/App.module.css'

const App = () => {
  return (
    <>
      <div className={Style.layout}>
        <Navbar />
        <div className={Style.mainLayout}>
           <Sidebar />
            <MainBox/>
       </div>
      </div>
    </>
  )
}

export default App