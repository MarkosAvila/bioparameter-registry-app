[Go to markospy](https://github.com/markospy)

**Status:** **en** **desarrollo**

# **BioDash**

BioDash es una aplicación web full-stack diseñada para el registro y monitoreo de parámetros cardiovasculares y niveles de glucosa en sangre de pacientes. Está dirigida principalmente a profesionales de la salud, pero puede ser útil para cualquier persona que necesite hacer un seguimiento de sus parámetros vitales.

## **Estructura del Proyecto**
El proyecto está dividido en dos partes principales:

1. Backend (API REST)
2. Frontend (Aplicación React)

### Backend

El backend está construido con FastAPI y SQLAlchemy, ofreciendo las siguientes características:

* Sistema de seguridad utilizando OAuth2 y JWT
* Verificación de email mediante código de verificación
* Consultas complejas a la base de datos
* Manejo de archivos estáticos

## **Principales Endpoints**
* `/patients`: CRUD de pacientes
* `/doctor`: Gestión de información del doctor
* Endpoints para registro de parámetros cardiovasculares y niveles de glucosa


## **Frontend**
El frontend está desarrollado con React, Vite y TypeScript, utilizando las siguientes tecnologías y librerías:

* React Router para la navegación
* Tailwind CSS para los estilos
* Radix UI para componentes de interfaz de usuario
* Recharts para la visualización de datos

## **Principales Componentes**
* DoctorDashboard: Panel principal del doctor
* PatientDetail: Detalles y gráficos de un paciente específico
* PatientList: Lista de todos los pacientes
* Varios componentes de UI reutilizables (Card, Table, etc.)


## **Instalación y Ejecución**

### Backend
1. Navega al directorio backend
2. Instala las dependencias: pip install -r requirements.txt
3. Configura las variables de entorno en un archivo .env
4. Ejecuta el servidor: uvicorn main:app --reload

### Frontend
1. Navega al directorio frontend
2. Instala las dependencias: npm install
3. Ejecuta el servidor de desarrollo: npm run dev

## **Características Principales**
* Registro y autenticación de doctores
* Gestión de pacientes (agregar, editar, eliminar)
* Registro y visualización de parámetros cardiovasculares y niveles de glucosa
* Gráficos históricos de mediciones
* Interfaz responsiva y amigable

## **Contribuir**
Si deseas contribuir al proyecto, por favor:

1. Haz un fork del repositorio
2. Crea una nueva rama con tu funcionalidad
3. Haz commit de tus cambios
4. Crea un pull request

## **Licencia**
Este proyecto está bajo la licencia MIT.