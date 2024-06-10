import sql from "./db.js";

// sql`
//   DROP table if exists videos;
// `.then(() => {
//   console.log('Table dropped');
// })

sql`
  CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    duration INTEGER NOT NULL
  );
`.then(() => {
  console.log('Table created!')
})