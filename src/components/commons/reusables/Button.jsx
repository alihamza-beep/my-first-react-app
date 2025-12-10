export default function Button({ text, onClick }) {
  return (
    <button 
      onClick={onClick}
      style={{
        padding: "10px 20px",
        background: "#646cff",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
}
