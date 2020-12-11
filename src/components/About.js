import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <div className="container animated fadeIn">
        <div className=" row ">
          <div className="col-12 ">
            <h2 className="text-center mt-5 ">Acerca de CartoVis</h2>
            <p className="text-center mt-2 ">
              CartoVis es un proyecto que tiene como objetivo geolocalizar
              infraestructuras y edificios presentes en España
            </p>
            <p className="text-center ">
              El proyecto ha sido desarrollado con React y NodeJS
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
