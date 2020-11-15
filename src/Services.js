import React from "react"
import ReactDOM from "react-dom"
import ServiceFrontEnd from "./ServiceFrontEnd"
import ServiceUiUX from "./ServiceUiUx"
import ServiceECommerce from "./ServiceECommerce"
class Services extends React.Component{
    render(){
        return (
        <div class="my-services" id="services">
          <h2 class="section__title section__title--services">What I do</h2>
          <div class="services">
           <ServiceFrontEnd />
           <ServiceUiUX />
          <ServiceECommerce />
          </div>
        </div>
        );
    }
}
export default Services