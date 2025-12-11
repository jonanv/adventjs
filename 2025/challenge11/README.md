# **Instrucciones**

## **Reto #11: 📹 Regalos sin vigilancia**
#### **Fácil**

Tu puntuación:  ⭐⭐⭐⭐⭐🌟🌟🌟

El grinch quiere robar los regalos de Navidad del almacén. Para ello necesita saber **qué regalos no tienen vigilancia**.

El almacén se representa como un array de strings (**`string[]`**), donde **cada regalo (`*`) está protegido si su posición está junto a una cámara (`#`)**. Cada espacio vacío se representa con un **punto** (**`.`**).

Tu tarea es **contar cuántos regalos están sin vigilancia**, es decir, que no tienen ninguna cámara adyacente (arriba, abajo, izquierda o derecha).

Ten en cuenta: *solo se considera como "adyacente" las 4 direcciones cardinales, no en diagonal*.

Los regalos en las esquinas o bordes pueden estar sin vigilancia, siempre que no tengan cámaras directamente al lado.

🧩 **Ejemplos**:
```js
findUnsafeGifts([
  '.*.',
  '*#*',
  '.*.'
]) // ➞ 0

// Todos los regalos están junto a una cámara

findUnsafeGifts([
  '...',
  '.*.',
  '...'
]) // ➞ 1

// Este regalo no tiene cámaras alrededor

findUnsafeGifts([
  '*.*',
  '...',
  '*#*'
]) // ➞ 2
// Los regalos en las esquinas superiores no tienen cámaras alrededor

findUnsafeGifts([
  '.....',
  '.*.*.',
  '..#..',
  '.*.*.',
  '.....'
]) // ➞ 4

// Los cuatro regalos no tienen cámaras, porque están en diagonal a la cámara
```