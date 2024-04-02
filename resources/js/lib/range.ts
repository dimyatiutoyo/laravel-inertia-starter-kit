export const range = (start:number, stop:number, step = 1) => {
  return [...Array(stop - start).keys()]
    .filter(i => !(i % Math.round(step)))
    .map(v => start + v)
}
