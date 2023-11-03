export type T_PaginationProps = {
    page: number;
    total: number;
    perPage: number;
    perPageOptions: Array<number>;
    onPerPageChange: (perPage: number) => void;
    onPageChange: (page: number) => void;
}