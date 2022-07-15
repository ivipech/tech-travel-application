import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container, NewsletterContainer } from './styles';

function Newsletter(props) {
  const { theme } = props;

  return (
    <Container theme={theme} className="pv4">
      <NewsletterContainer className="flex flex-row items-center">
        <div>
          <h3>Registrate y recibe ofertas</h3>
        </div>
        <div>Al registrarte estas aceptando los terminos y condiciones</div>
        <div className="flex flex-column">
          <p className="f6">Siguenos en nuestras redes</p>
          <div className="flex flex-row">
            <Link to="https://www.facebook.com/erika.pechd.1">
              <FaFacebook size={20} color="black" />
            </Link>
            <Link to="https://twitter.com/pechybu">
              <FaTwitter size={20} color="black" />
            </Link>
            <Link to="https://www.youtube.com/channel/UCcRMDf9BDUqRTymg4CI9kMw">
              <FaYoutube size={20} color="black" />
            </Link>
          </div>
        </div>
      </NewsletterContainer>
    </Container>
  );
}

export default Newsletter;
