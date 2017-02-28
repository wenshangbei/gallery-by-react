require('normalize.css/normalize.css');
require('styles/App.scss'); 

// 获取图片相关的数据
var imageDatas = require('../data/imageDatas.json')
import React from 'react';


// 利用自执行函数， 将图片名信息转成图片RUL路径信息
imageDatas = (function getImageURL(imageDatasArr) {
	for(var i = 0, j = imageDatasArr.length; i < j; i++){
		var singleImageData = imageDatasArr[i];
		
		singleImageData.imageURL = require('../images/' + singleImageData.fileName);
		
		imageDatasArr[i] = singleImageData;
	}
	return imageDatasArr;
})(imageDatas);



alert(imageDatas[1].imageURL);

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
      		<section className="img-sec">
      		</section>
      		<nav className="controller-nav">
      		</nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
