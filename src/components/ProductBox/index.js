import './style.css';

export default function ProductBox({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt="" />

      <h4>{product.title}</h4>

      <span>R$ {product.price}</span>
    </div>
  );
}
