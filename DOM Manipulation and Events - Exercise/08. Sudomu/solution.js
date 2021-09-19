function solve() {
    const boxes = [];
    const [checkBtn, clearBtn] = document.getElementsByTagName('button');
    const inputElements = Array.from(document.querySelectorAll('input'));
    const result = document.getElementById('check').children[0];

    checkBtn.addEventListener('click', check);
    clearBtn.addEventListener('click', clear);

    function check() {
        let correctSolution = true;
        for (i = 0; i < inputElements.length; i += 3) {
            boxes.push(inputElements.slice(i, i + 3));
        }

        for (i = 0; i < 3; i++) {
            let row = new Set([boxes[i][0].value, boxes[i][1].value, boxes[i][2].value]);
            let col = new Set([boxes[0][i].value, boxes[1][i].value, boxes[2][i].value]);
            if (Array.from(row).filter(el => el != "").length < 3 || Array.from(col).filter(el => el != "").length < 3) {
                correctSolution = false;
                break;
            }
        }

        if (correctSolution) {
            document.getElementsByTagName('table')[0].style.border = '2px solid green';
            result.textContent = 'You solve it! Congratulations!';
            result.style.color = 'green';
        } else {
            document.getElementsByTagName('table')[0].style.border = '2px solid red';
            result.textContent = 'NOP! You are not done yet...';
            result.style.color = 'red';
        }
    }

    function clear() {
        inputElements.forEach(el => el.value = '');
        result.textContent = '';
        document.getElementsByTagName('table')[0].style.border = '';
    }

}