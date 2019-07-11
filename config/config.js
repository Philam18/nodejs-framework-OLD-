module.exports = 
{
    
    getEnvironment : function()
    {
        const DEV   = "dev";
        const LOCAL = "local";
        const QA    = "qa";
        const PROD  = "prod";
        if (process.env.FRAMEWORK_ENVIRONMENT !== undefined)
        {
            switch(process.env.FRAMEWORK_ENVIRONMENT)
            {
                case DEV: 
                    return DEV;
                case QA:
                    return QA;
                case PROD:
                    return PROD;
            }
        }
        return LOCAL;
    },

    getPort : function()
    {
        let port = "8080";
        if (process.env.PORT !== undefined) {
            port = process.env.PORT.toString();
        }
        return port;
    },




}