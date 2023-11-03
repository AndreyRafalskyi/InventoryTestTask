import React from 'react';
import {T_TableProps} from "./Table.types";
import styles from "./Table.module.css";

export const Table = ({ rows, title, headers, onRowClick, selectedRow }: T_TableProps) => {
    const clickable = !!onRowClick;

    return <div>
        {title && <h2>{title}</h2>}
        <table className={styles.table}>
            {headers && <thead>
            <tr className={styles.row}>
                {headers.map((header, index) => <th key={index} className={styles.cell}>
                    <span>{header.title}</span>
                    {header.sortable && <span>Sort</span>}
                </th>)}
            </tr>
            </thead>}
            <tbody>
            {rows.map(row => <tr key={row.id} className={`${styles.row} ${row.id === selectedRow ? "selected" : ""}`}>
                {row.cells.map((cell, index) => <td
                    onClick={clickable ? () => onRowClick(row.id) : () => {}} className={`${styles.cell} ${clickable ? styles.clickable : ""}`} key={index}>
                    {cell}
                </td>)}
            </tr>)}
            </tbody>
        </table>
    </div>
}