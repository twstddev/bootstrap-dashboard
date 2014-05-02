module.exports = {
	images : {
		expand : true,
		cwd : "<%= src %>/img/",
		src : "**/*.*",
		dest : "<%= build %>/img"
	},

	favicon : {
		expand : true,
		cwd : "<%= src %>",
		src : "*.ico",
		dest : "<%= build %>"
	},

	downloads : {
		expand : true,
		cwd : "<%= src %>/downloads/",
		src : "**/*.*",
		dest : "<%= build %>/downloads"
	},

	vendorjs : {
		expand: true,
		cwd : "<%= src %>/vendorlibs",
		src : [ 
			"jquery/jquery.js",
			"jquery-migrate/jquery-migrate.js",
			"selectivizr/selectivizr.js",
			"modernizr/modernizr.js",
			"bootstrap/bootstrap.js"
		],
		dest : "<%= build %>/vendorlibs"
	},

	vendorcss : {
		expand : true,
		cwd : "<%= src %>/vendorlibs",
		src : [
			"bootstrap/bootstrap.css"
		],
		dest : "<%= build %>/vendorlibs"
	},

	vendorfonts : {
		expand : true,
		cwd : "<%= src %>/vendorlibs/bootstrap",
		src : [
			"glyphicons-*"
		],
		dest : "<%= build %>/vendorlibs/fonts/"
	},

	dist : {
		expand: true,
		cwd : "<%= build %>",
		src : [ "downloads/**/*.*", "favicon.ico" ],
		dest : "<%= dist %>"
	}
};
