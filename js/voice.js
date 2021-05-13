function vocietext(){
	if (i == 0){
		var a = Math.floor(Math.random() * 9);
		if( a == 0){
			document.getElementById('yuyin').src = "./voice/amiya-2.mp3";
			document.getElementById('vocietext').innerHTML = "罗德岛全舰正处于通常航行状态。博士，整理下航程信息吧？";
			var myAuto = document.getElementById('yuyin');
            myAuto.play();
		}else if( a == 1){
			document.getElementById('yuyin').src = "./voice/amiya-1.mp3";
			document.getElementById('vocietext').innerHTML = "凯尔希医生教导过我，工作的时候一定要保持全神贯注......嗯，全神贯注。";
			var myAuto = document.getElementById('yuyin');
            myAuto.play();
		}else if(a == 2){
			document.getElementById('yuyin').src = "./voice/amiya-3.wav";
			document.getElementById('vocietext').innerHTML = "作为罗德岛的领导者我还有很多不成熟的地方，希望您能更多地为我指明前进的方向。";
			var myAuto = document.getElementById('yuyin');
            myAuto.play();
		}else if(a == 3){
			document.getElementById('yuyin').src = "./voice/amiya-4.wav";
			document.getElementById('vocietext').innerHTML = "虽然这可能是我一厢情愿的想法，但我希望罗德岛能成为大家的第二个故乡......";
			var myAuto = document.getElementById('yuyin');
            myAuto.play();
		}else if(a == 4){
			document.getElementById('yuyin').src = "./voice/amiya-5.wav";
			document.getElementById('vocietext').innerHTML = "我们失去了很多才走到今天。有时候我会问自己，这一切真的值得么....？";
			var myAuto = document.getElementById('yuyin');
            myAuto.play();
		}else if(a == 5){
			document.getElementById('yuyin').src = "./voice/amiya-6.wav";
			document.getElementById('vocietext').innerHTML = "有时候，我会想起寒冷的家乡，那里就连空气中都弥漫着铜锈的味道。相比之下罗德岛是如此的温暖。所以，为了守护好这里，我必须更加努力才行。";
			var myAuto = document.getElementById('yuyin');
            myAuto.play();
		}else if(a == 6){
			document.getElementById('yuyin').src = "./voice/amiya-7.wav";
			document.getElementById('vocietext').innerHTML = "有时候，我会想起寒冷的家乡，那里就连空气中都弥漫着铜锈的味道。相比之下罗德岛是如此的温暖。所以，为了守护好这里，我必须更加努力才行。";
			var myAuto = document.getElementById('yuyin');
            myAuto.play();
		}else if(a == 7){
			document.getElementById('yuyin').src = "./voice/amiya-8.wav";
			document.getElementById('vocietext').innerHTML = "ふふ…実は私、またヴァイオリンの練習をし始めたんです。今度のパーティーでみなさんにサプライズを……だからドクター、みなさんには内緒ですよ……？";
			var myAuto = document.getElementById('yuyin');
            myAuto.play();
		}else if(a == 8){
			document.getElementById('yuyin').src = "./voice/amiya-9.wav";
			document.getElementById('vocietext').innerHTML = "博士，我们的脚下，是一条漫长的道路......也许这是一次没有终点的旅行，但如果是和您一起，我觉得，非常幸福。";
			var myAuto = document.getElementById('yuyin');
            myAuto.play();
		}
	}
}