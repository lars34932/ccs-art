document.addEventListener('DOMContentLoaded', function () {
    const leftIris = document.querySelector('#linker-oog .iris');
    const rightIris = document.querySelector('#rechter-oog .iris');
    const range = 25;
    const brief = document.querySelector('.brief');

    document.addEventListener('mousemove', (e) => {
        const { clientX: mouseX, clientY: mouseY } = e;

        moveIris(leftIris, mouseX, mouseY, range);
        moveIris(rightIris, mouseX, mouseY, range);

        brief.style.left = mouseX-734 + 'px';
        brief.style.top = mouseY-255 + 'px';
        console.log(mouseX)
        console.log(mouseY)
    });

    function moveIris(iris, mouseX, mouseY, range) {
        const eyeRect = iris.parentElement.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);
        const distance = Math.min(range, Math.min(eyeRect.width / 4, eyeRect.height / 4));

        const irisX = Math.cos(angle) * distance;
        const irisY = Math.sin(angle) * distance;

        iris.style.transform = `translate(${irisX}px, ${irisY}px)`;
    }
});
