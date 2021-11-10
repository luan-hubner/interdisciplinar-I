import './style.css';

import taesaLogo from '../../assets/taesa.png';

export default function Footer() {
  return (
    <footer>
      <div className="footer-bottom">
        <div className="container">
          <div className="left">
            <span>Av. das Cajueiras, n. 201</span>
            <span>Sinop, Mato Grosso</span>
          </div>
          <div className="middle">
            <ul>
              <li>HOME</li>
              <li>SOBRE</li>
              <li>SERVIÇOS</li>
              <li>PAINEL</li>
            </ul>
          </div>
          <div className="right">
            <img src={taesaLogo} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
