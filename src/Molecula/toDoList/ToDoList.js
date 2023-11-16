import React from "react";

const ToDoList = ({ arreglo = [] }) => {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center bg-slate-700 my-20">
      {arreglo.length > 0 ? (
        arreglo.map((string) => {
          return (
            <div className="flex flex-column justify-center items-center px-5 py-10 m-5 bg-slate-100 border-solid border-3 border-slate-800 rounded-xl">
              <p className="font-bold">{string}</p>
            </div>
          );
        })
      ) : (
        <div className="flex flex-column justify-center items-center px-5 py-10 m-5 bg-slate-100 border-solid border-3 border-slate-800 rounded-xl">
          <p className="font-bold">Lista vacia</p>
        </div>
      )}
    </div>
  );
};

export default ToDoList;
