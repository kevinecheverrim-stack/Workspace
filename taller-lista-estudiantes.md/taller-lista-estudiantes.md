### 📄 Lista.jsx

```jsx
import Estudiante from "./Estudiante";

function Lista() {
  return (
    <div>
      <Estudiante nombre="Carlos" edad={21} />
      <Estudiante nombre="Ana" edad={19} />
    </div>
  );
}

export default Lista;