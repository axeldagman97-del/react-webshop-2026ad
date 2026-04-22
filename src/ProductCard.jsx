const ProductCard = ({ product }) => {
  return (
    <div
      className="card"
      style={{
        width: '18rem',
        border: '1px solid #ddd',
        padding: '10px',
        borderRadius: '8px',
      }}>
      <img
        className="card-img-top"
        src={product.thumbnail}
        alt={product.title}
        style={{ width: '100%', height: '150px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.category}</p>
        <p>
          <strong>${product.price}</strong>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
