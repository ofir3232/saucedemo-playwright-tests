import { UserCheckoutInfo, UserLoginInfo } from "./types";

export const BASE_URL = process.env.BASE_URL!;
export const DEFAULT_USER = process.env.DEFAULT_USER!;
export const LOCKED_USER = process.env.LOCKED_USER!;
export const PASSWORD = process.env.PASSWORD!;

export const VALID_USERS = [
    'standard_user',
    'problem_user',
    'performance_glitch_user',
    'error_user',
    'visual_user'
];

export const DEFAULT_USER_CHECKOUT_INFO: UserCheckoutInfo = {
    firstName: "user",
    lastName: "last", 
    postalCode: "123"
};

export const DEFUALT_USER_LOGIN_INFO: UserLoginInfo = {
    username: DEFAULT_USER,
    password: PASSWORD,
};

export const ROUTES = {
    LOGIN: '/',
    INVENTORY: '/inventory.html',
    ABOUT: 'https://saucelabs.com/'
};

export enum LoginErrorType {
    EMPTY_USERNAME = 'Username is required',
    EMPTY_PASSWORD = 'Password is required',
    LOCKED_OUT_USER = 'Sorry, this user has been locked out.',
    INVALID_CREDENTIALS = 'Username and password do not match any user in this service'
};

export enum CheckoutErrorType {
    EMPTY_FIRST_NAME = 'First Name is required',
    EMPTY_LAST_NAME = 'Last Name is required',
    EMPTY_POSTAL_CODE = 'Postal Code is required',
};

export enum SortOption {
    A_TO_Z = 'az',
    Z_TO_A = 'za',
    LOW_TO_HIGH = 'lohi',
    HIGH_TO_LOW = 'hilo'
};