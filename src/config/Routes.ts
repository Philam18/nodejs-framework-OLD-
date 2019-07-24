import { IObject } from '../lib/util/IObject';
import { IRoute } from '../lib/IRoute';

export class Routes
{
    ////////////////////////////////////////////////////////////
    // 
    ////////////////////////////////////////////////////////////
    private static readonly routes : IRoute[] = 
	[		
        {
            "path" : "/"
        }
    ];
    
    ////////////////////////////////////////////////////////////
    // 
    ////////////////////////////////////////////////////////////
    public static getRoutes() : IRoute[]
    {
        return Routes.routes;
    }


}


