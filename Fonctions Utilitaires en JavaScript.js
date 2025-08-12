// Fonctions de manipulation de chaînes

/**
 * Inverse une chaîne de caractères.
 * @param {string} str - La chaîne à inverser.
 * @returns {string}
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}

/**
 * Compte le nombre de caractères dans une chaîne.
 * @param {string} str
 * @returns {number}
 */
function countCharacters(str) {
  return str.length;
}

/**
 * Met en majuscule la première lettre de chaque mot.
 * @param {string} sentence
 * @returns {string}
 */
function capitalizeWords(sentence) {
  return sentence
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Fonctions de tableau

/**
 * Retourne la valeur maximale d’un tableau.
 * @param {number[]} arr
 * @returns {number}
 */
function findMax(arr) {
  return Math.max(...arr);
}

/**
 * Retourne la valeur minimale d’un tableau.
 * @param {number[]} arr
 * @returns {number}
 */
function findMin(arr) {
  return Math.min(...arr);
}

/**
 * Calcule la somme des éléments d’un tableau.
 * @param {number[]} arr
 * @returns {number}
 */
function sumArray(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

/**
 * Filtre les éléments d’un tableau selon une condition.
 * @param {Array} arr
 * @param {Function} conditionFn
 * @returns {Array}
 */
function filterArray(arr, conditionFn) {
  return arr.filter(conditionFn);
}

// Fonctions mathématiques

/**
 * Calcule la factorielle d’un nombre.
 * @param {number} n
 * @returns {number|undefined}
 */
function factorial(n) {
  if (n < 0) return undefined;
  return n === 0 ? 1 : n * factorial(n - 1);
}

/**
 * Vérifie si un nombre est premier.
 * @param {number} n
 * @returns {boolean}
 */
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

/**
 * Génère la suite de Fibonacci jusqu’à n termes.
 * @param {number} n
 * @returns {number[]}
 */
function fibonacci(n) {
  const sequence = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) sequence.push(0);
    else if (i === 1) sequence.push(1);
    else sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}