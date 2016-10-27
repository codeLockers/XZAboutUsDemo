'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ListView,
  Text
} from 'react-native';

class XZAboutUsScene extends Component {

	static defaultProps = {
	  
	  contentArray:[
	  				[
	  					{title:'','content':'极课大数据作为一家主打K12教育+互联网服务产品的常态化精益教学服务商，以学校教育为核心，致力于通过“图像模式识别”“云计算”“大数据分析”等前沿技术，在不改变老师传统教学习惯的前提下，对科学教学模型实现常态化采集、专业化分析、智能化管理。有效助力老师精益教学、学生灵巧学习，家校互动无间，真正实现科学提升教育生产力。'}
	  				],
	  				[
	  					{title:'江苏曲速教育科技有限公司','content':'地点：江苏省无锡市新吴区震泽路18号金牛座1楼\n客服：400-1155-618客服QQ：400115618\n传真：0510-68006789-8010邮箱：fclassroom@fclassroom.com\n网址：http://www.fclassroom.com'}
	  				],
	  				[
	  					{title:'1.方式不变','content':'不改变教师现有作业批改及阅卷习惯，保持纸质批改方式，做到批改有痕迹。'},
	  					{title:'2.海量资源','content':'高频错题重组，学科网、学大系统题库共享、解决出卷难问题'},
	  					{title:'3.自动生成报表','content':'教学统计报表自动生成，实现“高效精准课堂”、“考试分析有理有据”'},
	  					{title:'4.智能分析及归档','content':'帮助教师实时统计分析学生成绩，了解每一个学生知识点掌握情况；学生学业档案自动生成，可以对学习情况给出客观的过程性评价'}
	  				]
	  				
	  				]
	}

	constructor(props) {
	  super(props);

	  var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2})
	  this.state = {
	  	dataSource:ds.cloneWithRows(['我们做什么?','我们是谁?','什么是极课教师?'])
	  };
	}


	_renderRow(rowData,sectionID,rowID,highlightRow){

		let contentView = this.props.contentArray[rowID].map((data,i) => {

			let titleHeight = (data.title.length == 0) ? 0 : 17
			let titleMargin = (data.title.length == 0) ? 0 : 10
			return (
					<View 
					key={sectionID+rowID+i}
					style={{marginTop:15}}>
						<Text style={{marginHorizontal:15,fontSize:16,height:titleHeight}}>{data.title}</Text>
						<Text 
						style={{marginHorizontal:15,marginTop:titleMargin,fontSize:13,color:'rgb(92,94,101)'}}
						>{data.content}</Text>
					</View>
				)
		})

// <Text >{this.props.contentArray[rowID]}</Text>
		return (

			<View style={{paddingBottom:10}}>
				<View style={{height:45,justifyContent: 'center',}}>
					<Text style={{color:'rgb(90,152,253)',fontSize:22,paddingLeft:15}}>{rowData}</Text>
				</View>
				<View style={{height:0.5,backgroundColor:'rgb(239,239,239)'}}></View>
				{contentView}
			</View>

			)
	}

	_renderSeparator(sectionID,rowID,adjacentRowHighlighted){

		if (rowID == 2) {
			return
		}

		return(
			<View style={{height:8,backgroundColor:'rgb(249,249,249)'}} key={sectionID+rowID}>
				<View style={{height:1,backgroundColor:'rgb(239,239,239)'}}/>
				<View style={{height:1,backgroundColor:'rgb(239,239,239)',marginTop:6}}/>
			</View>
			)
	}


  	render() {
	 return (

	   <ListView 
		style={{flex: 1,paddingTop:64}}
		dataSource={this.state.dataSource}
		renderSeparator={this._renderSeparator}
		renderRow={this._renderRow.bind(this)}
		/>
    );
  }
}

const styles = StyleSheet.create({

});


export default XZAboutUsScene;