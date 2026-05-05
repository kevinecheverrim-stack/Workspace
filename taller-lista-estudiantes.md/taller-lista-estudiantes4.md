# 📦 Uso de Props en React

Este ejemplo muestra cómo utilizar **props** en React para pasar datos entre componentes.

---

## 📄 App.jsx

En este archivo se renderiza el componente `Estudiante` con diferentes datos:

```jsx
import Estudiante from "./components/Estudiante";

function App() {
  return (
    <>
      <h1>Lista de Estudiantes</h1>

      <Estudiante nombre="Juan" edad={20} />
      <Estudiante nombre="Maria" edad={22} />
    </>
  );
}

export default App;