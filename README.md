# vue-hastebin

Simple pastebin with image uploading

### Demo
https://vue-hastebin-ulczkosxiv.now.sh/

### Installation and Usage

1. Make sure you have [Docker installed](https://docs.docker.com/engine/installation/) and running on your host.
2. Pull and run vue-pastebin using docker:

```
docker run -p 5000:5000 -d xa3apg/vue-pastebin
```

### Compiles for production
```
yarn install
yarn run build

cd server
yarn install
yarn run serve # Server on 0.0.0.0:5000
```

### Screenshots

image upload

![upload](https://raw.githubusercontent.com/XpycT/vue-hastebin/master/images/img_upload.png)

code sharing

![code](https://raw.githubusercontent.com/XpycT/vue-hastebin/master/images/code_example.png)


### License
Licensed under MIT.
