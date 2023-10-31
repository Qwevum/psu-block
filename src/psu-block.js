import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class PsuBlock extends LitElement {
  static get properties() {
    return {
    cardoverlay: { type: String, reflect: true},
      lineshape: { type: String, reflect: true},
      link1: { type: String, reflect: true},


      boxtext1: { type: String, reflect: true},
      boxtext2: { type: String, reflect: true},
      boxtext3: { type: String, reflect: true},
      boxtext4: { type: String, reflect: true},


      stateOne: { type: Boolean, reflect: true},
      stateTwo: { type: Boolean, reflect: true},
      stateThree: { type: Boolean, reflect: true},
      stateFour: { type: Boolean, reflect: true},
      stateFive: { type: Boolean, reflect: true},
      stateSix: { type: Boolean, reflect: true},
  }
}

  static get styles() {
  return css`
  :host([boxtext1]) .content {                    
      font-family: 'Open Sans', sans-serif;
      font-size: 2.2rem;
      font-weight: 700;
      padding-top: 80px;
      padding-left: 60px;
      padding-right: 60px;
      z-index: 2;
    }
    :host([boxtext2]) .content2 {
      color: #1e407c;
      font-family: 'Open Sans', sans-serif;;
      font-size: 1rem;
      font-weight: 600;
      padding-top: 13px;
      z-index: 2;
    }
    .lineshape {
      color: #1e407c;
      background-color: #1e407c;
      font-size:  1.9px;
      margin-top: 30px;
    }


    :host([stateOne]) .card {
      background-color: #1e407c;
      color: #FFFFFF;
      width: 403.531px;
      height: 342.250px;
    }


    :host([stateTwo]) .card {
      background-color: #FFFFFF;
      color: #0b2344;
      width: 403.531px;
      height: 342.250px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    }
   
    :host([stateThree]) .card {
      background-image: linear-gradient(to bottom, #144fb6, #0b2344);
      width: 403.531px;
      height: 342.250px;
      font-size: .5rem;
      color: white;
    }
   
    :host([stateFour]) .card {
      color: white;
      background-image: url(https://www.psu.edu/psu-edu-assets/images/power-facts/penn-state-tuition.jpg);
      width: 403.531px;
      height: 342.250px;
      background-size: cover;
    }
    :host([stateFour]) .cardoverlay{
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      z-index: 3;
    }
    :host([stateFour]) .cardlink {
     color: blue;
    }
   
    :host([stateFive]) .card {
      background-color: #001e44;
      color: #FFFFFF;
      width: 403.531px;
      height: 342.250px;
    }


    :host([stateSix]) .card {
      color: white;
      background-image: url(https://datadigest.psu.edu/files/2020/05/FallCampus2016-11.jpg);      
      background-size: cover;
      width: 403.531px;
      height: 342.250px;
    }
   
    :host([stateSix]) .cardoverlay{
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      z-index: 3;
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
            <div class="cardoverlay">          
                  <div class="content">                  
                ${this.boxtext1}
                <div class="lineshape">
                  ${this.lineshape}
                </div>
                <div class="content2">
                  ${this.boxtext2}
                </div>
              </div>
            </div>
          </div>
   
      </main>
    `;

  }
}


customElements.define('psu-block', PsuBlock);
