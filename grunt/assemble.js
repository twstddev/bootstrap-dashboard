module.exports = {
	options : {
		data : [ "<%= src %>/data/*.json" ],
		partials : [ "<%= src %>/templates/partials/**/*.hbs" ],
		layout : [ "<%= src %>/templates/layouts/default.hbs" ],
	},

	pages : {
		files : [ {
			expand : true,
			cwd : "<%= src %>/templates/pages/",
			src : "*.hbs", 
			dest : "<%= build %>/"
		} ]
	},

	general : {
		options : {
			layout : "<%= src %>/templates/layouts/general.hbs"
		},

		files : [ {
			expand : true,
			cwd : "<%= src %>/templates/general/",
			src : "*.hbs", 
			dest : "<%= build %>/"
		} ]
	},

	admin : {
		options : {
			layout : "<%= src %>/templates/layouts/admin.hbs"
		},

		files : [ {
			expand : true,
			cwd : "<%= src %>/templates/pages",
			src : "*.hbs",
			dest : "<%= build %>/"
		} ]
	}
};
