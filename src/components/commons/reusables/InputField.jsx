export default function InputField({ label, ...rest }) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <label>{label}</label>
      <input
        {...rest}
        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
      />
    </div>
  );
}
