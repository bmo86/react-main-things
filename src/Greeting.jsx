export function Greeting({ title, name = "usuario" }) {
  //destruturacion de un objeto
  return (
    <h1>
      {title}, dice {name}
    </h1>
  );
}

export function UserCard({ name, amount, married, address, points, greet }) {
  console.log(greet)
  return (
    <div>
      <h1>Name: {name} </h1>
      <p>Amount : 💲{amount}</p>
      <p>Marriend : {married ? "casado" : "Soltero"} </p>
      <p>Address : </p>
      <ul>
        <li>street : {address.street}</li>
        <li>City : {address.city}</li>
      </ul>
      <p>Points : {points}</p>

    </div>
  );
}
