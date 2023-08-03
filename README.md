### set up sentry value 
replace your dsn at ```/src/config``` 

replace your project info inside ```sentry.properties```

### set up etc/hosts
```
127.0.0.1 cdn.localhost
```

### install dependency
```npm i or yarn or pnpm i```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### Reproduce Step
Just click LinkButton and see network tab
the error will occur only the first time you click that LinkButton


so if you want to see it again you can rerun ```pnpm dev``` and hard refresh
then you can click LinkButton again too see error 
