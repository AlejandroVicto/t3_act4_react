function Tarea({
  id,
  texto,
  completada,
  prioridad = "Media",
  fecha = "Hoy",
  onToggle,
  onEliminar
}) {
  return (
    <li className={`tarea-item ${completada ? 'completada' : ''}`}>
      <label className="tarea-checkbox-wrapper">
        <input
          type="checkbox"
          checked={completada}
          onChange={() => onToggle(id)}
        />
        <span className="tarea-custom-check">
          {completada && (
            <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
              <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
      </label>

      <div className="tarea-info" onClick={() => onToggle(id)}>
        <span className="tarea-texto">{texto}</span>
        <div className="tarea-subinfo">
          <span className={`badge-prioridad prioridad-${prioridad.toLowerCase()}`}>
            {prioridad}
          </span>
          <span className="tarea-fecha">{fecha}</span>
        </div>
      </div>

      <button
        type="button"
        className="btn-eliminar-tarea"
        onClick={() => onEliminar(id)}
        title="Eliminar tarea"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </svg>
      </button>
    </li>
  );
}

export default Tarea;
