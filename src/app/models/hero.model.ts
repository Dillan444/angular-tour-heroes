export interface Hero {
  id: number,
  name: string,
  gender: 'Hombre' | 'Mujer',
  height: number,
  weight: number,
  powers: string[],
  weakness: string
  weapons: string[] | null,
  image: string
}
