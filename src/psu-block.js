import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class PsuBlock extends LitElement {
  static properties = {
    header: { type: String },
    card: { type: String },
    active: { type: Boolean, reflect: true}
  }

  static get styles() {
  return css`
  :host {
      display: grid;
      margin: 0 150px;
      flex-direction: column;
      text-align: center;
      align-items: center;
      padding-top: 30px;
    }
  .card {
    background-color: #1e407c;
    color: #FFFFFF;
    width: 403.531px;
    height: 342.250px;
  }
  .content {
    font-family: 'Open Sans', sans-serif;;
    font-size: 2.3rem;
    font-weight: 700;
    padding-top: 100px;
    padding-right: 110px;
  }


  .card2 {
    margin-top: 26px;
    background-color: #FFFFFF;
    width: 403.531px;
    height: 342.250px;
  }
  .line1 {
    font-family: 'Open Sans', sans-serif;
    font-size: 2.3rem;
    font-weight: 700;
    margin-top: 170px;
    padding-top: 70px;
    padding-right: 180px;
    color: rgb(0, 30, 68);
  }
  .linefigure {
    display: flex;
    text-align: left;
    margin-left: 73px;
    margin-right: 60px;
    margin-top: 40px;
    background-color: #1e407c;
    font-size: .13rem;
    font-family: 'Open Sans', sans-serif;
    weight: 900;
  }
  .line2 {
    display: block;
    text-align: left;
    color:  rgb(0, 30, 68);
    font-size: 1.2rem;
    font-family: Roboto, "Franklin Gothic Medium", Tahoma, sans-serif;
    padding-top: 30px;
    padding-left: 10px;
    font-weight: 00;
    padding: 0 3.75rem;
    padding-left: 73px;
    padding-top: 20px;
  }

  .card3 {
    background-image: linear-gradient(to bottom, #144fb6, #0b2344);
    color: #FFFFFF;
    width: 403.531px;
    height: 342.250px;
    margin-top: 26px;
  }
  .content3 {
    font-family: 'Open Sans', sans-serif;;
    font-size: 1.60rem;
    font-weight: 700;
    padding-right: 10px;
    text-align: left;
    padding: 0 3.75rem;
    padding-top: 80px;
  }


  .card4 {
    background-image: url(https://www.statecollege.com/wp-content/uploads/2021/05/hub-lawn1.jpg);
    width: 403.531px;
    height: 342.250px;
    margin-top: 140px;
    position: relative
  }
  .card4::before {
    content: "";
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #FFFFFF;
  }
  .text4 {
    color: #FFFFFF;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.68rem;
    font-weight: 700;
    padding-right: 10px;
    text-align: left;
    padding: 0 3.75rem;
    padding-top: 125px;
    z-index: 1;
  }
  .linkimage {
    width: 24;
    height: 24;
    padding-left: 370px;
    padding-top: 73px;
    color: white;
  }


`;
    
  
  }

  constructor() {
    super();
    //this.header = 'My app';
  }

  render() {
    return html`
<main>
      <div class="card">                
        <div class="content">                    
            <div>
              88,000+<br> &nbsp;&nbsp;&nbsp;students
            </div>
        </div>  
      <div class="card2">                
        <div class="content2">                    
          <div class= "line1">
            58%
          </div>
          <div class= "linefigure">-</div>
          <div class= "line2">
            Of students are Pennslyvania Residents
          </div>
        </div>
      </div>
      <div class="card3">                
        <div class="content3">                    
          <h3>
            Students from 50 states and 145 countries
          </h3>
        </div>
     
      <div class="card4">
        <div class= "text4">
          Check Out Undergraduate Admissions statistics
        </div>
        <svg class= "linkimage" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask>
            <a href="https://admissions.psu.edu/apply/statistics/" class="card-link" aria-hidden="true"></a>
          </mask>
            <path d="M4.22222 22C3.61111 22 3.08796 21.7824 2.65278 21.3472C2.21759 20.912 2 20.3889 2 19.7778V4.22222C2 3.61111 
            2.21759 3.08796 2.65278 2.65278C3.08796 2.21759 3.61111 2 4.22222 2H10.8889C11.2037 2 11.4676 2.10648 11.6806 
            2.31944C11.8935 2.53241 12 2.7963 12 3.11111C12 3.42593 11.8935 3.68981 11.6806 3.90278C11.4676 4.11574 11.2037
             4.22222 10.8889 4.22222H4.22222V19.7778H19.7778V13.1111C19.7778 12.7963 19.8843 12.5324 20.0972 12.3194C20.3102 
             12.1065 20.5741 12 20.8889 12C21.2037 12 21.4676 12.1065 21.6806 12.3194C21.8935 12.5324 22 12.7963 22 13.1111V19.7778C22 
             20.3889 21.7824 20.912 21.3472 21.3472C20.912 21.7824 20.3889 22 19.7778 22H4.22222ZM8.66667 15.3333C8.46296 15.1296
              8.36111 14.8704 8.36111 14.5556C8.36111 14.2407 8.46296 13.9815 8.66667 13.7778L18.2222 4.22222H15.3333C15.0185 4.22222 
              14.7546 4.11574 14.5417 3.90278C14.3287 3.68981 14.2222 3.42593 14.2222 3.11111C14.2222 2.7963 14.3287 2.53241 14.5417 
              2.31944C14.7546 2.10648 15.0185 2 15.3333 2H20.8889C21.2037 2 21.4676 2.10648 21.6806 2.31944C21.8935 2.53241 22 2.7963
               22 3.11111V8.66667C22 8.98148 21.8935 9.24537 21.6806 9.45833C21.4676 9.6713 21.2037 9.77778 20.8889 9.77778C20.5741 
               9.77778 20.3102 9.6713 20.0972 9.45833C19.8843 9.24537 19.7778 8.98148 19.7778 8.66667V5.77778L10.1944 15.3611C9.99074
                15.5648 9.74074 15.6667 9.44445 15.6667C9.14815 15.6667 8.88889 15.5556 8.66667 15.3333Z" fill="#CCE9FF"></path>
          </svg>
      </div>                
      </main>
    `;

  }
}

customElements.define('psu-block', PsuBlock);
