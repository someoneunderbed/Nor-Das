let blockone = document.querySelector('.block-1');

let blocktwo = document.querySelector('.block-2');

let blockthree = document.querySelector('.block-3');

//****************************************************************************************//

let pic1 = document.querySelector('.img-1')

let pic2 = document.querySelector('.img-2')

let pic3 = document.querySelector('.img-3')

let pic4 = document.querySelector('.img-4')

let pic5 = document.querySelector('.img-5')

let pic6 = document.querySelector('.img-6')

//****************************************************************************************//

blockone.addEventListener("click", function () {
        pic2.setAttribute("src", "./images/photo-1.jpg");
        pic1.setAttribute("src", "./images/photo-2.jpg");

        blockone.addEventListener("click", function () {
                pic2.setAttribute("src", "./images/photo-2.jpg");
                pic1.setAttribute("src", "./images/photo-1.jpg")

        })
});

blocktwo.addEventListener("click", function () {
        pic4.setAttribute("src", "./images/photo-3.jpg");
        pic3.setAttribute("src", "./images/photo-4.jpg");

        blocktwo.addEventListener("click", function () {
                pic4.setAttribute("src", "./images/photo-4.jpg");
                pic3.setAttribute("src", "./images/photo-3.jpg")

        })
});

blockthree.addEventListener("click", function () {
        pic6.setAttribute("src", "./images/photo-5.jpg");
        pic5.setAttribute("src", "./images/photo-6.jpg");

        blockthree.addEventListener("click", function () {
                pic6.setAttribute("src", "./images/photo-6.jpg");
                pic5.setAttribute("src", "./images/photo-5.jpg")

        })
});