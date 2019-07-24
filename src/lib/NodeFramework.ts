import { Config } from '../config/Config';
import { Routes } from '../config/Routes';
import * as TemplateRenderer from './TemplateRenderer';
import express from 'express';

export class NodeFramework
{
    public static serve()
    {
        let app = express();
        let routes : Object[] = NodeFramework.parseRoutes(Routes.getRoutes());

        for (let route_config of routes)
        {
            let template   : String = route_config.template;
            let method     : String = route_config.method;
            let controller : String = route_config.controller;
            let path       : String = route_config.path;
        }




        

        let port = Config.getPort();
        app.listen(port, function () {
            console.log("====================================");
            console.log(`Listening on port ${port} ...`);
            console.log("====================================");
        });
    }

    private static parseRoutes(routes : Object[], properties : Object = {}) : Object[]
    {
        let result : Object[] = [];

        for (let route of routes)
        {
            let new_obj = Object.assign(route,properties);
            if (new_obj.hasOwnProperty('children') === true)
            {
                let children = NodeFramework.parseRoutes(new_obj.children, new_obj);
                
            }
            else
            {
                result.push(new_obj);
            }
        }
        

        return result;
    }


}