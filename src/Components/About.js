import React from "react";

export default function About(props) {



  return (
    <div>
      <div className="container my-3">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{backgroundColor: props.mode==='dark'? '#153f7d' : 'white',
                     color:props.mode==='dark'? 'white' : 'black' }}
              >
                <strong>About TextutilsByArun</strong> 
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{backgroundColor: props.mode==='dark'? '#153f7d' : 'white',
                     color:props.mode==='dark'? 'white' : 'black' }} >
                TextutilsbyArun Is My First React Base Web Application.I'm Arun & I'm a Full-Stack Web Developer. I provide Web Development Services of all type, whether a multi-page web app or a single page web app.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={{backgroundColor: props.mode==='dark'? '#153f7d' : 'white',
                     color:props.mode==='dark'? 'white' : 'black' }}
              >
                <strong>Contact Me</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{backgroundColor: props.mode==='dark'? '#153f7d' : 'white',
                     color:props.mode==='dark'? 'white' : 'black' }} >
                Interested Clients can Contact me Over my personal
                  Email: <a href="workwitharun@gmail.com" style={{color:props.mode==='dark'? 'pink' : 'blue'}}>workwitharun@gmail.com</a>
                  Or 
                  You can visit my personal Web Development Services Website here : <a href="https://codewitharun.netlify.app/" style={{color:props.mode==='dark'? 'pink' : 'blue'}}>https://codewitharun.netlify.app</a>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
  );
}
