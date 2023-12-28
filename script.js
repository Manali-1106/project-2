const panels = document.querySelectorAll('.panel')

panels.forEach((panels) => {
    panel.addEventListener('click',() => {
        removeActiveclasses()
        panel.classList.add('active')
    })
    
})
    
function removeActiveclasses(){
    panels.forEach((panel) =>{
        panel.classList.remove('active')
    })
}
