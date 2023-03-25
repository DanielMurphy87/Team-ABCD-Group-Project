import { useState, useRef } from "react";
import type { DataType } from "utils/types";

const SearchBar: React.FC<{ searchData: DataType[] }> = ({
    searchData,
}): JSX.Element => {
    const [filteredData, setFilteredData] = useState<DataType[]>([])
    const [wordEntered, setWordEntered] = useState<string>("")

    const inputRef: React.RefObject<HTMLInputElement> =
        useRef<HTMLInputElement>(null)
    window.addEventListener("load", () => inputRef.current?.focus())

    const handleFilter = ({
        target,
    }: React.ChangeEvent<HTMLInputElement>): void => {
        const searchWord: string = target.value.toLowerCase()
        setWordEntered(searchWord)

        const newFilter: DataType[] = searchData.filter(({ strIngredient }): boolean =>
        strIngredient.toLowerCase().includes(searchWord)
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
                    {filteredData.map(({ idIngredient, strIngredient }, key) => (
                        <a
                            href={idIngredient.toString()}
                            key={key}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {strIngredient}
                        </a>
                    ))}
                </div>
            )}
        </div>
    )
}

export { SearchBar }