
Ti.UI.backgroundColor = 'white';
var winLand = Ti.UI.createWindow({
backgroundColor: '#000000'
});

var view = Ti.UI.createView({
top: '0px',
height: '10%',
bottom: 5
});

var label = Ti.UI.createLabel({
text : ' Alerts',
color : '#FF0000',
top: '10',
font: {fontSize: 20, fontWeight: 'bold'},
textAlign : 'left'
});

var tableData = [ 'Moose on Campus!', 'Weather Advisory', 
'Another Moose on Campus'];

var table = Ti.UI.createTableView({
top: '100px',
bottom: 0,
  data: tableData,
});

allRows = [];

for (var i=0; i<tableData.length; i++){
if (i%2 == 0){ // if case is looking to see if there is a remainder or not, in this case we don't want one
theRow = Ti.UI.createTableViewRow({
title: tableData[i],
backgroundColor: '#000005',
color: '#9f9d9d',
clubInfo: tableData[i]
});
};
if( i%2 == 1){ // if case is looking to see if there is a remainder or not, in this case we want a remainder
theRow = Ti.UI.createTableViewRow({
title: tableData[i],
backgroundColor: '#b18e5f',
color: '#000005',
clubInfo: tableData[i]
});
};
allRows.push(theRow); 
};

table.setData(allRows);
view.add(label);
winLand.add(view);
winLand.add(table);
winLand.open();

function openWindow(club){
var indicator = club.charAt (0);

if(indicator == 'M'){
var win1 = Ti.UI.createWindow();
var view1 = Ti.UI.createView();
var label1 = Ti.UI.createLabel ({
borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
color: '#9f9d9d',
top:10,
fontsize:14,
text: 'On Friday May 10th, a moose was spotted on campus near the alb. Please be aware that these animals are not friendly and will attack if provoked. It is best to stay clear of them and do not try to pet the animal. Thank you and stay safe!'
});
var button1 = Ti.UI.createButton({
title : 'Contact Information',
color: '#ffd700',
height : 50,
top : '75%'
});
var buttonView1 = Ti.UI.createView({
top: '75%'
});
var button1 = Ti.UI.createButton({
title : 'Contact Information',
height: 50,
width: '100%'
//top: '75%'
});
buttonView1.add(button1);
win1.add(buttonView1); 
view1.add(label1);
win1.add(button1);
win1.add(view1);
win1.open();
button1.addEventListener('click', function(e){
button1open(); });
return 0;
};
if(indicator == 'W'){
var win2 = Ti.UI.createWindow({
});
var view2 = Ti.UI.createView();
var label2 = Ti.UI.createLabel ({
borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
color: '#9f9d9d',
top:10,
fontsize:14,
text: 'There is a weather advisory for Monday May 13th. The Palouse area will experience heavy rain fall and winds up to 60 mph. Please take appropriate action to ensure your safety and the safety of others. Thank you.'
});
var button2 = Ti.UI.createButton({
title: 'Contact Information',
color: '#ffd700',
height: 50,
top: '75%'
});
var buttonView2 = Ti.UI.createView({
top: '75%'
});
var button2 = Ti.UI.createButton({
title : 'Contact Information',
height: 50,
width: '100%'
//top: '75%'
});
buttonView2.add(button2);
win2.add(buttonView2); 
view2.add(label2);
win2.add(button2);
win2.add(view2);
win2.open();
button2.addEventListener('click', function(e){
button2open(); });
return 0;
};
if(indicator == 'A'){
var win3 = Ti.UI.createWindow({
});
var view3 = Ti.UI.createView();
var label3 = Ti.UI.createLabel ({
borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
color: '#9f9d9d',
top:10,
fontsize:14,
text: 'Another moose, possibly the same one as before, has been spotted on campus. The moose was spotted near Sigma Chi and headed west. Please stay aware and do not try to interact with the animal. Thank you and stay safe.'
});
var button3 = Ti.UI.createButton({
title : 'Contact Information',
color: '#ffd700',
height: 50,
top: '75%'
});
var buttonView3 = Ti.UI.createView({
top: '75%'
});
var button3 = Ti.UI.createButton({
title : 'Contact Information',
height: 50,
width: '100%'
//top: '75%'
});
buttonView3.add(button3);
win3.add(buttonView3); 
view3.add(label3);
win3.add(button3);
win3.add(view3);
win3.open();
button3.addEventListener('click', function(e){
button3open(); 
});
return 0; 
};
};

table.addEventListener('click', function(e)
	{openWindow(e.source.clubInfo); });
//Starting of second table code

var viewWeather = Ti.UI.createView({
top: 150,
height: '10%',
});

var labelWeather = Ti.UI.createLabel({
text : ' Recent News',
color : '#b18e5f',
top: 10,
font: {fontSize: 20, fontWeight:'bold'},
textAlign : 'left'
});

var tableDataWeather = [ 'College of Law Receives High Grades From preLaw Magazine', 'Director of Career Center Receives Leadership in Career Development Award', 
'UI College of Art and Architecture Announces Winners of 24th Annual High School Art Exhibition'];

var tableWeather = Ti.UI.createTableView({
top: '40%',
  data: tableDataWeather,
});

allRows = [];

for (var i=0; i<tableDataWeather.length; i++){
if (i%2 == 0){ // if case is looking to see if there is a remainder or not, in this case we don't want one
theRow = Ti.UI.createTableViewRow({
title: tableDataWeather[i],
backgroundColor: '#000005',
color: '#9f9d9d',
clubInfo: tableDataWeather[i]
});
};
if( i%2 == 1){ // if case is looking to see if there is a remainder or not, in this case we want a remainder
theRow = Ti.UI.createTableViewRow({
title: tableDataWeather[i],
backgroundColor: '#b18e5f',
color: '#000005',
clubInfo: tableDataWeather[i]
});
};
allRows.push(theRow); 
};

tableWeather.setData(allRows);
viewWeather.add(labelWeather);
winLand.add(viewWeather);
winLand.add(tableWeather);
//winLand.open();

function openWindow2(club){
var indicatorX = club.charAt (0);

if(indicatorX == 'C'){
var win4 = Ti.UI.createWindow();
var view4 = Ti.UI.createView();
var label4 = Ti.UI.createLabel ({
borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
color: '#9f9d9d',
top:10,
fontsize:10,
text: 'The Spring 2015 issue of preLaw magazine recognized the University of Idaho College of Law for the following: \n \n• The College of Law received an A- for Practical Training.\n\n • The College of Law was mentioned in "Around the Nation" for its participation in the U.S. Patent and Trademark Office pilot program.\n\n • The College of Law was recognized, again, as a top law school to attend for its environmental law emphasis.\n\n • The College of Law was recognized as a top law school to attend for its Intellectual Property and Technology law emphasis.' 
});

var button4 = Ti.UI.createButton({
title : 'Contact Information',
color: '#ffd700',
height : 50,
top : '75%'
});
var buttonView4 = Ti.UI.createView({
top: '75%'
});
var button4 = Ti.UI.createButton({
title : 'Contact Information',
height: 50,
width: '100%'
//top: '75%'
});
buttonView4.add(button4);
win4.add(buttonView4); 
view4.add(label4);
win4.add(button4);
win4.add(view4);
win4.open();
button4.addEventListener('click', function(e){
button4open(); });
return 0;
};
if(indicatorX == 'D'){
var win5 = Ti.UI.createWindow({
});
var view5 = Ti.UI.createView();
var label5 = Ti.UI.createLabel ({
borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
color: '#9f9d9d',
top:10,
fontsize:14,
text: 'Suzi Billington, Career Center and ASAP director, will be the co-recipient of the 2015 Idaho Leadership in Career Development Award. Given out by the Idaho Career Development Association, it is the highest honor a career development professional can receive in the state of Idaho. The award will be given out this Friday at the annual Idaho Career Development Conference in Boise. This is the second time in three years a University of Idaho employee has won this award. Cynthia Mika (retiree, 2013) received this award in 2013.'
});
var button5 = Ti.UI.createButton({
title: 'Contact Information',
color: '#ffd700',
height: 50,
top: '75%'
});
var buttonView5 = Ti.UI.createView({
top: '75%'
});
var button5 = Ti.UI.createButton({
title : 'Contact Information',
height: 50,
width: '100%'
//top: '75%'
});
buttonView5.add(button5);
win5.add(buttonView5); 
view5.add(label5);
win5.add(button5);
win5.add(view5);
win5.open();
button5.addEventListener('click', function(e){
button5open(); });
return 0;
};
if(indicatorX == 'U'){
var win6 = Ti.UI.createWindow({
});
var view6 = Ti.UI.createView();
var label6 = Ti.UI.createLabel ({
borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
color: '#9f9d9d',
top:10,
fontsize:14,
text: 'The University of Idaho today announced the winners of the 24th Annual High School Art Exhibition sponsored by the College of Art and Architecture’s Studio Art and Design Program. Entries were judged by Zoe Ball, Mercedes Rennison, Ali Hurt, and Sean Robertson. The following winners were honored at an awards reception on Feb. 27: First Place Winner - $1,000 UI Scholarship and $150 Gift Certificate. More information on U of I webpage. '
});
var button6 = Ti.UI.createButton({
title : 'Contact Information',
color: '#ffd700',
height: 50,
top: '75%'
});
var buttonView6 = Ti.UI.createView({
top: '75%'
});
var button6 = Ti.UI.createButton({
title : 'Contact Information',
height: 50,
width: '100%'
//top: '75%'
});
buttonView6.add(button6);
win6.add(buttonView6); 
view6.add(label6);
win6.add(button6);
win6.add(view6);
win6.open();
button6.addEventListener('click', function(e){
button6open(); });
return 0; 
};
};

tableWeather.addEventListener('click', function(e)
	{openWindow2(e.source.clubInfo); });

function button6open(){
	var win61 = Ti.UI.createWindow({
				backgroundColor: '#000000',
				title: 'Contact Information'
	});
			
	var view61 = Ti.UI.createView({
				
	});
	
	var label61 = Ti.UI.createLabel({
		text: 'Jan Rauk',
		text: 'Phone:	(208) 885-0147',
	    text: 'Email:	jrauk@uidaho.edu'
	});
	view6.add(label61);
	win6.add(view61);
	win61.open();
	return 0;
};

