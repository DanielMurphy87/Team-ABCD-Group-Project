import { useState, useRef } from "react";
import type { MealResult } from "@/definitions/types";

const SearchBar: React.FC<{ searchData: MealResult[] }> = ({
    searchData,
}): JSX.Element => {
    const [filteredData, setFilteredData] = useState<MealResult[]>([])
    const [wordEntered, setWordEntered] = useState<string>("")

    const inputRef: React.RefObject<HTMLInputElement> =
        useRef<HTMLInputElement>(null)
    window.addEventListener("load", () => inputRef.current?.focus())

    const handleFilter = ({
        target,
    }: React.ChangeEvent<HTMLInputElement>): void => {
        const searchWord: string = target.value.toLowerCase()
        setWordEntered(searchWord)

        const newFilter: MealResult[] = searchData.filter(({ strMeal }): boolean =>
        strMeal.toLowerCase().includes(searchWord)
        )

        if (!searchWord) return setFilteredData([])
        setFilteredData(newFilter)
    }

    const clearInput = (): void => {
        setFilteredData([])
        setWordEntered("")
        inputRef.current?.focus()
    }

    return (
        <div>
            <div className="searchInputs">
                <input
                    type="text"
                    placeholder="Enter a search term"
                    value={wordEntered}
                    onChange={handleFilter}
                    ref={inputRef}
                />
                <div className="searchIcon">
                    {wordEntered.length !== 0 && (
                        <button id="clearBtn" onClick={clearInput} />
                    )}
                </div>
            </div>
            {filteredData.length !== 0 && (
                <div>
                    {filteredData.map(({ idMeal, strMeal }, key) => (
                        <a
                            href={strMeal.toString()}
                            key={idMeal}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {strMeal}
                        </a>
                    ))}
                </div>
            )}
        </div>
    )
}

export { SearchBar }