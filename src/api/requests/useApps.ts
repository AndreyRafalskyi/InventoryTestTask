import {useQuery} from "react-query";
import {Client} from "../client";
import {ROUTES} from "../routes";

export type T_GetAppsRequestBody = {
    pageNumber: number;
    pageSize: number;
};

type T_AppData = {
    appId: string;
    appName: string;
    appSources: Array<string>;
    category: string;
}

export type T_GetAppsResponseBody = {
  appRows: Array<T_AppData>;
  totalCount: number;
};

export const useApps = (parameters: T_GetAppsRequestBody) => {
    const client = new Client<T_GetAppsResponseBody>();

    return useQuery({
        queryKey: ["inventory", "apps", parameters],
        queryFn: () => client.request(ROUTES.APPS, "PUT", parameters)
    })
}