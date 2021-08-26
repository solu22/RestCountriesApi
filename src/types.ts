export type Country ={
    [index: string]:number | string | Array<string|number>|Object
    name: string
    flag: string
    region: string
    languages: Languages[]
    population: number
    
}

export type Languages ={
    name: string,
    nativeName: string
}