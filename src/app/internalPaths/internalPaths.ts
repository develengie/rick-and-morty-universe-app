export const internalPaths = {
    main: '/',
    login: '/login',
    category: (alias: string): string => `/categories/${alias}`,
};
