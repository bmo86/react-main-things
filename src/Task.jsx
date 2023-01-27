import taskCss from "./task.css";

export function TaskCard({ready}) {
  /*  <--- STYLES LINES -->
    const cardStyles = { background: "#202020", color: "#fff", padding: "20px" }
    const titleStyle = { fontWeight: "lighter" } */
  return (
    <div className="card">
      <h1>Mi primer Tarea</h1>
      <span className={ready ? "bg-green" : "bg-red"} >{ready ? "Tarea Realizada" : "Tarea Pendiente"}</span>
    </div>
  );
}
