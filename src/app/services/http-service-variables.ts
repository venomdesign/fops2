interface HttpConfig {
    url: string;
    tokenUrl: string;
    apiVersion: number;
}

export const HTTP_SERVICE_VARIABLES: HttpConfig = {
    url: 'http://localhost:53432/api/',
    tokenUrl: 'http://localhost:56086/oauth/token',
    apiVersion: 1
};
