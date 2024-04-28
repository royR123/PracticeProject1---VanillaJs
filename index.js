

const contents = [
    [
        "React is extremely popular" ,
        "It makes building complex , interactive UIs a breeze",
        "It's powerful & flexible",
        "It has a very active and versatile ecosystem"
    ],
    [
        "Components , JSX & props",
        "States",
        "Hooks (eg. useEffect())",
        "Dynamic rendering"
    ],
    [
        "Official web page (react.dev)",
        "Next.js (Fullstack Framework)",
        "React Native (build native mobile apps with React)"
    ]
]
const whyReactbtn = document.querySelector('#whyreact');
console.log(whyReactbtn.attributes.id.value);
const corebtn = document.querySelector('#core');
console.log(core.attributes.id.value);
const related = document.querySelector('#related');
console.log(related.attributes.id.value);

document.querySelector('#btns').addEventListener('click' , (e) => {
    handleClick(e);
});
window.onload = () =>{
    displayContent(contents[1]);
    corebtn.classList.add('active');
}

function displayContent(items){
    const tabContent = document.querySelector('.content');
    // console.log(items);
    let listContent = "";
    for(const item of items){
        listContent += `<li>${item}</li>`;
    }
    const list = document.createElement('ul');
    tabContent.innerHTML = "";
    list.innerHTML = listContent;
    tabContent.append(list);

}

function handleClick(e){
    console.log(e.target.attributes.id.value);
    if(e.target.attributes.id.value === 'whyreact'){
        displayContent(contents[0]);
        e.target.classList.add('active');
        corebtn.classList.remove('active');
        related.classList.remove('active');
    }else if(e.target.attributes.id.value === 'core'){
        displayContent(contents[1]);
        whyReactbtn.classList.remove('active');
        corebtn.classList.add('active');
        related.classList.remove('active');
    }else{
        displayContent(contents[2]);
        whyReactbtn.classList.remove('active');
        corebtn.classList.remove('active');
        related.classList.add('active');
    }

}