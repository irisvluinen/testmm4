//dropdown
$("#Destinations").selectmenu();
$("#tours").selectmenu();

//datepicker
$(function () {
  $("#datepicker").datepicker();
});

//timepicker
$("input.timepicker").timepicker({
  timeFormat: "h:mm p",
  interval: 30,
  minTime: "10",
  maxTime: "6:00pm",
  startTime: "10:00",
  dynamic: false,
  dropdown: true,
  scrollbar: true,
});

//pop-up
function togglePopup() {
  $(".popup").toggle();
}

// videoplayer

let player = document.getElementById("stadvideo");
let forwardTime;
let savestad = 0;
let video = new Array();
video[0] = "video/maastricht.mp4";
video[1] = "video/aken.mp4";
video[2] = "video/schimmert.mp4";
video[3] = "video/newyork.mp4";

player.ontimeupdate = function () {
  forwardTime = player.currentTime + 10;
};

$(".fastforward").click(function () {
  player.play();
  player.currentTime = forwardTime;
});

$(".videostad").on("click", function () {
  let knopstad = $(this).attr("id");
  if (knopstad == savestad) {
    if (player.paused) {
      player.play();
      $(this).find("i").removeClass("bx bx-pause");
      $(this).find("i").addClass("bx bx-play");
    } else {
      player.pause();
      $(this).find("i").removeClass("bx bx-play");
      $(this).find("i").addClass("bx bx-pause");
    }
  } else {
    player.setAttribute("src", video[knopstad]);
    player.load();
  }

  savestad = knopstad;
});

//stad naam veranderen
let stad = $("#destinations").val();
$("#destinations").selectmenu({
  change: function () {
    stad = $("#destinations").val();
    $(".stad").html(stad);
  },
});
