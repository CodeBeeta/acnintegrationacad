// Calls the Script Include function that searches the beer by ID
var list = new PunkIntegration().getBeerForId(current.getValue('u_id'));

for (var beer in list) {
	current.setValue('u_name', list[beer].name);
	current.setValue('u_description', list[beer].description);
	current.setValue('u_abv', list[beer].abv);
	current.setValue('u_ibu', list[beer].ibu);
	current.setValue('u_tagline', list[beer].tagline);
}

current.update();
// required to not change the page when updating
action.setRedirectURL(current);