import React from "react"
import ReactDOM from "react-dom"
//import { copyright } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Footer extends React.Component{
    render(){
        return (
            <footer>
            <div class="social-list__link">
              <div>
                <a href="mailto:shereenfatima1000@gmail.com">
                  <i class="fa fa-envelope"></i>
                </a>
              </div>
              <div>
                <a href="www.linkedin.com/in/mumtaz-fatima" target="_blank">
                  <i class="fa fa-linkedin-square"></i>
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/mumtaz1000?tab=repositories"
                  target="_blank"
                >
                  <i class="fa fa-github"></i>
                </a>
              </div>
            </div>
            &copy;    Mumtaz Fatima
          </footer>
        )
    }
}

export default Footer