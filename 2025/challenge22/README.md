# **Instrucciones**

## **Reto #22: 🎄 El laberinto del trineo**
#### **Difícil**

Tu puntuación: Tu puntuación:  ⭐⭐⭐⭐⭐🌟🌟🌟

Papá Noel 🎅 está probando un nuevo **simulador de trineo** dentro de un laberinto en el taller. El laberinto se representa como una matriz de caracteres.

Tu tarea es implementar una función que determine si es posible llegar a la salida (**`E`**) partiendo desde la posición inicial (**`S`**).

**`Reglas del laberinto`**:

- **`S`**: Posición inicial de Santa.
- **`E`**: Salida del laberinto.
- **`.`**: Camino libre.
- **`#`**: Pared (bloquea el paso).
- Movimientos permitidos: **arriba, abajo, izquierda y derecha**.
- Solo hay una **`S`** y una sola **`E`**.

🧩 **Ejemplos**:
```js
canEscape([
  ['S', '.', '#', '.'],
  ['#', '.', '#', '.'],
  ['.', '.', '.', '.'],
  ['#', '#', '#', 'E']
])
// → true

canEscape([
  ['S', '#', '#'],
  ['.', '#', '.'],
  ['.', '#', 'E']
])
// → false

canEscape([['S', 'E']])
// → true

canEscape([
  ['S', '.', '.', '.', '.'],
  ['#', '#', '#', '#', '.'],
  ['.', '.', '.', '.', '.'],
  ['.', '#', '#', '#', '#'],
  ['.', '.', '.', '.', 'E']
])
// → true

canEscape([
  ['S', '.', '.'],
  ['.', '.', '.'],
  ['#', '#', '#'],
  ['.', '.', 'E']
])
// → false
```

**A tener en cuenta**:

- No necesitas devolver el camino, solo si es posible llegar.
- Santa no puede salir de los límites del laberinto.

**Consejo**: Este problema se puede resolver de varias formas, pero algoritmos de búsqueda como **BFS** (búsqueda en anchura) o **DFS** (búsqueda en profundidad) son ideales para este tipo de retos.