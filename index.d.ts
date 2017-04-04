import { lazyboyjs } from "lazyboyjs";
import { LazyUAC, DataModel } from "lazy-uac";
import { LogLevel } from "lazy-format-logger";
import * as express from "express";
export interface DatabaseManagerOptions {
    LazyBoyOptions?: lazyboyjs.LazyOptions;
    UacOptions?: LazyUAC.UacOptions;
    LogLevel?: LogLevel;
}
export interface LazyRoute {
    Route: express.Router;
    ParseUserContext(data: any): DataModel.User;
    RetrieveUser(req: any): DataModel.User;
    SerializeUserContext(user: DataModel.User): string;
    LangFromRequest(req: express.Request): string;
    ValidateIdParam(req: any, res: any): string;
    CheckUserLogged(req: any, res: any, next: any): any;
    requestModule<T>(name: string): T;
}
export declare abstract class LazyModule {
    protected options: DatabaseManagerOptions;
    constructor(options: DatabaseManagerOptions);
    abstract SetupModuleRouteAsync(route: LazyRoute): any;
}
