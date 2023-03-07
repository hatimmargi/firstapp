import Header from './Header'
import Footer from './Footer'
import MainContent from './MainContent'
import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

function MyPage() {
    return (
    <div>
        <Header />
        <MainContent />
        <Footer />
    </div>
    )
}
ReactDOM.render(<MyPage/>, document.getElementById("root")) 