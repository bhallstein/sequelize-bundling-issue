# Sequelize bundling issue replication

Bundling an app that imports Sequelize may fail due to Sequelize's current practice of importing dependencies for multiple DB drivers, even though some of these will not normally be installed (as an individual app will likely use only one DB type).

Alternatively bundling may succeed, but produce a bundle which when executed causes a hard error when it tries to import the non-installed module(s).

### How to replicate:

```sh
npm install
npm run build
node dist/app.js
```

*Sample output from running bundled app.js*:
```
$ node dist/app.js
node:internal/errors:490
    ErrorCaptureStackTrace(err);
    ^

Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'pg-hstore' imported from /Users/ben/Desktop/sequelize-bundling-issue/dist/app.js
    at new NodeError (node:internal/errors:399:5)
    at packageResolve (node:internal/modules/esm/resolve:794:9)
    at moduleResolve (node:internal/modules/esm/resolve:843:20)
    at defaultResolve (node:internal/modules/esm/resolve:1058:11)
    at nextResolve (node:internal/modules/esm/loader:164:28)
    at ESMLoader.resolve (node:internal/modules/esm/loader:838:30)
    at ESMLoader.getModuleJob (node:internal/modules/esm/loader:419:18)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:77:40)
    at link (node:internal/modules/esm/module_job:76:36) {
  code: 'ERR_MODULE_NOT_FOUND'
}

Node.js v19.4.0
```


### Links to relevant issues:

- https://github.com/sequelize/sequelize/issues/7509 (closed in 2017 then re-opened by popular demand)
  - [Comment suggesting init improvement](https://github.com/sequelize/sequelize/issues/7509#issuecomment-754345526)
- https://github.com/sequelize/sequelize/issues/13169 (closed, demo repo requested to re-open)
- https://github.com/sequelize/sequelize/issues/9489

