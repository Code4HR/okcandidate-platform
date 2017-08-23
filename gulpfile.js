'use strict';

const gulp = require('gulp');
const { tasks } = require('./config/gulp');
const compileTasks = tasks.default.filter(task => {
    return !task.includes('watch');
});

compileTasks.forEach(task => {
    gulp.task(task, tasks[task]);
});

gulp.task('default', compileTasks);
