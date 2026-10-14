// c) Uso de estado (useState) para cambiar algo en pantalla
// d) Lista renderizada dinámicamente a partir de un arreglo (usando .map())

import { useState } from 'react';
import Titulo from './Titulo';
import Resumen from './Resumen';
import Tarea from './Tarea';

const TAREAS_POR_DEFECTO = [
  { id: 1, texto: 'Terminar conceptos del curso de React', fecha: 'Hoy', completada: true },
  { id: 2, texto: 'Subir tarea a GitHub', fecha: 'Hoy', completada: true },
  { id: 3, texto: 'Crear el GitPages', fecha: 'Hoy', completada: false },
  { id: 4, texto: 'Subir en asignacion', fecha: 'Mañana', completada: false },
];

function TodoApp() {
  const [tareas, setTareas] = useState(TAREAS_POR_DEFECTO);
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [filtro, setFiltro] = useState('todas');
  const [mostrarNotas, setMostrarNotas] = useState(false);
  const [metaDiaria, setMetaDiaria] = useState(4);

  const agregarTarea = (e) => {
    e.preventDefault();
    if (!nuevaTarea.trim()) return;

    const nueva = {
      id: Date.now(),
      texto: nuevaTarea.trim(),
      fecha: 'Hoy',
      completada: false
    };

    setTareas(prev => [nueva, ...prev]);
    setNuevaTarea('');
  };

  const toggleTarea = (id) => {
    setTareas(prev =>
      prev.map(t => t.id === id ? { ...t, completada: !t.completada } : t)
    );
  };

  const eliminarTarea = (id) => {
    setTareas(prev => prev.filter(t => t.id !== id));
  };

  const total = tareas.length;
  const completadas = tareas.filter(t => t.completada).length;
  const pendientes = total - completadas;

  const tareasFiltradas = tareas.filter(t => {
    if (filtro === 'pendientes') return !t.completada;
    if (filtro === 'completadas') return t.completada;
    return true;
  });

  return (
    <div className="todo-app-card">
      <Titulo />
      <Resumen
        total={total}
        completadas={completadas}
        pendientes={pendientes}
      />

      <div className="meta-card">
        <div className="meta-info">
          <span className="meta-title">Meta del día:</span>
          <span className="meta-desc">
            Has completado <strong>{completadas}</strong> de tu objetivo de <strong>{metaDiaria}</strong> tareas
          </span>
        </div>
        <div className="meta-controls">
          <button
            type="button"
            className="btn-counter"
            onClick={() => setMetaDiaria(prev => Math.max(1, prev - 1))}
            title="Reducir meta"
          >
            -
          </button>
          <span className="meta-valor">{metaDiaria}</span>
          <button
            type="button"
            className="btn-counter"
            onClick={() => setMetaDiaria(prev => prev + 1)}
            title="Aumentar meta"
          >
            +
          </button>
        </div>
      </div>

      <form onSubmit={agregarTarea} className="form-nueva-tarea">
        <input
          type="text"
          className="input-tarea"
          placeholder="Agrega una tarea"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
        <button type="submit" className="btn-agregar">
          + Agregar
        </button>
      </form>

      <div className="toolbar-tareas">
        <div className="filtros-grupo">
          <button
            type="button"
            className={`btn-filtro ${filtro === 'todas' ? 'activo' : ''}`}
            onClick={() => setFiltro('todas')}
          >
            Todas ({total})
          </button>
          <button
            type="button"
            className={`btn-filtro ${filtro === 'pendientes' ? 'activo' : ''}`}
            onClick={() => setFiltro('pendientes')}
          >
            Pendientes ({pendientes})
          </button>
          <button
            type="button"
            className={`btn-filtro ${filtro === 'completadas' ? 'activo' : ''}`}
            onClick={() => setFiltro('completadas')}
          >
            Hechas ({completadas})
          </button>
        </div>
      </div>

      <div className="lista-contenedor">
        {tareasFiltradas.length === 0 ? (
          <div className="estado-vacio">
            <p className="texto-vacio">No hay tareas en esta sección.</p>
          </div>
        ) : (
          <ul className="lista-tareas">
            {tareasFiltradas.map((tarea) => (
              <Tarea
                key={tarea.id}
                id={tarea.id}
                texto={tarea.texto}
                completada={tarea.completada}
                fecha={tarea.fecha}
                onToggle={toggleTarea}
                onEliminar={eliminarTarea}
              />
            ))}
          </ul>
        )}
      </div>

      <div className="seccion-toggle">
        <button
          type="button"
          className="btn-toggle-info"
          onClick={() => setMostrarNotas(prev => !prev)}
        >
          {mostrarNotas ? 'Ocultar consejos' : 'Ver consejos'}
        </button>

        {mostrarNotas && (
          <div className="panel-notas-reveal">
            <p className="nota-item">
              <strong>Técnica Pomodoro:</strong> Trabaja 25 minutos seguidos y descansa 5 minutos.
            </p>
            <p className="nota-item">
              <strong>Organización:</strong> Divide las metas grandes en pequeñas tareas diarias para avanzar más rápido.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TodoApp;