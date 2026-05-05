# 🔗 8. Usar Lista en App (React)

Este ejemplo muestra cómo integrar el componente `Lista` dentro de `App.jsx` para renderizar una lista de estudiantes.

---

## 📄 App.jsx

En este archivo se importa el componente `Lista` y se utiliza dentro del componente principal.

```jsx
import Lista from "./components/Lista";

function App() {
  return (
    <>
      <h1>Lista de Estudiantes</h1>
      <Lista />
    </>
  );
}

export default App;