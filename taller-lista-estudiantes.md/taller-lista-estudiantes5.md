# 📋 6. Crear componente Lista en React

Este ejemplo muestra cómo crear un componente `Lista` que reutiliza el componente `Estudiante`.

---

## 📄 Lista.jsx

El componente `Lista` agrupa varios estudiantes y reutiliza el componente `Estudiante`.

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