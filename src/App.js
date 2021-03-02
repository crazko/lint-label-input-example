import "./styles.css";

const label = "label";

export default function App() {
  return (
    <form action="/">
      <div>
        <label>{label}</label>
        <input type="text" />
      </div>
      <div>
        <label>
          {label}
          <input type="text" />
        </label>
      </div>
    </form>
  );
}
