# Practica Integradora

**INSTALAR DEPENDENCIAS:**

```bash
npm install
```

## Objetivo

### Skills para Logging

- [✓] Comprender la importancia de utilizar un logger
- [✓] Comprender el uso de Winston Logger y aplicarlo
- [✓] Entender los diferentes tipos de transportes
- [✓] Entender sobre los niveles de logging
- [✓] Configurar nuestros propios niveles de logging

### Skills para documentación

- [✓] Comprender la importancia de documentar
- [✓] Comprender el uso de Swagger para documentación
- [✓] Realizar la Swaggerización por archivos de cada Módulo
- [✓] Comprender sobre los elementos que compone un módulo Swaggerizado:
  - Schemas
  - Inputs
  - RequestBodies
  - Responses
  - etc

### Skills para testing

- [✓] Comprender sobre módulos de Testing
- [✓] Conocimientos de realización de Testing unitario
- [✓] Conocimiento sobre Test de integración
- [✓] Uso de Mocha
- [✓] Uso de Chai
- [✓] Uso de SuperTest

---

## Consigna - Tareas a realizar

Aspectos a incluir

### Modificaciones al modelo de User

- [✓] Agregar propiedad `documents` al modelo de User:
  - Tipo: Array de objetos
  - Propiedades de cada objeto:
    - `name`: String (Nombre del documento)
    - `reference`: String (link al documento)
  - Nota: No es necesario crear nuevo modelo de Mongoose
- [✓] Agregar propiedad `last_connection` al modelo de User:
  - Debe actualizarse automáticamente con cada:
    - Proceso de login
    - Proceso de logout

### Endpoint para subir documentos

- [✓] Crear endpoint `POST /api/users/:uid/documents` que:
  - Permita subir uno o múltiples archivos
  - Actualice el atributo `documents` del usuario
  - Utilice middleware Multer para manejar la carga de archivos
- [✓] Modificar middleware Multer para guardar en carpetas diferentes:
  - Imágenes de mascotas → Carpeta `pets`
  - Documentos → Carpeta `documents`

### Tests funcionales

- [✓] Desarrollar tests para endpoints de sesión:
  - `POST /api/sessions/register`
  - `POST /api/sessions/login`
- [✓] Utilizar módulos de testing:
  - Mocha
  - Chai
  - SuperTest

### Sugerencias

- Para implementación de Multer, usar como referencia el endpoint existente:
  - `POST /api/pets/withimage`

---
