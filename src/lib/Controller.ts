import { Request } from "./Request";
import { IRoute } from "./IRoute";

export class Controller
{
    ////////////////////////////////////////////////////////////
    // 
    ////////////////////////////////////////////////////////////
    private readonly request : Request;
    private readonly config : IRoute;
    
    ////////////////////////////////////////////////////////////
    // 
    ////////////////////////////////////////////////////////////
    public constructor(config : IRoute, request : Request)
    {
        this.request = request;
        this.config = config;
    }



}