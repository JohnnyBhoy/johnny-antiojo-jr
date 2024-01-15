import React from "react";
import myadmin from "../../image/database/phpmyadmin.png";
import mongodb from "../../image/database/mongodb.png";
import mysql from "../../image/database/mysql.png";

const Database = () => {
  const databases = [myadmin, mongodb, mysql];

  return (
    <div>
      <h5 className="text-blue-500 font-semibold">Databases</h5>
      <div className="lg:grid grid-wrap grid-cols-3 gap-2">
        {databases?.map((database, i) => (
          <img
            src={database}
            alt=""
            className="h-12 w-12 shadow-lg p-2 rounded"
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Database;
