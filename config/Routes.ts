import { Controller } from "../lib/Controller";

interface RouteConfig
{
    path        : String;
    template?   : String;
    method      : String;
    controller? : Controller;
}

export class Routes
{
    private static const routes : RouteConfig[] = 
    [
        {
            "path"    : "/",
            "template": "index.ejs"
        }
    ];






}


