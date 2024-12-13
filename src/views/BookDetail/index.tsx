import { useBookState } from "../../hooks/useBookState";

const BookDetail = () => {
  const { bookDetail } = useBookState();

  if (!bookDetail) {
    return <p>No book selected.</p>;
  }

  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    author,
    category,
    images,
  } = bookDetail;

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "16px" }}>{title}</h1>
      <p style={{ fontSize: "18px", marginBottom: "8px" }}>
        <strong>Author:</strong> {author}
      </p>
      <p style={{ marginBottom: "8px" }}>
        <strong>Category:</strong> {category}
      </p>
      <p style={{ marginBottom: "8px" }}>
        <strong>Price:</strong> ${price.toFixed(2)}{" "}
        <span style={{ color: "green" }}>
          ({discountPercentage}% off!)
        </span>
      </p>
      <p style={{ marginBottom: "8px" }}>
        <strong>Rating:</strong> {rating} ⭐
      </p>
      <p style={{ marginBottom: "8px" }}>
        <strong>Stock:</strong> {stock} units available
      </p>
      <p style={{ marginBottom: "16px" }}>
        <strong>Description:</strong> {description}
      </p>

      <div>
        <h2 style={{ fontSize: "20px", marginBottom: "12px" }}>Gallery</h2>
        <div style={{ display: "grid", gap: "10px", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))" }}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${title} - ${index + 1}`}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookDetail;