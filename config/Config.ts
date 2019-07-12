import { Environment } from "../lib/Environment";

export namespace Config
{
    export const DEFAULT_ENVIRONMENT : Environment = Environment.LOCAL;
    export const DEFAULT_PORT : string             = "8080";
    
    export function getEnvironment() : Environment
    {
        if (process.env.FRAMEWORK_ENVIRONMENT !== undefined)
        {
            switch(process.env.FRAMEWORK_ENVIRONMENT)
            {
                case Environment.DEV: 
                    return Environment.DEV;
                case Environment.QA:
                    return Environment.QA;
                case Environment.PROD:
                    return Environment.PROD;
            }
        }
        return DEFAULT_ENVIRONMENT;
    }

    export function  getPort() : String
    {
        let port = DEFAULT_PORT;
        if (process.env.PORT !== undefined) {
            port = process.env.PORT.toString();
        }
        return port;
    }




}


