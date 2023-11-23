interface Option {
  children: string
}

export function handleSelectFilter(input: string, option: unknown): boolean {
  const nextOption = option as Option
  return nextOption.children
    .normalize(`NFD`)
    .replace(/[\u0300-\u036f]/g, ``)
    .toLowerCase()
    .includes(input.toLowerCase())
}
export function singleFilter(inputValue: string, option: unknown): boolean {
  const nextOption = option as Option
  return nextOption.children
    .toLowerCase()
    .includes(inputValue.toLocaleLowerCase())
}
