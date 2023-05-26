import logo from '../assets/logo2.png'
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="footer-line"></div>
        <div className="footer-section">
            <img src={logo}></img>
        </div>
        <div className="footer-section">
          <p className="contact-info">Dirección: Calle Rivadavia 1326, Buenos Aires, Argentina</p>
          <p className="contact-info">Teléfono: +54 1168856953</p>
        </div>
        <div className="footer-section">
          <div className="payment-methods">
            <p className="payment-text">Medios de Pago</p>
            <div className="payment-icons">
              <img className = "img-footer" src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png" alt="Método de pago 1" />
              <img className = "img-footer" src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/banelco@2x.png" alt="Método de pago 2" />
              <img className = "img-footer" src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-naranja@2x.png" alt="Método de pago 3" />
            </div>
          </div>
        </div>
        <div className="fotter-section">
        <div className="social-media">
            <p className="payment-text">Redes</p>
            <div className="payment-icons">
                <a href='#'><img className = "img-footer" src="https://cdn-icons-png.flaticon.com/512/20/20673.png" alt="Facebook"></img></a>
                <a href='#'> <img className = "img-footer" src="https://cdn.icon-icons.com/icons2/2973/PNG/512/instagram_logo_icon_186929.png" alt="Instagram" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
