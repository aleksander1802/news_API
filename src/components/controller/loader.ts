export interface interfaceSources {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface interfaceNews {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
        id: string;
        name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
}

export type Source = {
    status: string;
    sources: interfaceSources[];
};

export type NewsEverythingContent = {
    status: string;
    totalResults: number;
    articles: interfaceNews[];
};

enum ErrorForMe {
    Upgrade_Required = 426,
    Unauthorized_Response = 401,
    The_most_Lovely_Error = 404,
}

export type TypeCallback<T> = (item: T) => void;

export type Endpoint = 'sources' | 'everything';

type ObjectWithManyFields = {
    [key: string]: string | undefined;
};

type optionsResp = {
    sources: string;
};

type Dispens<T> = {
    [P in keyof T]?: T[P] | undefined;
};

type EndpointWithOptions = {
    endpoint: Endpoint;
    options?: Dispens<optionsResp>;
};

type OptionsKey = {
    apiKey: string;
};

class Loader {
    constructor(protected baseLink: string, protected options: OptionsKey) {}

    getResp<T>(
        { endpoint, options = {} }: EndpointWithOptions,
        callback: TypeCallback<T> = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    private errorHandler(res: Response): Response {
        if (!res.ok) {
            if (
                res.status === ErrorForMe.Upgrade_Required ||
                res.status === ErrorForMe.The_most_Lovely_Error ||
                res.status === ErrorForMe.Unauthorized_Response
            )
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: Dispens<optionsResp>, endpoint: Endpoint): string {
        const urlOptions: ObjectWithManyFields = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load<T>(method: string, endpoint: Endpoint, callback: TypeCallback<T>, options: Dispens<optionsResp> = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data: T) => callback(data))
            .catch((err: ErrorCallback) => console.error(err));
    }
}

export default Loader;
