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
  },
  DATA_ANALYTICS: {
    MAIN: 'dataanalytic'
  },
  REPORT: {
    MAIN: 'report'
  },
  MANAGEMENT: {
    MAIN: 'management',
    USER: 'user'
  },
  LOG_DATA: {
    MAIN: 'logdata'
  },
  CONFIG: {
    MAIN: 'configuration'
  },
};
export const PERMISSIONS = {
  DASHBOARD_VIEW: '',
  DASHBOARD_CROP_VIEW: '',
  DASHBOARD_CULTIVATION_VIEW: '',
  DASHBOARD_ASSET_VIEW: '',
  TABULATED_VIEW: '',
  DATA_ANALYTICS_VIEW: '',
  REPORT_VIEW: '',
  USER_VIEW: '',
  LOG_DATA_VIEW: '',
  CONFIG_VIEW: ''
};

export const MENU = [
  {
    name: 'Dashboard',
    url: ROUTE.DASHBOARD.MAIN,
    icon: 'dashboard',
    access: PERMISSIONS.DASHBOARD_VIEW,
    isGroup: true,
    childs: [
      {
        name: 'Crop Dashboard',
        icon: 'trip_origin',
        url: ROUTE.DASHBOARD.MAIN + '/' + ROUTE.DASHBOARD.CROP,
        access: PERMISSIONS.DASHBOARD_CROP_VIEW
      },
      {
        name: 'Cultivation Plan',
        icon: 'trip_origin',
        url: ROUTE.DASHBOARD.MAIN + '/' + ROUTE.DASHBOARD.CULTIVATION,
        access: PERMISSIONS.DASHBOARD_CULTIVATION_VIEW
      },
      {
        name: 'Asset Dashboard',
        icon: 'trip_origin',
        url: ROUTE.DASHBOARD.MAIN + '/' + ROUTE.DASHBOARD.ASSET,
        access: PERMISSIONS.DASHBOARD_ASSET_VIEW
      },
    ],
  },
  {
    name: 'Tabulated Lists',
    url: ROUTE.DATA_ANALYTICS.MAIN,
    icon: 'list',
    access: PERMISSIONS.TABULATED_VIEW,
    isGroup: true,
    childs: [

    ]
  },
  {
    name: 'Data Analytics',
    url: ROUTE.DATA_ANALYTICS.MAIN,
    icon: 'analytics',
    access: PERMISSIONS.DATA_ANALYTICS_VIEW,
    isGroup: false,
  },
  {
    name: 'Report',
    url: ROUTE.REPORT.MAIN,
    icon: 'note',
    access: PERMISSIONS.REPORT_VIEW,
    isGroup: true,
    childs: []
  },
  {
    name: 'Management',
    url: ROUTE.MANAGEMENT.MAIN,
    icon: 'work',
    access: PERMISSIONS.TABULATED_VIEW,
    isGroup: true,
    childs: [
      {
        name: 'User',
        icon: 'trip_origin',
        url: ROUTE.MANAGEMENT.USER,
        access: PERMISSIONS.USER_VIEW
      },
    ]
  },
  {
    name: 'Log Data',
    url: ROUTE.LOG_DATA.MAIN,
    icon: 'wysiwyg',
    access: PERMISSIONS.LOG_DATA_VIEW,
    isGroup: false,
    childs: []
  },
  {
    name: 'Configuration',
    url: ROUTE.CONFIG.MAIN,
    icon: 'settings',
    access: PERMISSIONS.CONFIG_VIEW,
    isGroup: false,
    childs: []
  },
];
