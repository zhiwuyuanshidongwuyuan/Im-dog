// JavaScript Document
//document.querySelector('.video-header').addEventListener('ended', function() {
//            this.classList.add('fade-out');
//	this.addEventListener('animationend', function() {
//                this.style.zIndex = -1;
//            });
//        });
document.querySelector('.video-header').addEventListener('ended', function() {
    this.classList.add('fade-out');
    this.addEventListener('animationend', function() {
        this.style.display = 'none';
    });
});
//document.addEventListener('DOMContentLoaded', function() {
//    // Check if the video has been watched
//    if (localStorage.getItem('videoWatched') === 'true') {
//        document.querySelector('.video-header').style.display = 'none';
//    } else {
//        document.querySelector('.video-header').addEventListener('ended', function() {
//            this.classList.add('fade-out');
//            this.addEventListener('animationend', function() {
//                this.style.display = 'none';
//                // Mark the video as watched
//                localStorage.setItem('videoWatched', 'true');
//            });
//        });
//    }
//});


//document.getElementById('changeWidthButton').addEventListener('click', function() {
//    var flourishImage = document.getElementById('flourishImage');
//    flourishImage.style.width = '1000px';
//});
//
//document.getElementById('resetWidthButton').addEventListener('click', function() {
//    var flourishImage = document.getElementById('flourishImage');
//    flourishImage.style.width = '600px';
//});

document.getElementById('changeWidthButton').addEventListener('click', function() {
    var flourishImage = document.getElementById('flourishImage');
    var publicDiv = document.querySelector('.public');
    flourishImage.style.width = '1200px';
    publicDiv.style.height = '660vh';
});

document.getElementById('resetWidthButton').addEventListener('click', function() {
    var flourishImage = document.getElementById('flourishImage');
    var publicDiv = document.querySelector('.public');
    flourishImage.style.width = '600px';
    publicDiv.style.height = '590vh';
});

document.addEventListener("DOMContentLoaded", function() {
      const images = document.querySelectorAll('.ima');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // 图片显示后取消观察
          }
        });
      });

      images.forEach(image => {
        observer.observe(image);
      });
    });

// 等待页面加载完成
window.addEventListener('load', function() {
    // 获取iframe元素
    var iframe = document.querySelector('.flourish-embed iframe');
    if (iframe) {
        // 监听iframe加载完成事件
        iframe.addEventListener('load', function() {
            // 动态调整iframe的高度
            var body = iframe.contentWindow.document.body;
            iframe.style.height = body.scrollHeight + 'px';
        });
    }
});
