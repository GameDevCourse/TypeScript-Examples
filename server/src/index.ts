import * as Koa from "koa"
import * as fs from 'fs-extra-promise';
import * as Router from 'koa-router';


declare interface Request extends Koa.Request {

    body: any;

}

declare interface Body extends Router.IRouterContext {

    request: Request
}

const app = new Koa()
const router = new Router();
router.get('/users', async (ctx, next) => {
    await next();
    ctx.response.type = "text/json";
    const json = await fs.readJSONAsync("users.json");
    ctx.response.body = json;
})
router.get('/users/:name', async (ctx, next) => {
    await next();
    ctx.response.type = "text/json";
    const json = await fs.readJSONAsync("users.json");
    let result = json.users[ctx.params.name];
    if (!result) {
        result = {};
    }
    ctx.response.body = result;

})
router.post('/users/', async (ctx: Body, next) => {
    // ctx.request.query
    ctx.body;
    console.log(ctx.request['body'])
    console.log(ctx.request)
    ctx.response.type = "text/json";
    ctx.response.body = ctx.request['body'];
});
router.del('/users/:name', async (ctx, next) => {
    await next();
    ctx.response.type = "text/json";
    const json = await fs.readJSONAsync("users.json");
    delete json.users[ctx.params.name];
    await fs.writeJsonAsync("users.json", json);
    ctx.response.body = { "code": 0 }
});
app.use(router.routes());
app.listen(80);


import * as http from 'http';
http.createServer((req, res) => {
    // console.log(req)
    req.addListener("data", function (postDataChunk) {
        console.log(postDataChunk.toString())
    })
}).listen(8001)


