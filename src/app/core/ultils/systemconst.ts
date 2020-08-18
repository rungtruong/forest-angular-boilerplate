export const API = {
    ADMIN: {
        GET_PUBLIC_KEY: 'rest/getpublickey',
        LOGIN: 'rest/login',
        LOGIN_TWO_FACTOR: 'rest/login-with-otp',
        EXTEND_TOKEN: 'rest/extend-token',
        CHANGE_PASSWORD: 'rest/user/changepass',
        LOGOUT: '/api/logout',
    },
};
export const ROUTE = {
    DASHBOARD: {
        MAIN: 'dashboard',
        CROP: 'crop',
        CULTIVATION: 'cultivation',
        ASSET: 'asset'
    },
    TABULATED: {
        MAIN: 'tabulated'
    }
};
export const PERMISSIONS = {
    DASHBOARD_VIEW: '',
    DASHBOARD_CROP_VIEW: '',
    TABULATED_VIEW: ''
};

export const MENU = [
    {
        name: 'Dashboard',
        url: ROUTE.DASHBOARD.MAIN,
        icon: 'mat_dashboard',
        access: PERMISSIONS.DASHBOARD_VIEW,
        isGroup: true,
        childs: [
            {
                name: 'Crop Dashboard',
                icon: 'trip_origin',
                url: ROUTE.DASHBOARD.MAIN + '/' + ROUTE.DASHBOARD.CROP,
                access: PERMISSIONS.DASHBOARD_CROP_VIEW
            },
        ],
    },
    {
        name: 'Tabulated Lists',
        url: ROUTE.TABULATED.MAIN,
        icon: 'mat_list',
        access: PERMISSIONS.DASHBOARD_VIEW,
        isGroup: false,
    },
];
