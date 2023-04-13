var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors = require('cors');
testAPIRouter=require('./routes/testApi');
containerLISTRouter=require('./routes/container list');
imageLISTRouter=require('./routes/image list');
volumeLISTRouter=require('./routes/volume list');
versionRouter=require('./routes/version');
createContainer=require('./routes/create container');
pullImage=require('./routes/pull image');
detailImg=require('./routes/detailsImg');
Networkls=require('./routes/Network');
NetworkInspect=require('./routes/InspectNet');
cmdl = require('./routes/commandlines');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var NetworkDownload = require('./routes/downs');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/testapi',testAPIRouter);
app.use('/container-ls',containerLISTRouter);
app.use('/image-ls',imageLISTRouter);
app.use('/volume-ls',volumeLISTRouter);
app.use('/version',versionRouter);
app.use('/createContainers*',createContainer);
app.use('/PullImg*',pullImage);
app.use('/DetailsImg*',detailImg);
app.use('/Network',Networkls);
app.use('/Network-*',NetworkInspect);
app.use('/download-*',NetworkDownload);
app.use('/cmd?*',cmdl);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
