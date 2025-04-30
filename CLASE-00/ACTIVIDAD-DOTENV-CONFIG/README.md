
---

### 4. **Manager (managers/book.manager.js)**

El manager **accede directamente** a la "base de datos" (en tu caso `db/books.json`).  
Es quien sabe "dónde" y "cómo" obtener los datos.

```javascript
import fs from 'fs/promises';
import path from 'path';

const booksFilePath = path.resolve('db', 'books.json');

export const getBooksManager = async () => {
  const data = await fs.readFile(booksFilePath, 'utf-8');
  const books = JSON.parse(data);
  return books;
};
```

---

# 🎯 Resumen rápido:

| Módulo        | Responsabilidad                           |
|---------------|--------------------------------------------|
| **Route**     | Definir la ruta y qué controller atiende.  |
| **Controller**| Manejar la request y response.             |
| **Service**   | Aplicar reglas de negocio.                 |
| **Manager**   | Leer datos de la base de datos (JSON).      |

---