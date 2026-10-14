function Resumen({ total = 0, completadas = 0, pendientes = 0 }) {
  return (
    <div className="resumen-container">
      <div className="resumen-stat-box">
        <span className="stat-numero">{total}</span>
        <span className="stat-label">Total</span>
      </div>

      <div className="resumen-stat-box stat-pendientes">
        <span className="stat-numero">{pendientes}</span>
        <span className="stat-label">Pendientes</span>
      </div>

      <div className="resumen-stat-box stat-completadas">
        <span className="stat-numero">{completadas}</span>
        <span className="stat-label">Completadas</span>
      </div>
    </div>
  );
}

export default Resumen;
