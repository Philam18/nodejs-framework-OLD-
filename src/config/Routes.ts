import { IRoute } from '../lib/IRoute';
import { HTTPMethod } from '../lib/http/HTTPMethod';

////////////////////////////////////////////////////////////
// 
////////////////////////////////////////////////////////////
export const Routes : IRoute[] = 
[
    {
        "path" : "/",
        "method" : HTTPMethod.GET
    },

    {
        "path" : "/home",
        "controller" : "MyController"
    }


];


