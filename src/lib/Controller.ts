import { RouteConfiguration } from "./RouteConfiguration";
import { Request } from "./Request";

export class Controller
{

    private readonly request : Request;
    private readonly config : RouteConfiguration;
    
    constructor(config : RouteConfiguration, request : Request)
    {
        this.request = request;
        this.config = config;
    }



}