# LEAGUE OF LEGENDS  M&M

![image](https://user-images.githubusercontent.com/74887104/142954442-37e67e67-286d-4612-a52e-aa067b6c7cf7.png)

## Índice

* [1. Resumen del proyecto](#1--resumen-del-proyecto)
* [2. Objetivos de aprendizaje](#2-objetivos-de-aprendizaje)
* [3. Consideraciones generales](#3-consideraciones-generales)
* [4. Historias de usuario](#4-historias-de-usuario)
* [5. Hacker edition](#5-hacker-edition)
* [6. Consideraciones técnicas](#6-consideraciones-técnicas)
* [7. Checklist](#7-checklist)

***

## 1. Resumen del proyecto

En este proyecto **se construyó una _página web_ para visualizar un
_conjunto (set) de datos_** adecuado a lo que el usuario
necesita.

Como entregable final se tiene una página web que permite **visualizar la data,
filtrarla, ordenarla y compararla**.

Los datos seleccionados fueron:

* [League of Legends - Challenger leaderboard](src/data/lol/lol.json):
  Este set de datos muestra la lista de campeones en una liga del
  juego League of Legends (LoL).
  - [Investigación con jugadores de LoL](src/data/lol/README.md)

## 2. Objetivos de aprendizaje

Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

### HTML

- [ ] **Uso de HTML semántico**

### CSS

- [ ] **Uso de selectores de CSS**
- [ ] **Modelo de caja (box model): borde, margen, padding**
- [ ] **Uso de flexbox en CSS**

### Web APIs

- [ ] **Uso de selectores del DOM**
- [ ] **Manejo de eventos del DOM (listeners, propagación, delegación)**
- [ ] **Manipulación dinámica del DOM**

### JavaScript

- [ ] **Diferenciar entre tipos de datos primitivos y no primitivos**
- [ ] **Arrays (arreglos)**
- [ ] **Objetos (key, value)**
- [ ] **Variables (declaración, asignación, ámbito)**
- [ ] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**
- [ ] **Uso de bucles/ciclos (while, for, for..of)**
- [ ] **Funciones (params, args, return)**
- [ ] **Pruebas unitarias (unit tests)**
- [ ] **Módulos de ECMAScript (ES Modules)**
- [ ] **Uso de linter (ESLINT)**
- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**
- [ ] **Diferenciar entre expresiones (expressions) y sentencias (statements)**

### Control de Versiones (Git y GitHub)

- [ ] **Git: Instalación y configuración**
- [ ] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**
- [ ] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**
- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**
- [ ] **GitHub: Despliegue con GitHub Pages**
- [ ] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

### UX (User eXperience)

- [ ] **Diseñar la aplicación pensando en y entendiendo al usuario**
- [ ] **Crear prototipos para obtener feedback e iterar**
- [ ] **Aplicar los principios de diseño visual (contraste, alineación, jerarquía)**
- [ ] **Planear y ejecutar tests de usabilidad**

## 3. Consideraciones generales

* Proyecto resuelto en duplas.
* El proyecto se encuentra en GitHub (commit/push) y la
  interfaz está desplegada usando [GitHub Pages](https://pages.github.com/).
* Tiempo para completarlo: 4 semanas.

## 4. Historias de usuario

Para el desarrollo del proyecto se definieron 04 historias de usuarios:

![image](https://user-images.githubusercontent.com/74887104/142956390-67bd9156-8fa7-41fb-ab6d-fbb5534dde7d.png)

### Diseño de la Interfaz de Usuario

#### Prototipo de alta fidelidad

La Interfaz de Usuario (UI por sus siglas en inglés -
_User Interface_) se desarrolló con la herramienta de
diseño visual [Figma](https://www.figma.com/).

#### Vista Inicial (Home)
![figma_home](https://user-images.githubusercontent.com/74887104/142940888-cfe3c078-1f50-4ee7-b6a6-a0f46155a2aa.png)

#### Vista Lista (Campeones)
![figma_champions](https://user-images.githubusercontent.com/74887104/142941888-eb4c32b5-9df8-4a24-a9d4-a41bb9543f96.png)

#### Vista Detalle (Campeón)
![figma_modal](https://user-images.githubusercontent.com/74887104/142943094-d3bdf2dc-01f0-468b-9731-545953cd6db7.png)

#### Vista Ranking
![figma_ranking](https://user-images.githubusercontent.com/74887104/142944176-385b7e0b-9506-465c-92fc-1392f26241ea.png)

#### Vista VS.
![figma_vs](https://user-images.githubusercontent.com/74887104/142944207-4aac3bde-b2a8-4d1b-98b8-0a8664c1033e.png)

#### Testeos de usabilidad / Feedback

Durante el reto realizamos actividades de Feedback con nuestras compañeras y coachs, lo que nos llevó a iterar nuestros diseños. 
Por ejemplo, a través del feedback, encontramos que los gráficos de mayor tamaño tienen una mejor presentación en formato vertical, por lo que se adecuó el gráfico de ranking a éste formato.

![image](https://user-images.githubusercontent.com/74887104/142954897-87273ec3-115a-41fb-96d4-70d562fd4093.png)

### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

1. Mostrar la data en una interfaz: puede ser un card, una tabla, una lista, etc.
![image](https://user-images.githubusercontent.com/74887104/142955144-6fea3914-ba26-4e10-a6ed-446e4f1167e0.png)

2. Permitir al usuario interactuar para obtener la infomación que necesita.
![image](https://user-images.githubusercontent.com/74887104/142955213-451cbfb0-32bd-4398-8be0-ab4686442c85.png)

4. Ser _responsive_, es decir, debe visualizarse sin problemas desde distintos tamaños de pantallas: móviles, tablets y desktops.
 Responsive (Tablet):
 ![image](https://user-images.githubusercontent.com/74887104/142955499-32fda2da-5e2f-4172-ac75-37162e642640.png)

 Responsive (Smartphone):
 ![image](https://user-images.githubusercontent.com/74887104/142955363-4a1d8548-16d2-4bdd-9431-6a085d7f5586.png)
  
### Pruebas unitarias

El _boilerplate_ de este proyecto no incluye Pruebas Unitarias (_tests_), así es
que  tendrás que escribirlas tú para las funciones encargadas de  _procesar_,
_filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas.

Tus _pruebas unitarias_ deben dar una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_) del archivo `src/data.js` que contenga tus funciones y está detallado
en la sección de [Consideraciones técnicas](#srcdatajs).

## 5. Hacker edition

Features/características extras:

* Consumo dinámico de la data de forma dinámica, cargando un archivo JSON por medio de
  `fetch`.
* Se agregaron visualizaciones gráficas con la librería de Google Charts.
* 100% Coverage

## 6. Consideraciones técnicas

La lógica del proyecto está implementada completamente en JavaScript (ES6), HTML y CSS. 

### Contenido de referencia

Página principal de League of Legends

![image](https://user-images.githubusercontent.com/74887104/142956914-ffc117a4-88dc-4518-93d0-7354068073bf.png)

#### Organización del Trabajo

* [GitHub Project](https://github.com/marianagdeveloper/LIM016-data-lovers/projects/1)


## 7. Checklist

* [x] Usa VanillaJS.
* [x] Pasa linter (`npm run pretest`)
* [x] Pasa tests (`npm test`)
* [x] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [x] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [x] Incluye historias de usuario en `README.md`.
* [x] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [x] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [x] UI: Permite ordenar data por uno o más campos (asc y desc).
* [x] UI: Permite filtrar data en base a una condición.
* [x] UI: Es _responsive_.
