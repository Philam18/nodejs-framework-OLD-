import { Environment } from "../lib/Environment";

export class Config
{
    private static readonly DEFAULT_ENVIRONMENT : Environment = Environment.LOCAL;
    private static readonly DEFAULT_PORT : string             = "8080";
    
    public static getEnvironment() : Environment
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
        return Config.DEFAULT_ENVIRONMENT;
    }

    public static getPort() : String
    {
        if (process.env.PORT !== undefined) {
            return process.env.PORT.toString();
        }
        return Config.DEFAULT_PORT;
    }




}


