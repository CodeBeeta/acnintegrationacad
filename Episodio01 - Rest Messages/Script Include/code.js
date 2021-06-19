var PunkIntegration = Class.create();
PunkIntegration.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    type: 'PunkIntegration',

    getBeerForId: function(id) {
        var rest = new sn_ws.RESTMessageV2('Punk API', 'Get by Id');
        rest.setStringParameterNoEscape('id', id);

        var response = rest.execute();
        var responseBody = response.getBody();
        var httpStatus = response.getStatusCode();
        var parsedBody = JSON.parse(responseBody);
		
		return parsedBody;

    }

});