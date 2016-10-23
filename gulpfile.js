'use strict';

// 载入Gulp模块
var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// 注册样式编译任务
gulp.task('style', function() {
  gulp.src('src/styles/*.less')
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/styles'))
    .pipe(reload({
      stream: true
    }));
});

// 注册脚本合并压缩任务
gulp.task('script', function() {
  gulp.src('src/scripts/*.js')
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(reload({
      stream: true
    }));
});

gulp.task('image', function() {
  gulp.src('src/images/*.*')
    .pipe(gulp.dest('dist/images'))
    .pipe(reload({
      stream: true
    }));
})

gulp.task('html', function() {
  gulp.src('src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
    }))
    .pipe(gulp.dest('dist'))
    .pipe(reload({
      stream: true
    }));
});

//把browsersync设置成gulp默认启动任务
var browserSync = require('browser-sync').create();
// Static server
gulp.task('serve', function() {
	var files = [
	'**/*.html',
	'**/*.css',
	'**/*.js'
	];
	browserSync.init(files,{
		server: {
			baseDir: "./"
		}
	});
});
gulp.task('default',['serve']); //定义默认任务
'use strict';

// 载入Gulp模块
var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// 注册样式编译任务
gulp.task('style', function() {
  gulp.src('src/styles/*.less')
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/styles'))
    .pipe(reload({
      stream: true
    }));
});

// 注册脚本合并压缩任务
gulp.task('script', function() {
  gulp.src('src/scripts/*.js')
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(reload({
      stream: true
    }));
});

gulp.task('image', function() {
  gulp.src('src/images/*.*')
    .pipe(gulp.dest('dist/images'))
    .pipe(reload({
      stream: true
    }));
})

gulp.task('html', function() {
  gulp.src('src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
    }))
    .pipe(gulp.dest('dist'))
    .pipe(reload({
      stream: true
    }));
});

//把browsersync设置成gulp默认启动任务
var browserSync = require('browser-sync').create();
// Static server
gulp.task('serve', function() {
	var files = [
	'**/*.html',
	'**/*.css',
	'**/*.js'
	];
	browserSync.init(files,{
		server: {
			baseDir: "./"
		}
	});
});
gulp.task('default',['serve']); //定义默认任务
'use strict';

// 载入Gulp模块
var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// 注册样式编译任务
gulp.task('style', function() {
  gulp.src('src/styles/*.less')
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/styles'))
    .pipe(reload({
      stream: true
    }));
});

// 注册脚本合并压缩任务
gulp.task('script', function() {
  gulp.src('src/scripts/*.js')
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(reload({
      stream: true
    }));
});

gulp.task('image', function() {
  gulp.src('src/images/*.*')
    .pipe(gulp.dest('dist/images'))
    .pipe(reload({
      stream: true
    }));
})

gulp.task('html', function() {
  gulp.src('src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
    }))
    .pipe(gulp.dest('dist'))
    .pipe(reload({
      stream: true
    }));
});

//把browsersync设置成gulp默认启动任务
var browserSync = require('browser-sync').create();
// Static server
gulp.task('serve', function() {
	var files = [
	'**/*.html',
	'**/*.css',
	'**/*.js'
	];
	browserSync.init(files,{
		server: {
			baseDir: "./"
		}
	});
});
gulp.task('default',['serve']); //定义默认任务
'use strict';

// 载入Gulp模块
var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// 注册样式编译任务
gulp.task('style', function() {
  gulp.src('src/styles/*.less')
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/styles'))
    .pipe(reload({
      stream: true
    }));
});

// 注册脚本合并压缩任务
gulp.task('script', function() {
  gulp.src('src/scripts/*.js')
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(reload({
      stream: true
    }));
});

gulp.task('image', function() {
  gulp.src('src/images/*.*')
    .pipe(gulp.dest('dist/images'))
    .pipe(reload({
      stream: true
    }));
})

gulp.task('html', function() {
  gulp.src('src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
    }))
    .pipe(gulp.dest('dist'))
    .pipe(reload({
      stream: true
    }));
});

//把browsersync设置成gulp默认启动任务
var browserSync = require('browser-sync').create();
// Static server
gulp.task('serve', function() {
	var files = [
	'**/*.html',
	'**/*.css',
	'**/*.js'
	];
	browserSync.init(files,{
		server: {
			baseDir: "./"
		}
	});
});
gulp.task('default',['serve']); //定义默认任务
