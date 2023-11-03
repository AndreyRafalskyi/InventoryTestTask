import React from "react";
import {T_PaginationProps} from "./Pagination.types";

export const Pagination = ({ page, total, perPage, onPerPageChange, perPageOptions, onPageChange }: T_PaginationProps) => {
    const numberOfPages = React.useMemo(() => Math.ceil(total / perPage), [total, perPage])
    return <div>
        <div>
            <span>{page} / {Math.ceil(total / perPage)}</span>
        </div>
        <div>
            <select value={perPage} onChange={(e) => onPerPageChange(+e.target.value)}>
                {perPageOptions.map(option => <option value={option}>{option} pages</option>)}
            </select>
        </div>
        <div>
            <button type="button" disabled={page === 0} onClick={() => onPageChange(page - 1)}>Previous</button>
            <button type="button" disabled={page === numberOfPages} onClick={() => onPageChange(page + 1)}>Next</button>
        </div>
    </div>
}