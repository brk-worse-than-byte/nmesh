this["MyApp"] = this["MyApp"] || {};
this["MyApp"]["templates"] = this["MyApp"]["templates"] || {};
this["MyApp"]["templates"]["about"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<div class=\"col s4\">\r\n			<div class=\"card medium\" style=\"overflow: hidden;\">\r\n        <div class=\"card-image waves-effect waves-block waves-light\">\r\n          <img src=\""
    + alias4(((helper = (helper = helpers.img || (depth0 != null ? depth0.img : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img","hash":{},"data":data}) : helper)))
    + "\">\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <span class=\"card-title activator grey-text text-darken-4\">"
    + alias4(((helper = (helper = helpers.cardTitle || (depth0 != null ? depth0.cardTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cardTitle","hash":{},"data":data}) : helper)))
    + "<i class=\"material-icons right\">info_outline</i></span>\r\n\r\n          <p><a href=\"#!\">"
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "</a></p>\r\n        </div>\r\n\r\n        <div class=\"card-action\">\r\n          <a href=\"#\">"
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "</a>\r\n        </div>\r\n\r\n        <div class=\"card-reveal\" style=\"display: none; transform: translateY(0px);\">\r\n          <span class=\"card-title grey-text text-darken-4\">"
    + alias4(((helper = (helper = helpers.cardTitle || (depth0 != null ? depth0.cardTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cardTitle","hash":{},"data":data}) : helper)))
    + "<i class=\"material-icons right\">close</i></span>\r\n          <p>"
    + alias4(((helper = (helper = helpers.cardDescription || (depth0 != null ? depth0.cardDescription : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cardDescription","hash":{},"data":data}) : helper)))
    + "</p>\r\n        </div>\r\n      </div>\r\n		</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"container center\" id=\"about-images\">\r\n	<div class=\"row\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.cards : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\r\n</div>";
},"useData":true});
this["MyApp"]["templates"]["contact"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"container\">\n	<h1>Contact</h1>\n	<div class=\"row\">\n		<div class=\"col s10 offset-s1\">\n			<blockquote>\n"
    + ((stack1 = container.invokePartial(partials.exampleForm,depth0,{"name":"exampleForm","data":data,"indent":"\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "			</blockquote>\n		</div>\n	</div>\n</div>\n";
},"usePartial":true,"useData":true});
this["MyApp"]["templates"]["home"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Home Page</h1>";
},"useData":true});
this["MyApp"]["templates"]["nav"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<nav>\n  <div class=\"nav-wrapper red darken-4\">\n    <a href=\"/\" class=\"brand-logo\">nMESH</a>\n    <a href=\"#\" data-activates=\"mobile-nav\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n    <ul class=\"right hide-on-med-and-down\">\n      <li><a href=\"/projects\">Projects</a></li>\n      <li><a href=\"/about\">About Us</a></li>\n      <li><a href=\"contact\">Contact</a></li>        \n    </ul>\n    <ul class=\"side-nav\" id=\"mobile-nav\">\n      <li><a href=\"/\">Home</a></li>\n      <li><a href=\"/projects\">Projects</a></li>\n      <li><a href=\"/about\">About Us</a></li>\n      <li><a href=\"contact\">Contact</a></li>\n    </ul>\n  </div>\n</nav>";
},"useData":true});
this["MyApp"]["templates"]["projects"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"col s4\">\n      <div class=\"card medium\" style=\"overflow: hidden;\">\n        <div class=\"card-image waves-effect waves-block waves-light\">\n          <img src=\""
    + alias4(((helper = (helper = helpers.img || (depth0 != null ? depth0.img : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n        <div class=\"card-content\">\n          <span class=\"card-title activator grey-text text-darken-4\">"
    + alias4(((helper = (helper = helpers.cardTitle || (depth0 != null ? depth0.cardTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cardTitle","hash":{},"data":data}) : helper)))
    + "<i class=\"material-icons right\">info_outline</i></span>\n\n          <p><a href=\"#!\">"
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "</a></p>\n        </div>\n\n        <div class=\"card-action\">\n          <a href=\"#\">"
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "</a>\n        </div>\n\n        <div class=\"card-reveal\" style=\"display: none; transform: translateY(0px);\">\n          <span class=\"card-title grey-text text-darken-4\">"
    + alias4(((helper = (helper = helpers.cardTitle || (depth0 != null ? depth0.cardTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cardTitle","hash":{},"data":data}) : helper)))
    + "<i class=\"material-icons right\">close</i></span>\n          <p>"
    + alias4(((helper = (helper = helpers.cardDescription || (depth0 != null ? depth0.cardDescription : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cardDescription","hash":{},"data":data}) : helper)))
    + "</p>\n        </div>\n      </div>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"container center\">\n  <h1>Projects</h1>\n  <div class=\"row\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.cards : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</div>";
},"useData":true});