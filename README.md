# 关于Aimwidget

我们整理一系列基于Taro开发的插件（我们称为Widget），内容包括趣味性小游戏、营销小场景，形式上建议单页面，均采用Taro框架开发

![Aimwidget](/git-assets/aimwidget.png)

展示地址（以微信为例）

![qr-code](/git-assets/qrcode.png)

如果您有任何建议或者提交插件的想法，请联系我们

- [https://github.com/aimwidget/sample/discussions](https://github.com/aimwidget/sample/discussions)


# 开发相关

## 步骤

按照项目实际需要，修改以下各文件

- `app.config.js` 
```
'pages/sample/index'
```
- `pages/sample/index.jsx`
```
import { postSamples } from '../../api/sample'
```

## 运行

以微信为例

```
yarn dev:weapp
```

# 请我们喝杯咖啡

<img src="./git-assets/donate.png" width="300">

