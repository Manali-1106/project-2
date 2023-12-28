const panels = document.querySelectorAll('.panels')

panels.forEach(panels => {
    panels.addEventListener('cilick',() => {
        removeActiveclasses()
        panels.classList.add('active')
    })
    
})
    
function removeActiveclasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}