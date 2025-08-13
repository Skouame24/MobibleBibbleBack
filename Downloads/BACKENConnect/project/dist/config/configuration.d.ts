declare const _default: () => {
    port: number;
    database: {
        url: string | undefined;
    };
    jwt: {
        secret: string | undefined;
        expiresIn: string;
    };
    apiBible: {
        baseUrl: string;
        apiKey: string | undefined;
        defaultBibleId: string;
    };
};
export default _default;
