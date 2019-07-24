import { IObject } from '../lib/util/IObject';
import { IRoute } from '../lib/IRoute';
import { Config } from '../config/Config';
import { Routes } from '../config/Routes';
import * as TemplateRenderer from './TemplateRenderer';
import express from 'express';
import { Controller } from './Controller';
import { HTTPMethod } from './http/HTTPMethod';



export class NodeFramework
{
    ////////////////////////////////////////////////////////////
    // 
    ////////////////////////////////////////////////////////////
    public static serve()
    {
        let app = express();
        let routes : IRoute[] = (function parseRoutes(routes : IRoute[], properties : IObject = {}) : IRoute[]
        {
            let result : IRoute[] = [];

            for (let route of routes)
            {

                let new_obj : IRoute = route;
                for (let key in properties)
                {
                    if (properties.hasOwnProperty(key) && new_obj.hasOwnProperty(key) === false) {
                        new_obj[key] = properties[key];
                    }
                }

                if (new_obj.hasOwnProperty('children'))
                {
                    let property_list : IObject = {};
                    for (let prop in new_obj)
                    {
                        if (new_obj.hasOwnProperty(prop) === true) {
                            if (prop === 'children') {
                                continue;
                            }
                            property_list[prop] = new_obj[prop];
                        }
                    }

                    let child_routes : IRoute[] = parseRoutes(new_obj.children, property_list);
                    for (let children of child_routes) {
                        result.push(children);
                    }
                }
                else {
                    result.push(new_obj);
                }
            }
            
            return result;
        })(Routes.getRoutes());

        if (routes.length === 0) {
            throw new Error("No routes defined");
        }

        for (let route_config of routes)
        {
            let controller : string = 'Controller';
            if (route_config.controller !== undefined) {
                controller = route_config.controller;
            }

            let method;
            if (route_config.method  !== undefined) {
                
            }
        }

        // let port = Config.getPort();
        // app.listen(port, function () {
        //     console.log("====================================");
        //     console.log(`Listening on port ${port} ...`);
        //     console.log("====================================");
        // });

    }

}