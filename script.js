// ----- scrollTop: 距離最上方的距離大於零
$(window).scroll(function(e){
  if ($(window).scrollTop()<=0){
    $(".explore",".navbar").addClass("at_top");
    $(".navbar").removeClass("bg-light")
  } else {
    $(".explore",".navbar").removeClass("at_top");
    $(".navbar").addClass("bg-light");
  }
});

// ------ json 檔

let front_end_works = [
  {
    title: '',
    img: '',
    link:''
  }
]

// ----- 使用 Vue.js 來監看
let vm = new Vue ({
  el: "#app",
  data: {
    works: []
  },
  mounted: function(){
    let vobj = this;
    $.ajax({
      url: "https://zzuhann.github.io/works-front-end/works.json",
      success: function(res){
        vobj.works=res;
      }
    })
  }
});

// 滑鼠移動食觸發事件
$(window).mousemove(function(evt){
  let pagex = evt.pageX;
  let pagey = evt.pageY;
  //計算相對區域的位置
  let x = pagex-$("section#section_about").offset().left;
  let y = pagey-$("section#section_about").offset().top;
  $(".tri_line").css("transform","translateX("+(x/-20+50)+"px)")
});