# LIST - OWASP 2021

## 1. Broken Access Control

- Protección de sesión con middelware - authentication
- Token - JWT
- No se exponga '/admin/12345', /user/988769 <- tenga un control
- Cuidado con el no manejo de roles

## 2. Cryptographic failures

- Asegurar que bcrypt -> salt <- nuestro encriptado sea lo suficientemente fuerte para un entorno real
- No guardar una contraseña cual texto plano (ni temporalmente)
- token <- fecha de vencimiento

## 3. Injection

- Querie -> SQL o No SQL - ODM || ORM
- ODM - evitar eval, $where (operadores dinámicos)
- req.body, req.query, req.params
- Validar los tipos de datos -> Plantillas

## 4. Insecure Design

- Evitar datos incoherentes
- Evitar type text para lo que un password

## 5. Security Misconfiguration

- Configurar mal Mongo Cloud (ip public)
- Configurar mal las cors
- Configurar mal el socket
- Configurar mal multer
- Configurar mal logger (ejemplo: mostrar info de error en production que no debemos mostrar)

## 6. Vulnerable and outdated components

- Mantener actualizadas las dependencias
  - 'npm outdated'
  - 'npm audit'
- Evitar paquetes sin mantenimiento
- Evitar tener dependencias que no utilicemos

## 7. Identification and authentication failures

- No texto plano en password
- Usar bcrypt para datos sensibles
- Cuidado con el flow de recuperar contraseña
- Implementar JWT

## 8. Software and Data Integrity Failures

- No usar módulos (dependencias) no seguras de terceros
- Evitar integrar dependencias no necesarias

## 9. Logging and monitoring failures

- Implementar sistema de logger
- No logear datos sensibles
- Nunca mostrar el document completo de un user
- Generar alertas en base al monitoreo de datos

## 10. Server Side Request Forgery (SSRF)

- Validar la URL que quiere hacer una petición a nuestro server
- Restringir a URLs internas o privadas
