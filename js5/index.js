const questions=document.querySelectorAll('#faq .faq-question');
const ansvers=document.querySelectorAll('#faq .faq-ansver');
const pluses=document.querySelectorAll('#faq .faq-question span')
questions.forEach((question)=>{
    question.addEventListener('click',()=>{
const ansverCurrent=question.nextElementSibling;
const plus=question.lastChild;
const isOpen=ansverCurrent.classList.contains('open')
ansvers.forEach((ansver)=>{
    ansver.classList.remove('open')
    ansver.style.maxHeight=0 +'px'
});
pluses.forEach((pl)=>{
pl.textContent='+';
})
if(isOpen===false){
    plus.textContent='-'
ansverCurrent.classList.add('open')
ansverCurrent.style.maxHeight=ansverCurrent.scrollHeight+'px'
}
    })
})