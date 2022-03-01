

export interface AuthResponse {
    id?: string;
    email?: string;
    success?: boolean;
    msg?: string;
    token?: string
    statusAccount?:boolean
}

export interface ArtistResponse {
    id?:         string;
    userName?:       string;
    alias?:      string;
    titular?:    string;
    dateBirth?:  Date;
    country?:    string;
    city?:      string;
    email?:      string;
    jobDate?:    Date;
    website?:        string,
    success?: boolean;  
}
