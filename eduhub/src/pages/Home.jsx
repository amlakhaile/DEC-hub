import React from 'react'
import Navbar from '../components/Navbar'
import CardApps from '../components/CardApps'

const Home = () => {
  return (
    <div>
     <Navbar />
     <div className='flex flex-wrap justify-evenly items-center  py-11  '>
         <CardApps title={'Cafeteria'} description={"Description of Cafeteria"} />
         <CardApps title={'Cafeteria'} description={"Description of Cafeteria"} />
         <CardApps title={'Cafeteria'} description={"Description of Cafeteria"} />
         <CardApps title={'Cafeteria'} description={"Description of Cafeteria"} />
         <CardApps title={'Cafeteria'} description={"Description of Cafeteria"} />
         <CardApps title={'Cafeteria'} description={"Description of Cafeteria"} />
     </div>
     
    </div>
  )
}

export default Home
