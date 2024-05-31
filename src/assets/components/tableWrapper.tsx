import { FruitsTable } from "./fruitsTable"
import { TableWrapperTypes } from "./types"
import { Vegetables } from "./vegetablesTable"

export const TableWrapper = ({ inputValue, isThere }: TableWrapperTypes) => {

    return (

        <>

            <div style={{ display: "flex" }}>
                <Vegetables
                    inputValue={inputValue}
                    isThere={isThere}
                />
                <FruitsTable
                    inputValue={inputValue}
                    isThere={isThere}
                />
            </div>

        </>

    )
}