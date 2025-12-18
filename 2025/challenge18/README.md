# **Instrucciones**

## **Reto #18: 🎄 Luces en línea con diagonales**
#### **Medio**

Tu puntuación:  ⭐⭐⭐⭐⭐🌟🌟🌟

El panel de luces navideñas 🎄✨ del taller ha sido un éxito total. Pero los elfos quieren ir un paso más allá: ahora quieren detectar si hay una **línea de 4 luces del mismo color** también en **diagonal**.

El panel sigue siendo una **matriz** donde cada celda puede ser:

- **`'.'`** → luz apagada
- **`'R'`** → luz roja
- **`'G'`** → luz verde

Ahora tu función debe devolver **`true`** si existe una línea de 4 luces del mismo color encendidas y alineadas, ya sea **horizontal ↔, vertical ↕ o diagonal ↘↙**.

🧩 **Ejemplos**:
```js
hasFourInARow([
  ['R', '.', '.', '.'],
  ['.', 'R', '.', '.'],
  ['.', '.', 'R', '.'],
  ['.', '.', '.', 'R']
])
// true → hay 4 luces rojas en diagonal ↘

hasFourInARow([
  ['.', '.', '.', 'G'],
  ['.', '.', 'G', '.'],
  ['.', 'G', '.', '.'],
  ['G', '.', '.', '.']
])
// true → hay 4 luces verdes en diagonal ↙

hasFourInARow([
  ['R', 'R', 'R', 'R'],
  ['G', 'G', '.', '.'],
  ['.', '.', '.', '.'],
  ['.', '.', '.', '.']
])
// true → hay 4 luces rojas en horizontal

hasFourInARow([
  ['R', 'G', 'R'],
  ['G', 'R', 'G'],
  ['G', 'R', 'G']
])
// false → no hay 4 luces del mismo color seguidas
```

**Nota**: El tablero puede ser de cualquier tamaño.