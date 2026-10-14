
function Titulo() {
  const opcionesFecha = { weekday: 'long', day: 'numeric', month: 'long' };
  const fechaHoy = new Date().toLocaleDateString('es-ES', opcionesFecha);
  const fechaFormateada = fechaHoy.charAt(0).toUpperCase() + fechaHoy.slice(1);

  return (
    <header className="app-header">
      <div className="header-text">
        <span className="header-date">{fechaFormateada}</span>
        <h1 className="header-title">Organizador de tareas</h1>
        <p className="header-subtitle">Facilitador de organización personal</p>
      </div>
    </header>
  );
}

export default Titulo;
