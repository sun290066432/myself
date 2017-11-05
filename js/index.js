//开始加载时的动画
window.onload=function(){
	
	if(window.name==''){
		window.name=0;
		$(".loadingTop").addClass('slideOutUp');
		$(".loadingBottom").addClass('slideOutDown');
		$(".loadingMiddle").addClass('middle');
	}else{
		window.name=eval(window.name)+1;
		$(".loadingTop,.loadingBottom,.loadingMiddle").remove();
	}
	
};

$(document).ready(function(){
	//fullpage 开始
			$('#dowebok').fullpage({
				'navigation': true,
				anchors: ['page1', 'page2', 'page3', 'page4','page5'],
				menu: '#menu',
				afterLoad: function(anchorLink, index){
					
					if(index == 2){
					
						$('.section2').find('.htmleaf-content').fadeIn(800);
						$('#progressbar1').LineProgressbar({
							percentage: 90,
							 height: '20px',
						 	 radius: '50px'
						});
						$('#progressbar2').LineProgressbar({
							percentage: 85,
							fillBackgroundColor: '#1abc9c',
							 height: '20px',
						  radius: '50px'
						});
						$('#progressbar3').LineProgressbar({
						  percentage: 80,
						  fillBackgroundColor: '#e67e22',
						  height: '20px',
						  radius: '50px'
						});
						$('#progressbar4').LineProgressbar({
						  percentage: 75,
						  fillBackgroundColor: '#f1c40f',
						   height: '20px',
						  radius: '50px'
						});
						$('#progressbar5').LineProgressbar({
							percentage: 50,
							 height: '20px',
						  radius: '50px'
						});
						$('#progressbar6').LineProgressbar({
							percentage: 75,
							fillBackgroundColor: '#1abc9c',
							 height: '20px',
						  radius: '50px'
						});
						$('#progressbar7').LineProgressbar({
						  percentage: 61,
						  fillBackgroundColor: '#e67e22',
						   height: '20px',
						  radius: '50px'
						});
						$('#progressbar8').LineProgressbar({
						  percentage: 75,
						  fillBackgroundColor: '#f1c40f',
						  height: '20px',
						  radius: '50px'
						});
					}
					if(index == 3){
						$('.section3').find('.container-master').fadeIn(1000);
					}
					if(index == 4){
						$('.section4').find('.writing').fadeIn(1000);
						
					    	var classes =  $(this).parent().attr('class');
					        $(this).parent().attr('class', 'animate');
					        var indicator = $(this);
					        setTimeout(function(){ 
					        	$(indicator).parent().addClass(classes);
					        }, 100);
					   
					}
					if(index == 5){
						$('.section5').find('.content').fadeIn(1000);
					}
				},
				onLeave: function(index, direction){
					if(index == '2'){
						$('.section2').find('.htmleaf-content').fadeOut(800);
					}
					if(index == '3'){
						$('.section3').find('.container-master').fadeOut(1000);
					}
					if(index == '4'){
						$('.section4').find('.writing').fadeOut(1000);
					}
					if(index == '5'){
						$('.section5').find('.content').fadeOut(800);
					}
				}
			});
			$(".navbar-nav").on('activate.bs.scrollspy',function(){
				if($(".navbar-nav li").eq(0).hasClass("active")){
					$("#navbar").css("background","none")
				}
				else{
					$("#navbar").css("background","rgba(0,0,0,.4)")
				}
				
				
			});
			
		//fullpage结束
		
		//按钮变幻
			var i=1;
			$("#btn").click(function(){
				i++;
				if(i%2==0){
					$(this).children("i").eq(1).animate({opacity:"0"},500);
					$(this).children("i").eq(0).animate({},function(){
						$(this).css({'transform':'rotate(41.5deg)',"margin-left":"5px","transform-origin":"0% 0%","transition":"0.5s"})
					});
					$(this).children("i").eq(2).animate({},function(){
						$(this).css({'transform':'rotate(-41.5deg)',"margin-left":"5px","transform-origin":"0% 0%","transition":"0.5s"})
					});
				}else{
					$(this).children("i").eq(1).animate({opacity:"1"},500);
					$(this).children("i").eq(0).animate({},function(){
						$(this).css({'transform':'rotate(0deg)',"margin-left":"0px","transform-origin":"0% 0%","transition":"0.5s"})
					});
					$(this).children("i").eq(2).animate({},function(){
						$(this).css({'transform':'rotate(0deg)',"margin-left":"0px","transform-origin":"0% 0%","transition":"0.5s"})
					});
				}
				
			});
			
//			我的作品
			$(".floaty").mousemove(function(event) {
			    var mouseX = event.pageX;
			    var mouseY = event.pageY;
			    var horzAngle = 0;
			    var vertAngle = 0;
			    var obj = $(this);
			    //Maximum angle 30!
			    var objX = obj.offset().left + obj.innerWidth() / 2;
			    var objY = obj.offset().top + obj.innerHeight() / 2;
			    
			    horzAngle = -((objX - mouseX) / (obj.innerWidth()/2)) * 10;
			    vertAngle = ((objY - mouseY) / (obj.innerHeight()/2)) * 10;
			    
			    obj.attr("style", "transform: rotateY("+horzAngle+"deg) rotateX("+vertAngle+"deg) translateZ(50px);-webkit-transform: rotateY("+horzAngle+"deg) rotateX("+vertAngle+"deg) translateZ(50px);-moz-transform: rotateY("+horzAngle+"deg) rotateX("+vertAngle+"deg) translateZ(50px)");
			  });
			  $(".floaty").mouseout(function() {
			    var obj = $(this);
			    obj.css({
			      '-webkit-transform' : 'rotateY(' + 0 + 'deg)',
			      '-moz-transform'    : 'rotateY(' + 0 + 'deg)',
			      '-ms-transform'     : 'rotateY(' + 0 + 'deg)',
			      '-o-transform'      : 'rotateY(' + 0 + 'deg)',
			      'transform'         : 'rotateY(' + 0 + 'deg)'
			    });
			  });
			});
			
			//endhoveringeffect by @Bloxore
			
			$('.back').click(function(){
			
			  $('.container-master').toggleClass('toggled');
			});
			
			$('.tile').click(function(){
			  $('html,body').animate({scrollTop:0},0);
			
			    $('.container-master').toggleClass('toggled');
			  
			  $('.lyrics-wrapper').empty();
			  //get title
			  $('.lyrics-title').html($(this).find('.title').html());
			  
			  //get lyrics
			  $list = $(this).find('ul li');
			  $list.each(function(i, li){
			    console.log(i,li);
			    var lyricsText = '<div class="lyrics-card">'+$(li).html()+'</div>';
			    $('.lyrics-wrapper').append(lyricsText);
			    
			setTimeout(function(){ 
			 var lis = $('.lyrics-card');
			    for (var i = 0; i < lis.length; i++) {
			$(lis[i]).delay(i*500).animate({'top': '0','opacity':1}, 1000);
			    }
			}, 800);
			   
			  });

	});
	
//	百分比
	
	//百分比的背景
	$(document).ready(function() {
	  $('#particles').particleground({
	    dotColor: '#ccc',
	    lineColor: '#007163'
	  });
	 
	});
		
	
	
	
		