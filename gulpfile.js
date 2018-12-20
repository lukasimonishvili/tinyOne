let gulp = require("gulp");
let sass = require("gulp-sass");

gulp.task("sass", function(){
    return gulp.src("./public/css/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./public/css"));
});

gulp.task("watch", function(){
    gulp.watch("./public/css/*.scss", gulp.series("sass"));
});