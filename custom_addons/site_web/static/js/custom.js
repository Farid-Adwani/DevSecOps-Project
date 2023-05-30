
//console.log("custom js caleedddddddddddddddddddddddddddddddddd")
odoo.define('site_web.Sitelab', function(require) {
    "use strict";

	var ajax = require('web.ajax');
	var core = require('web.core');
	//var base = require('web_editor.base');
	//var animation = require('web_editor.snippets.animation');
	var sAnimation1 = require('website.content.snippets.animation');
	var sAnimation2 = require('website.content.snippets.animation');
	var sAnimation3 = require('website.content.snippets.animation');
	var sAnimation4 = require('website.content.snippets.animation');
	var sAnimation5 = require('website.content.snippets.animation');
	var sAnimation6 = require('website.content.snippets.animation');
		var sAnimation7 = require('website.content.snippets.animation');
		var sAnimation8 = require('website.content.snippets.animation');
		var sAnimation9 = require('website.content.snippets.animation');
		var sAnimation10 = require('website.content.snippets.animation');
			var sAnimation11 = require('website.content.snippets.animation');
	var qweb = core.qweb;
    var _t = core._t;

    var ajax = require('web.ajax');
    //var oe_website_sale = this;

	sAnimation1.registry.Sitelab = sAnimation1.Class.extend({
	//animation.registry.OdooWebsiteSearchSuggestion = animation.Class.extend({
		selector: ".input-search",
		start: function () {
		    //console.log("start caleedddddddddddddddddddddddddddddddddd")
		    var self = this;
		    //console.log("start caleedddddddddddddddddddddddddddddddddd",this.$target.typeahead)
		    this.$target.attr("autocomplete","off");
            this.$target.parent().addClass("typeahead__container");
            
            
            this.$target.typeahead({
            	minLength: 1,
				maxItem: 15,

				delay: 500,
				order: "asc",
				hint: true,
				dynamic:true,
				display: ["company"],
				maxItemPerGroup: 5,
                template: '<span>' +
                          '<span>{{company}}</span>' +
                          '</span>',
                source:{ product:{ url: [{ type : "GET", url : "/search_labs/suggestion", data : { query : "{{query}}"},},"data.company"] },},
              });
              
              
              //console.log("222222222222222222 caleedddddddddddddddddddddddddddddddddd",this.$target)
              
		    
		},
		
		
		callback: {
		    onClickAfter: function (node, a, item, event) {
	 
		        event.preventDefault;
	 
		        // href key gets added inside item from options.href configuration
		        alert(item.href);
	 
		    }
		},
		debug: true
		
	});


	sAnimation2.registry.Sitelab1 = sAnimation2.Class.extend({
	//animation.registry.OdooWebsiteSearchSuggestion = animation.Class.extend({
		selector: ".search_coun",
		start: function () {
		    //console.log("start caleedddddddddddddddddddddddddddddddddd")
		    var self = this;
		    //console.log("start caleedddddddddddddddddddddddddddddddddd",this.$target.typeahead)
		    this.$target.attr("autocomplete","off");
            this.$target.parent().addClass("typeahead__container");


            this.$target.typeahead({
            	minLength: 1,
				maxItem: 15,

				delay: 500,
				order: "asc",
				hint: true,
				dynamic:true,
				display: ["country"],
				maxItemPerGroup: 5,
                template: '<span>' +
                          '<span>{{country}}</span>' +
                          '</span>',
                source:{ product:{ url: [{ type : "GET", url : "/search_coun/suggestion", data : { query : "{{query}}"},},"data.country"] },},
              });


              //console.log("222222222222222222 caleedddddddddddddddddddddddddddddddddd",this.$target)


		},


		callback: {
		    onClickAfter: function (node, a, item, event) {

		        event.preventDefault;

		        // href key gets added inside item from options.href configuration
		        alert(item.href);

		    }
		},
		debug: true

	});

	sAnimation3.registry.Sitelab2 = sAnimation3.Class.extend({
	//animation.registry.OdooWebsiteSearchSuggestion = animation.Class.extend({
		selector: ".search_univ",
		start: function () {
		    //console.log("start caleedddddddddddddddddddddddddddddddddd")
		    var self = this;
		    //console.log("start caleedddddddddddddddddddddddddddddddddd",this.$target.typeahead)
		    this.$target.attr("autocomplete","off");
            this.$target.parent().addClass("typeahead__container");


            this.$target.typeahead({
            	minLength: 1,
				maxItem: 15,

				delay: 500,
				order: "asc",
				hint: true,
				dynamic:true,
				display: ["univ"],
				maxItemPerGroup: 5,
                template: '<span>' +
                          '<span>{{univ}}</span>' +
                          '</span>',
                source:{ product:{ url: [{ type : "GET", url : "/search_univ/suggestion", data : { query : "{{query}}"},},"data.univ"] },},
              });


              //console.log("222222222222222222 caleedddddddddddddddddddddddddddddddddd",this.$target)


		},


		callback: {
		    onClickAfter: function (node, a, item, event) {

		        event.preventDefault;

		        // href key gets added inside item from options.href configuration
		        alert(item.href);

		    }
		},
		debug: true

	});

	sAnimation4.registry.Sitelab3 = sAnimation4.Class.extend({
	//animation.registry.OdooWebsiteSearchSuggestion = animation.Class.extend({
		selector: ".search_disc",
		start: function () {
		    //console.log("start caleedddddddddddddddddddddddddddddddddd")
		    var self = this;
		    //console.log("start caleedddddddddddddddddddddddddddddddddd",this.$target.typeahead)
		    this.$target.attr("autocomplete","off");
            this.$target.parent().addClass("typeahead__container");


            this.$target.typeahead({
            	minLength: 1,
				maxItem: 15,

				delay: 500,
				order: "asc",
				hint: true,
				dynamic:true,
				display: ["disc"],
				maxItemPerGroup: 5,
                template: '<span>' +
                          '<span>{{disc}}</span>' +
                          '</span>',
                source:{ product:{ url: [{ type : "GET", url : "/search_disc/suggestion", data : { query : "{{query}}"},},"data.disc"] },},
              });


              //console.log("222222222222222222 caleedddddddddddddddddddddddddddddddddd",this.$target)


		},


		callback: {
		    onClickAfter: function (node, a, item, event) {

		        event.preventDefault;

		        // href key gets added inside item from options.href configuration
		        alert(item.href);

		    }
		},
		debug: true

	});


	sAnimation5.registry.Sitelab4 = sAnimation5.Class.extend({
	//animation.registry.OdooWebsiteSearchSuggestion = animation.Class.extend({
		selector: ".input-search_job",
		start: function () {
		    console.log("start job")
		    var self = this;
		    console.log("start caleedddddddddddddd job",this.$target.typeahead)
		    this.$target.attr("autocomplete","off");
            this.$target.parent().addClass("typeahead__container");


            this.$target.typeahead({
            	minLength: 1,
				maxItem: 15,

				delay: 500,
				order: "asc",
				hint: true,
				dynamic:true,
				display: ["job"],
				maxItemPerGroup: 5,
                template: '<span>' +
                          '<span>{{job}}</span>' +
                          '</span>',
                source:{ product:{ url: [{ type : "GET", url : "/search_job/suggestion", data : { query : "{{query}}"},},"data.job"] },},
              });


              //console.log("222222222222222222 caleedddddddddddddddddddddddddddddddddd",this.$target)


		},


		callback: {
		    onClickAfter: function (node, a, item, event) {

		        event.preventDefault;

		        // href key gets added inside item from options.href configuration
		        alert(item.href);

		    }
		},
		debug: true

	});



		sAnimation6.registry.Sitelab5 = sAnimation6.Class.extend({
	//animation.registry.OdooWebsiteSearchSuggestion = animation.Class.extend({
		selector: ".input-contry",
		start: function () {
		    //console.log("start caleedddddddddddddddddddddddddddddddddd")
		    var self = this;
		    //console.log("start caleedddddddddddddddddddddddddddddddddd",this.$target.typeahead)
		    this.$target.attr("autocomplete","off");
            this.$target.parent().addClass("typeahead__container");


            this.$target.typeahead({
            	minLength: 1,
				maxItem: 15,

				delay: 500,
				order: "asc",
				hint: true,
				dynamic:true,
				display: ["country"],
				maxItemPerGroup: 5,
                template: '<span>' +
                          '<span>{{country}}</span>' +
                          '</span>',
                source:{ product:{ url: [{ type : "GET", url : "/search_country/suggestion", data : { query : "{{query}}"},},"data.country"] },},
              });


              //console.log("222222222222222222 caleedddddddddddddddddddddddddddddddddd",this.$target)


		},


		callback: {
		    onClickAfter: function (node, a, item, event) {

		        event.preventDefault;

		        // href key gets added inside item from options.href configuration
		        alert(item.href);

		    }
		},
		debug: true

	});



		sAnimation7.registry.Sitelab6 = sAnimation7.Class.extend({
	//animation.registry.OdooWebsiteSearchSuggestion = animation.Class.extend({
		selector: ".input-search-person",
		start: function () {
		    //console.log("start caleedddddddddddddddddddddddddddddddddd")
		    var self = this;
		    //console.log("start caleedddddddddddddddddddddddddddddddddd",this.$target.typeahead)
		    this.$target.attr("autocomplete","off");
            this.$target.parent().addClass("typeahead__container");


            this.$target.typeahead({
            	minLength: 1,
				maxItem: 15,

				delay: 500,
				order: "asc",
				hint: true,
				dynamic:true,
				display: ["person"],
				maxItemPerGroup: 5,
                template: '<span>' +
                          '<span>{{person}}</span>' +
                          '</span>',
                source:{ product:{ url: [{ type : "GET", url : "/search_person/suggestion", data : { query : "{{query}}"},},"data.person"] },},
              });


              //console.log("222222222222222222 caleedddddddddddddddddddddddddddddddddd",this.$target)


		},


		callback: {
		    onClickAfter: function (node, a, item, event) {

		        event.preventDefault;

		        // href key gets added inside item from options.href configuration
		        alert(item.href);

		    }
		},
		debug: true

	});



	sAnimation8.registry.Sitelab7 = sAnimation8.Class.extend({
	//animation.registry.OdooWebsiteSearchSuggestion = animation.Class.extend({
		selector: ".input-search-pays",
		start: function () {
		    //console.log("start caleedddddddddddddddddddddddddddddddddd")
		    var self = this;
		    //console.log("start caleedddddddddddddddddddddddddddddddddd",this.$target.typeahead)
		    this.$target.attr("autocomplete","off");
            this.$target.parent().addClass("typeahead__container");


            this.$target.typeahead({
            	minLength: 1,
				maxItem: 15,

				delay: 500,
				order: "asc",
				hint: true,
				dynamic:true,
				display: ["country"],
				maxItemPerGroup: 5,
                template: '<span>' +
                          '<span>{{country}}</span>' +
                          '</span>',
                source:{ product:{ url: [{ type : "GET", url : "/search_person_country/suggestion", data : { query : "{{query}}"},},"data.country"] },},
              });


              //console.log("222222222222222222 caleedddddddddddddddddddddddddddddddddd",this.$target)


		},


		callback: {
		    onClickAfter: function (node, a, item, event) {

		        event.preventDefault;

		        // href key gets added inside item from options.href configuration
		        alert(item.href);

		    }
		},
		debug: true

	});



	sAnimation9.registry.Sitelab8 = sAnimation9.Class.extend({
	//animation.registry.OdooWebsiteSearchSuggestion = animation.Class.extend({
		selector: ".input-search-faculte",
		start: function () {
		    console.log("start  univ caleedddddddddddddddddddddddddddddddddd")
		    var self = this;
		    //console.log("start caleedddddddddddddddddddddddddddddddddd",this.$target.typeahead)
		    this.$target.attr("autocomplete","off");
            this.$target.parent().addClass("typeahead__container");


            this.$target.typeahead({
            	minLength: 1,
				maxItem: 15,

				delay: 500,
				order: "asc",
				hint: true,
				dynamic:true,
				display: ["university"],
				maxItemPerGroup: 5,
                template: '<span>' +
                          '<span>{{university}}</span>' +
                          '</span>',
                source:{ product:{ url: [{ type : "GET", url : "/search_person_university/suggestion", data : { query : "{{query}}"},},"data.university"] },},
              });


              //console.log("222222222222222222 caleedddddddddddddddddddddddddddddddddd",this.$target)


		},


		callback: {
		    onClickAfter: function (node, a, item, event) {

		        event.preventDefault;

		        // href key gets added inside item from options.href configuration
		        alert(item.href);

		    }
		},
		debug: true

	});

	sAnimation10.registry.Sitelab9 = sAnimation10.Class.extend({
	//animation.registry.OdooWebsiteSearchSuggestion = animation.Class.extend({
		selector: ".input-search-interest",
		start: function () {
		    //console.log("start caleedddddddddddddddddddddddddddddddddd")
		    var self = this;
		    //console.log("start caleedddddddddddddddddddddddddddddddddd",this.$target.typeahead)
		    this.$target.attr("autocomplete","off");
            this.$target.parent().addClass("typeahead__container");


            this.$target.typeahead({
            	minLength: 1,
				maxItem: 15,

				delay: 500,
				order: "asc",
				hint: true,
				dynamic:true,
				display: ["interest"],
				maxItemPerGroup: 5,
                template: '<span>' +
                          '<span>{{interest}}</span>' +
                          '</span>',
                source:{ product:{ url: [{ type : "GET", url : "/search_person_interest/suggestion", data : { query : "{{query}}"},},"data.interest"] },},
              });


              //console.log("222222222222222222 caleedddddddddddddddddddddddddddddddddd",this.$target)


		},


		callback: {
		    onClickAfter: function (node, a, item, event) {

		        event.preventDefault;

		        // href key gets added inside item from options.href configuration
		        alert(item.href);

		    }
		},
		debug: true

	});



		sAnimation11.registry.Sitelab10 = sAnimation10.Class.extend({
	//animation.registry.OdooWebsiteSearchSuggestion = animation.Class.extend({
		selector: ".input-search_event",
		start: function () {
		    //console.log("start caleedddddddddddddddddddddddddddddddddd")
		    var self = this;
		    //console.log("start caleedddddddddddddddddddddddddddddddddd",this.$target.typeahead)
		    this.$target.attr("autocomplete","off");
            this.$target.parent().addClass("typeahead__container");


            this.$target.typeahead({
            	minLength: 1,
				maxItem: 15,

				delay: 500,
				order: "asc",
				hint: true,
				dynamic:true,
				display: ["event"],
				maxItemPerGroup: 5,
                template: '<span>' +
                          '<span>{{event}}</span>' +
                          '</span>',
                source:{ product:{ url: [{ type : "GET", url : "/search_event/suggestion", data : { query : "{{query}}"},},"data.event"] },},
              });


              //console.log("222222222222222222 caleedddddddddddddddddddddddddddddddddd",this.$target)


		},


		callback: {
		    onClickAfter: function (node, a, item, event) {

		        event.preventDefault;

		        // href key gets added inside item from options.href configuration
		        alert(item.href);

		    }
		},
		debug: true

	});
});;
