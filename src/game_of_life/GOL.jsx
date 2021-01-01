import React, { useState } from 'react'
import produce from 'immer'

const ROW = 50
const COL = 50

export const GOL = () => {

    const [grid, setGrid] = useState(() => {
        const grid = Array(ROW).fill(Array(COL).fill(0))
        return grid

        // Another Way to make a matrix
        // const grid = []
        // for (let i = 0; i < ROW; i++) {
        //     grid.push(Array.from(Array(COL), () => 0))
        // }
        // return grid
    })

    return (
        <div>
            <h1>Game of Life</h1>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${COL}, 20px)` }}>
                {grid.map((row, row_index) =>
                    row.map((col, col_index) =>
                        <div key={`${row_index}-${col_index}`}
                            style={{
                                width: 20,
                                height: 20,
                                backgroundColor: grid[row_index][col_index] ? 'green' : undefined,
                                border: "solid 1px"
                            }}
                            onClick={() => {
                                const newGrid = produce(grid, draftGrid => {
                                    draftGrid[row_index][col_index] = grid[row_index][col_index] ? 0 : 1
                                })
                                setGrid(newGrid)
                            }}

                        ></div>))}
            </div>
        </div>
    )
}
