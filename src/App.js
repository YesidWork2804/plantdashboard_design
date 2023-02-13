import React from 'react'
import './app.css'
import Sidebar from './Components/SideBar_Section/sidebar'
import Body from './Components/Body_Section/Body'

const App = () => {
    return (
        <div className='container'>
            <Sidebar />
            <Body />
        </div>
    )
}

export default App