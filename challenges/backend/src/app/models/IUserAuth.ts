export interface IUserAuth {
    token: string;
    authenticated: boolean;
    userId: string;
    type: number;
    privileges: string;
}
