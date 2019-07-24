import { Controller } from "./Controller";
import { HTTPMethod } from "./http/HTTPMethod";

export class RouteConfiguration
{
    private readonly path        : String;
    private readonly method?     : HTTPMethod    = HTTPMethod.GET;
    private readonly template?   : String | null = null;
    private readonly controller? : Controller;

    public constructor(path : string, method : HTTPMethod, template : String, controller : Controller)
    {

        this.path     = path;
        this.method   = HTTPMethod.GET;
        
        if (method !== undefined) {
            this.method = method;
        }

        if (template !== undefined) {
            this.template = template;
        }

    }

}