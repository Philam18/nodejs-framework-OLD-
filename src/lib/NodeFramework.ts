import { Config } from '../config/Config';
import { Routes } from '../config/Routes';
import * as TemplateRenderer from './TemplateRenderer';
import express from 'express';

export class NodeFramework
{
    public static serve()
    {
        let app = express();

        for (let route_config of Routes.getRoutes())
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
        let result = [];

        for (let route of routes)
        {
            
        }
        

        return result;
    }


}