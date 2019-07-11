const EJS = require('ejs');
module.exports = {

    render : function(template, view_model)
    {
        return EJS.render(template,view_model);
    }






}