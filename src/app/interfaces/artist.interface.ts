


export interface Artist{
    _id:         string;
    name:       string;
    alias:      string;
    titular:    string;
    dateBirth:  Date;
    // country:    string;
    // city:       string;
    email:      string;
    // dateJob:    Date;
    web:        string    

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

