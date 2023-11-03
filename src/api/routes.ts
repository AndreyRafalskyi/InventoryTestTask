export const ROUTES = {
    APPS: "/get-apps",
    APP_DETAILS: (appId: string | number) => `/get-app-overview/${appId}`,
}