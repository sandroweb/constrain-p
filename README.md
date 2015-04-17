# ConstrainP [![Build Status](https://travis-ci.org/sandroweb/constrain-p.svg?branch=master)](https://travis-ci.org/sandroweb/constrain-p)


### About
jQuery Plugin to auto resize elements with constrain proportions enabled.

This plugin is also available on [Bower](http://bower.io/).
```
bower install constrain-p
```


### Dependences

- [JQuery](https://jquery.com)


### Usage

Add the attributes at your tag.
The bellow example is with minimum attributes to the use.

#### 1. Html tag
```
<div data-original-size="800x600"></div>
```

#### 2. jQuery call
```
$('.my-player').constrainP();
```


But, it's not only this!!!


### More HTML options

The HTML tag gives more options to customize.

#### data-min-size
Type: `String`                   
Default: `0x0` (WIDTHxHEIGHT)    

To limit the minimum size. When width or height is 0, this size will is disabled.      
The below example will limit only per the height.                  
`<div data-original-size="800x600" data-min-size="0x300"></div>`   

#### data-max-size
Type: `String`                   
Default: `0x0` (WIDTHxHEIGHT)    

To limit the maximum size. When width or height is 0, this size will is disabled.
The below example will limit only per the height.                 
`<div data-original-size="800x600" data-max-size="200x0"></div>`  

#### data-guide
Type: `String`      
Default: `width`    

This attribute is using `width`, `height` or `all` to guide the resize.     
`<div data-original-size="800x600" data-guide="height"></div>`              


### Doubts
[sandro@sandrosantos.art.br](mailto:sandro@sandrosantos.art.br)
