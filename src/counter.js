/**
 * https://jsdoc.app/about-getting-started.html
 * 
 * Essa função serve para atualizar o contador na tela
 * @param {HTMLButtonElement} element 
 */
export function setupCounter(element) {
  let counter = 0
  /**
   * Essa função serve para atualizar o contador na tela 
   * @param {number} count 
   */
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
