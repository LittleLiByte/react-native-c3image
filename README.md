# react-native-placeholder-image
react-native-placeholder-image base on the official image component,which can load image smoothly on both iOS and Android,and when when the image load error,this component can show the error image you set.



## Installation
```npm
npm install react-native-c3image  --save
```

## usage

use just like a normal image component.

```xquery
import C3Image from 'react-native-placeholder-image'
<C3Image
                    style={{width:200,height:200}}
                    borderRadius={100}
                    source={{uri:'http://om2bpqram.bkt.clouddn.com/1496312196573.jpg'}}
                />
```

if you want to change the placeholderSource and placeholderErrorSource image source,use like this:

```xquery
import C3Image from 'react-native-placeholder-image'
<C3Image
                    style={{width:200,height:200}}
                    borderRadius={100}
                    source={{uri:'http://om2bpqram.bkt.clouddn.com/1496312196573.jpg'}}
                    placeholderSource={{uri:'http://om2bpqram.bkt.clouddn.com/1496312196573.jpg'}}
                    placeholderErrorSource={{uri:'http://om2bpqram.bkt.clouddn.com/1496312196573.jpg'}}
                />
```