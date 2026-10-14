import TodoApp from './components/TodoApp';
import './App.css';

function App() {
  return (
    <div className="main-layout">
      {/* Contenedor principal de la Mini Aplicación */}
      <main className="app-card-wrapper">
        <TodoApp />
      </main>


    </div>
  );
}

export default App;
