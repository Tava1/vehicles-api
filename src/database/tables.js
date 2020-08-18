const db = require('./connection')


const brands = (`CREATE TABLE IF NOT EXISTS Brands 
                (
                  IDBrand INTEGER PRIMARY KEY AUTOINCREMENT, 
                  Name TEXT NOT NULL, 
                  Image BLOB NOT NULL
                )
              `)


const cars = (`CREATE TABLE IF NOT EXISTS Cars 
              (
                ID INTEGER PRIMARY KEY AUTOINCREMENT,
                Model TEXT NOT NULL,
                Description TEXT NOT NULL,
                HorsePower INTEGER NOT NULL,
                TorqueNm INTEGER NOT NULL,
                Price REAL NOT NULL,
                TypeVehicle TEXT NOT NULL
                IDBrand INTEGER NOT NULL,
                FOREIGN KEY (IDBrand) REFERENCES Brands (IDBrand),
              )
            `)


const motorcycle = (`CREATE TABLE IF NOT EXISTS Motorcycle
        (
          ID INTEGER PRIMARY KEY AUTOINCREMENT,
          Model TEXT NOT NULL,
          Description TEXT NOT NULL,
          Cylinder INTEGER NOT NULL,
          TorqueNm INTEGER NOT NULL,
          Price REAL NOT NULL,
          TypeVehicle TEXT NOT NULL
          IDBrand INTEGER,
          FOREIGN KEY (IDBrand) REFERENCES Brands (IDBrand),
        )
      `)

db.serialize(() => {
  // db.run(brands)
  // db.run(cars)
  db.run(motorcycle)
})


//close the database connection
db.close((err) => {
  if (err)
    return console.log(err.message)
  console.log('Database is now closed.')
});