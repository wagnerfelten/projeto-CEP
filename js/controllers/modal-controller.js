function State(){
    this.container = null;
    this.btnClose = null;

}

const state = new State();

export function init(){
    state.container = document.querySelector("#modal");
    state.btnClose = document.querySelector("#modal-close");

    state.btnClose.addEventListener('click', handleBtnCloseModal);
    state.container.addEventListener('click', clickCloseContainer);
}

export function showModal(){
    state.container.classList.add("active");
}

export function closeModal(){
    state.container.classList.remove("active");
}

function handleBtnCloseModal(event){
    event.preventDefault();
    closeModal();
}

function clickCloseContainer(event){
    event.preventDefault();
    if(event.target === this){
        closeModal();
    }
}