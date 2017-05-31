/**
 * Created by likai on 2017/5/31.
 */
const Koa = require("koa");
const router = require("koa-router")();
const formidable = require("formidable");
const bluebird = require("bluebird");
const app = new Koa();
app.use(router.routes());

router.get("/index",(ctx)=>{
    ctx.body = require("fs").readFileSync("./index.html","utf-8");
})

router.post('/base64',(ctx, next) => {
    var form = new formidable.IncomingForm();

    bluebird.promisify(form.parse);

form.parse(ctx.req,function(err,fields){
        if(err){throw err; return;}
        console.log(fields);//{ name: base64字符串 }
        ctx.body = fields.name
    });


});

app.listen(3000);