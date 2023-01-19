import React, { useState } from 'react';

// Componente funzionale senza stato --------------------------
//Dichiarando una funzione
// function Figlio(props) {
//   return (
//     <div>
//       <h1>Io sono il figlio</h1>
//     </div>
//   );
// }

//Usando l'arrow function
// const Figlio = (props) => {
//   return (
//     <div>
//       <h1>Io sono il figlio</h1>
//     </div>
//   );
// };

//Componente funzionale con stato -----------------------------
//Dichiarando una funzione
function Figlio(props) {
  const [nome, setNome] = useState('Apple');
  return (
    <div>
      <h1>Io sono il figlio</h1>
    </div>
  );
}
export default Figlio;
