//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

const Card = (props) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-md w-[250px] shadow-md py-4">
      Soy una tarjeta
      <h2 className="text-2xl font-bold">{props.student.name}</h2>
      <p>Camada: {props.student.commission}</p>
    </div>
  );
};
