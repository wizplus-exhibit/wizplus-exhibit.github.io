(function(){
var d=window.WORK||{};var app=document.getElementById('app');
function esc(s){return String(s||'').replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
document.title=(d.title||'작품 안내');
// 설명 영상 자리: 페이지 폴더에 video.mp4 를 넣으면 맨 위에 뜬다. 파일이 없으면 자리째 사라진다(data.js 수정 불필요).
function vid(before){if(d.video===false)return;var v=document.createElement('video');v.className='vid';v.style.display='none';
 v.controls=true;v.playsInline=true;v.setAttribute('playsinline','');v.setAttribute('webkit-playsinline','');v.preload='metadata';
 v.setAttribute('controlsList','nodownload noplaybackrate');v.disablePictureInPicture=true;
 v.addEventListener('loadedmetadata',function(){v.style.display=''});v.addEventListener('error',function(){v.remove()});
 v.src=(d.video||'video.mp4')+'#t=0.1';app.insertBefore(v,before||app.firstChild);}
if(d.only){document.documentElement.className='only';document.body.className='only';var o='';(d.images||[]).forEach(function(im){o+='<div class="img" style="aspect-ratio:'+(im.ratio||'4/3')+';background-image:url(\''+esc(im.file)+'\')"></div>'});app.innerHTML=o;vid();document.addEventListener('contextmenu',function(e){e.preventDefault()});document.addEventListener('dragstart',function(e){e.preventDefault()});return;}
var h='<div class="no">'+esc(d.code)+'</div><h1>'+esc(d.title)+'</h1><div class="artist">'+esc(d.artist)+'</div>';
(d.images||[]).forEach(function(im,i){h+='<div class="img" data-src="'+esc(im.file)+'" style="aspect-ratio:'+(im.ratio||'4/3')+';background-image:url(\''+esc(im.file)+'\')"></div>';
 if(im.caption)h+='<div class="cap">'+esc(im.caption)+'</div>';});
if(d.intro)h+='<h2>작품 소개</h2><p>'+esc(d.intro)+'</p>';
if((d.history||[]).length){h+='<h2>연혁</h2><ul class="hist">';d.history.forEach(function(r){h+='<li><b>'+esc(r[0])+'</b> '+esc(r[1])+'</li>'});h+='</ul>';}
h+='<footer>'+esc(d.footer||'')+'</footer>';app.innerHTML=h;vid(app.querySelector('.img'));
document.addEventListener('contextmenu',function(e){e.preventDefault()});
document.addEventListener('dragstart',function(e){e.preventDefault()});
})();
