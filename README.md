# notificationBar
a simple js notificationBar for web and app , u can also filed it with ur own style

## how to use

### 1、u should  download the cabar.js in lib and use it just like
```html
<script src="../lib/cabar.js"></script>
```
### 2、u can use in the way
```javascript
showBar('your words')
```
### or config it in ur way
```javascript
            var option = {
                'backgroundColor': '#66ffcc',
                'height':120,
                'lineHeight':120+'px',
                'top':'-120px'
            };
            showBar('nobody loving me but u', 1000, 4, option);
```
```javascript
            showBar('nobody loving me but u', 'success');
```
### 3、 parameters
#### showBar(word, type, holding, speed, option)
---
| field        | type           | description  |
| ------------- |:-------------:| :-----|
|word|string|ur show words|
|type|string|bootstrap style [primary][success][info][warning][danger]|
|holding|integer|how long will ur words show in screen|
|speed|integer|speed!!!|
|option|object|u can config ur own style with javascript stlye attributes|
---
### 4、enjoy it
