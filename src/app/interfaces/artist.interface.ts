


export interface Artist{
    id?:         string;
    userName?:   string;
    alias?:      string;
    titular?:    string;
    dateBirth?:  Date;
    country?:    string;
    city?:      string;
    email?:      string;
    jobDate?:    Date;
    website?:        string    

}

export interface Auth {
    id:      string;
    email:   string;
    usuario: string;
}

export interface User {
    id?: string;
    name?: string;
    email?: string;
    statusAccount?:boolean
}

