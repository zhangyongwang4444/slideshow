var allButtons = $('#button > span')



for(let i = 0; i < allButtons.length; i++){
  $(allButtons[i]).on('click',function(x){
     var index = $(x.currentTarget).index()
     var p = index * -275
     $('#images').css({
       transform:'translateX(' + p + 'px)'
     })
     n =index
     activeButton(allButtons.eq(n))
  })
}

var n =0
var size = allButtons.length
playSlide(n%size)

var timerId = setTimer()            //设置一个定时器

$('.window').on('mouseenter',function(){
    window.clearInterval(timerId)
})

$('.window').on('mouseleave',function(){
    timerId = setTimer() 
})


/*定闹钟*/
function setTimer(){
  return setInterval(()=>{
  n += 1
  playSlide(n%size)
},2000)
}

/*激活button*/
function activeButton($button){
  $button
  .addClass('red')
  .siblings('.red').removeClass('red')
}

/*播放轮播图*/
function playSlide(index){
   allButtons.eq(index).trigger('click')
}