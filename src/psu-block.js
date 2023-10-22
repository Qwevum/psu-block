import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class PsuBlock extends LitElement {
  static properties = {
    header: { type: String },
  }

  static get styles() {
  return css`
    :host {
      display: inline-block;
      
    }

    .card1 {
      color: #fefefe;
      background-color: #001e44;
      height: 356px;
      width: 440px;
      text-align: center;
      align-items: center;
      padding: 0 14px 0 14px;
      margin-top: 20px;
      margin-left: 20px;
    }
      `;
    
  
  }

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
    <main>
      <div class="card1">
        <div class="content">
          <div>
            <h2>8,000+ Penn State scholarships</h2>
          </div>
        </div>
      </div>
    </main>
    `
  }
}

customElements.define('psu-block', PsuBlock);
