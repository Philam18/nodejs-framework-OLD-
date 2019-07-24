export class Routes
{
    private static readonly routes : Object[] = 
    [
        {
            "path"    : "/",
            "template": "index.ejs"
        }
        
    ];
    
    public static getRoutes() : Object[]
    {
        return Routes.routes;
    }


}


