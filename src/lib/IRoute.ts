import { IObject } from './util/IObject';
import { HTTPMethod } from './http/HTTPMethod';
export interface IRoute extends IObject
{
    readonly path       : string;
    readonly method?    : string;
    readonly template?  : string;
    readonly controller?: string;
}

