import { FC, memo } from 'react'
import Cell from '../../helpers/Cell'
import Square, { colors } from './Square'

interface TableRowProps {
    row: Cell[]
    rowNum: number
    colors: colors
    handleSquareClick: Function
}

function areEqual(prevProps: TableRowProps, nextProps: TableRowProps) {
    {
        return prevProps.row.length === nextProps.row.length && prevProps.row.every(function (cell, i) {
            return cell.backgroundColor === nextProps.row[i].backgroundColor
        })
    }
}

const TableRow: FC<TableRowProps> = ({ row, rowNum, colors, handleSquareClick }) => {


    return (
        <>
            {row.map(cell => {
                return (
                    <Square rowNum={rowNum} key={cell.index} cell={cell} colors={colors} handleSquareClick={handleSquareClick} />
                )
            })}
        </>
    )
}

export default memo(TableRow, areEqual)
