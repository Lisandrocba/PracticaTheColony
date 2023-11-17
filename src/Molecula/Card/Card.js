export const Card = ({ title, content }) => {
    return (
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "16px",
          margin: "16px",
          width: "300px",
        }}
      >
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    );
  };
