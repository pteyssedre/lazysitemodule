import {lazyboyjs} from "lazyboyjs";
import {LazyUAC, DataModel} from "lazy-uac";
import {LogLevel} from "lazy-format-logger";
import * as express from "express";

export interface DatabaseManagerOptions {
    LazyBoyOptions?: lazyboyjs.LazyOptions;
    UacOptions?: LazyUAC.UacOptions;
    LogLevel?: LogLevel;
}

export interface LazyRoute {
    Route: express.Router;
    ParseUserContext(data): DataModel.User;
    RetrieveUser(req): DataModel.User;
    SerializeUserContext(user: DataModel.User): string;
    LangFromRequest(req: express.Request): string;
    ValidateIdParam(req, res): string;
    CheckUserLogged(req, res, next);
}

export abstract class LazyModule {

    constructor(protected options: DatabaseManagerOptions) {
    }

    abstract async SetupModuleRouteAsync(route: LazyRoute);
}