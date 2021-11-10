import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import plaque from './assets/plaque.png';
import product from './assets/product.png';
import ray from './assets/ray.png';
import engineer from './assets/engineer.png';
import logo from './assets/logo.png';

import ProductBox from './components/ProductBox';

function App() {
  const products = [
    {
      image: product,
      title: 'Painel Solar Fotovoltaico 150W - Resun RS6E-150P',
      price: '379,00',
    },
    {
      image: product,
      title: 'Painel Solar Fotovoltaico 150W - Resun RS6E-150P',
      price: '379,00',
    },
    {
      image: product,
      title: 'Painel Solar Fotovoltaico 150W - Resun RS6E-150P',
      price: '379,00',
    },
    {
      image: product,
      title: 'Painel Solar Fotovoltaico 150W - Resun RS6E-150P',
      price: '379,00',
    },
  ];

  return (
    <div className="App">
      <Header />

      <div className="home">
        <div className="container">
          <h1>
            Faça a sua
            <span> energia </span>
            trabalhar por você.
          </h1>
        </div>
      </div>

      <div className="apresentation">
        <div className="container">
          <div>
            <h1>Placas</h1>
            <h2>Fotovoltaícas</h2>

            <span>
              O painel solar (placa solar fotovoltaica) é o equipamento
              essencial para se gerar energia fotovoltaica, o qual é composto
              por células fotovoltaicas fabricadas a partir de materiais
              semicondutores, como o silício, que absorvem a luz do sol e geram
              energia elétrica pelo efeito fotovoltaico.
            </span>

            <button>SABER MAIS</button>
          </div>

          <div>
            <img src={plaque} alt="" />
          </div>
        </div>
      </div>

      <div className="our-products">
        <img src={ray} alt="" className="ray" />

        <div className="container">
          <h1>Nossos Produtos</h1>

          <div className="products">
            {products.map((product) => (
              <ProductBox product={product} />
            ))}
          </div>

          <button disabled={true}>VER MAIS</button>
        </div>
      </div>

      <div className="about-us">
        <div className="container">
          <div>
            <h1>Quem</h1>
            <h1>Somos?</h1>

            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </span>

            <button>ENTRAR EM CONTATO</button>
          </div>

          <div>
            <img src={engineer} alt="" />
          </div>
        </div>
      </div>

      <div className="contact">
        <div className="container">
          <div className="contact-box">
            <div>
              <h2>
                Entre em contato conosco e se desejar solicite o seu orçamento
                sem compromisso, o que acha de começar a gerar a sua própria
                energia?
              </h2>

              <img src={logo}></img>
            </div>
            <div>
              <form>
                <input type="text" placeholder="Nome" />
                <input type="email" placeholder="E-mail" />
                <textarea placeholder="Envie uma mensagem"></textarea>

                <button>Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
