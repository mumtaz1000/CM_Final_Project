import React from "react"
import RecatDOM from "react-dom"
import pic from "./img/0.jpg"
class Header extends React.Component{
    render()
    {
        return (
            <header class="main-header">
            <nav class="nav">
              <ul class="nav__list">
                <li class="nav__item"><a href="#home" class="nav__link">Home</a></li>
                <li class="nav__item">
                  <a href="#services" class="nav__link">My Services</a>
                </li>
                <li class="nav__item">
                  <a href="#work" class="nav__link">My Work</a>
                </li>
              </ul>
            </nav>
       
            <section class="intro" id="home">
              <h1 class="section__title section__title--intro">
                Hi, I am <strong>Mumtaz Fatima.</strong>
              </h1>
              <p class="section__subtitle section__subtitle--intro">front-end dev</p>
              <img src={pic} alt="my profile picture" class="intro__img" />
            </section>
          </header>
        )
    }
}
export default Header