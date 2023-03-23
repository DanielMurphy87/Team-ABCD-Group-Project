export type FoodSearchType = {
    idIngredient: number,
    strIngredient: string,
}

export type SearchType = {
    id: number,
    name: string,
}

export type DataType = {
    idIngredient: string
    strIngredient: string
    strDescription: string
    strType: string
}

export type Meals = {
    mealArray: DataType[]
}
