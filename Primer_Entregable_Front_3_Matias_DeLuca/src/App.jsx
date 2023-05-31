import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [student, setStudent] = useState({
    name: "Matias De Luca",
    commission: 9,
    age: 25,
    favourite_movie: "Star Wars",
  });

  const [students, setStudents] = useState([{}]);

  const handleSubmit = (e) => { e.preventDefault();

    console.log("student to add :>> ", student);

    setStudents((prevState) => [...prevState, student]);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <div className="flex flex-col items-center">
        <h1>Carga de estudiantes</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center  bg-white rounded-md w-[300px] shadow-md p-4"
        >
          <div className="flex flex-col">
            <label>Nombre</label>
            <input
              type="text"
              placeholder=""
              className="border-green-500 border-2 rounded-md  px-2"
              onChange={(e) => {
                setStudent((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }));
              }}
            />
          </div>
          <div className="flex flex-col">
            <label>Camada</label>
            <input
              type="text"
              placeholder=""
              className="border-green-500 border-2 rounded-md  px-2"
              onChange={(e) => {
                setStudent((prevState) => ({
                  ...prevState,
                  commission: e.target.value,
                }));
              }}
            />
          </div>
          <div className="flex flex-col">
            <label>Edad</label>
            <input
              type="text"
              placeholder=""
              className="border-green-500 border-2 rounded-md  px-2"
              onChange={(e) => {
                setStudent((prevState) => ({
                  ...prevState,
                  age: e.target.value,
                }));
              }}
            />
          </div>

          <button className="bg-yellow-300 text-white rounded-md px-2 py-1 mt-3 hover:bg-blue-500 transition-all duration-300 ease-in-out">
            Sumar estudiante
          </button>
        </form>
      </div>

      <div className="grid grid-flow-row-dense grid-cols-3 gap-3">
        {students.map((student, index) => {
          return (
            <div key={index}>
              <Card student={student} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default App;
