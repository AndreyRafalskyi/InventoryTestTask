import React from "react";
import {T_GetAppsRequestBody, useAppDetails, useApps} from "../../../api";
import {Pagination, Table} from "../../common";
import {PER_PAGE_OPTIONS} from "../../../constants";
import {APPS_TABLE_HEADERS} from "../../../constants/apps";

export const InventoriesPage = () => {
    const [tableConfig, setTableConfig] = React.useState<T_GetAppsRequestBody>({
        pageNumber: 0,
        pageSize: 25,
    });
    const [selectedRow, setSelectedRow] = React.useState<string | number | null>(null);

    const { data, isFetching } = useApps(tableConfig);
    const { data: appDetails, isFetching: appDetailsFetching} = useAppDetails(selectedRow);

    const onPerPageChange = (perPage: number) => {
      setTableConfig({
          pageNumber: 0,
          pageSize: perPage,
      })
    };

    const onPageChange = (page: number) => {
        setTableConfig({
            ...tableConfig,
            pageNumber: page,
        })
    }

    const onRowClick = (rowId: string | number | null) => {
        setSelectedRow(rowId);
    }

    if (isFetching) {
        return <p>Loading...</p>
    }

    return <div>
        <Table
        title="App Inventory"
        headers={APPS_TABLE_HEADERS.map(header => ({
            title: header,
            sortable: true,
        }))}
        rows={data?.appRows.map(app => ({
            id: app.appId,
            cells: [
                app.appName,
                app.category,
                app.appSources
            ]
        })) || []}
        onRowClick={onRowClick}/>
        <Pagination
            page={tableConfig.pageNumber}
            total={data?.totalCount || 0}
            perPage={tableConfig.pageSize}
            perPageOptions={PER_PAGE_OPTIONS}
            onPerPageChange={onPerPageChange}
            onPageChange={onPageChange}
        />
    </div>
}