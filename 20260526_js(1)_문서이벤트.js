    window.addEventListener(`DOMContentLoaded`, () => {
        let section = document.querySelector(`section`);
        let img = document.querySelector(`img`);
        console.log(section);
        // let imgsrc = img.getAttribute(`src`);
        let imgsrc = img.src;
        // img.src로도 src를 가져올 수 있다.
        console.log(imgsrc);
        console.log(`DOM 구축 완료`)
    });

    window.onload =  () => {
        console.log(`문서 로드 완료`);
    }
    // 멀티미디어 요소를 사용하는데에는 onload 이벤트를 사용하는 것이 유의미.