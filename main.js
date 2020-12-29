let noti  = document.querySelector('h1');
let select = document.querySelector('.select');
let button = document.getElementsByTagName('button');



for(but of button){

    but.addEventListener('click', (e) => {
        let add = Number(noti.getAttribute('data-count') || 0);
        noti.setAttribute('data-count', add + 1);
        noti.classList.add('zero');


        //copy and paste element
        let parent = e.target.parentNode;
        let clone = parent.cloneNode(true);
        select.appendChild(clone);
        clone.lastElementChild.innerText = "Buy-now";

        if(clone){
            noti.onclick = () => {
                select.classList.toggle('display');
            }
        }

        //image animation add to cart

        let image = e.target.parentNode.querySelector('img');
        let span = e.target.parentNode.querySelector('span');
        let p_image = image.cloneNode(false);

        span.appendChild(p_image);
        span.classList.add('active');

        setTimeout( () => {
            span.removeChild(p_image);
            span.classList.remove('active');
        }, 500)

    })
}

