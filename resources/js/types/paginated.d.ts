export type LinkItem = {
  first?: string,
  last?: string,
  prev?: string,
  next?: string,
}

export type MetaItem = {
  current_page: number,
  from: number,
  last_page: number,
  links: MetaLink[],
  path: string,
  per_page: number,
  to: number,
  total: number
}

export type MetaLink = {
  url?: string,
  label: string,
  active: boolean
}
