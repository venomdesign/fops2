interface HttpConfig {
    url: string;
    apiVersion: number;
}

export const HTTP_SERVICE_VARIABLES: HttpConfig = {
    url: 'http://localhost:53432/api/',
    apiVersion: 1
};
