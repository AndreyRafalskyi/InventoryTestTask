import {useQuery} from "react-query";
import {Client} from "../client";
import {ROUTES} from "../routes";

export const useAppDetails = (appId: string | number | null) => {
    const client = new Client();

    return useQuery({
        queryKey: ["inventory", "details", appId],
        queryFn: () => client.request(ROUTES.APP_DETAILS(appId || 0), "GET"),
        enabled: !!appId,
    })
}