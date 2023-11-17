import React, { useEffect, useState } from "react";

const Alert = ({ type = "success", message = "", dismissable = true }) => {
  const [montarCompoenente, setMontarComponente] = useState(true);
  let [style, setStyle] = useState(" bg-slate-200");

  useEffect(() => {
    setStyle(" bg-slate-200");
    type === "success"
      ? setStyle(" bg-lime-200 ")
      : type === "error"
      ? setStyle(" bg-red-500")
      : type === "warning" && setStyle(" bg-orange-200");
  }, [type]);

  return (
    <>
      {montarCompoenente ? (
        <div
          className={`absolute top-0 flex justify-around items-center w-full py-2 ${style}`}
        >
          <p className="font-bold text-slate-700 ">{message}</p>
          {dismissable && (
            <button
              onClick={() => setMontarComponente(false)}
              className="bg-slate-800 text-white rounded-xl cursor-pointer px-5 py-1"
            >
              Cerrar
            </button>
          )}
        </div>
      ) : null}
    </>
  );
};

export default Alert;
