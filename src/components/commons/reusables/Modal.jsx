export default function Modal({ open, children }) {
  if (!open) return null;

  return (
    <div style={{
      position: "fixed", top: 0, left: 0,
      width: "100%", height: "100%",
      background: "rgba(0,0,0,0.5)"
    }}>
      <div style={{
        background: "#fff", padding: "20px",
        width: "400px", margin: "80px auto"
      }}>
        {children}
      </div>
    </div>
  );
}
