import React from "react";

type T_TableHeader = {
    title: string;
    sortable?: boolean;
}

type T_TableRow = {
    id: string | number;
    cells: Array<React.ReactNode | string>;
}

export type T_TableProps = {
    title?: string;
    headers?: Array<T_TableHeader>;
    rows: Array<T_TableRow>;
    onRowClick?: (rowId: string | number) => void;
    selectedRow?: string | number | null;
}