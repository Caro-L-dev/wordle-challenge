export default function Instructions() {
  return (
    <div className="px-5 pb-4 border border-blue-500 rounded">
      <h2 className="font-bold text-3xl my-3">Comment jouer ?</h2>
      <p>Devine le WORDLE en 6 essais.</p>

      <ul>
        <li>
          <p>Chaque mot doit comporter 5 lettres.</p>
        </li>
        <li>
          <p>La couleur des touches changent en fonction de vos recherches.</p>
        </li>
      </ul>
      <div>
        <h3>Exemples :</h3>
        <div>
          <p>CHIEN</p>
          <p>C se trouve bien dans le mot et est placé au bon endroit.</p>
        </div>
        <div>
          <p>AVION</p>
          <p>A se trouve bien dans le mot mais est placé au mauvais endroit.</p>
        </div>
        <div>
          <p>FORME</p>
          <p>E n'est pas utilisé dans le mot mystère.</p>
        </div>
      </div>
    </div>
  );
}
