const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result_class = document.querySelector('.result.py-4.d-none.bg-light.text-center');
const result_span = document.querySelector('.text-primary.display-4.p-3');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach(function (answer, index){
        if (answer == correctAnswers[index]) {
            score++;
        }
    });

    score = score / correctAnswers.length * 100;

    window.scrollTo(0, 0);
    result_class.classList.remove('d-none');

    let anim_score = 0;
    const timer = setInterval(() => {
        result_span.innerText = `${anim_score}%`;
        ++anim_score;
        if (anim_score > score) {
            window.clearInterval(timer);
        }
    }, 1);
    result_span.innerText = `${score}%`;
});

// window.console.log('hello');
// console.log(window.document.querySelector('form'));
// window.alert('hello')

setTimeout(() => {
    alert('hello, ninjas');
}, 3000);