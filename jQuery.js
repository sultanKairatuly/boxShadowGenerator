
const ghostSlide = document.querySelector('.ghost')
const block = document.getElementsByClassName('block')[0];
const slider = document.querySelectorAll('.slide');
const webkitField = document.querySelector('.webkit_field .attribute'),
      mozField = document.querySelector('.moz_field .attribute'),
      defaultField = document.querySelector('.default_field .attribute')

const webkitNums = document.querySelectorAll('.webkit_field .number'),
      mozNums = document.querySelectorAll('.moz_field .number'),
      defaultNums = document.querySelectorAll('.default_field .number')
      
const rangeBubbles = document.querySelectorAll('.buble')
const labels = document.querySelectorAll('.rangeLabel')
const ghostBubble = document.querySelector('.ghostBuble')


slider.forEach( (item, i) => {
    changeValue(item, i)
    item.addEventListener('input', e => {
       changeValue(item, i)
    })
})
changeValueOfGhost()

function changeValue(item, i){
    const {min, max, value} = item
    const total = Number(max) - Number(min)
    const perc = (Number(value) - Number(min)) / total
  
    rangeBubbles[i].style.left = `${perc * 100}%`
    rangeBubbles[i].style.transform = `translateX(-${perc * 70}%)`
    rangeBubbles[i].textContent = `${value}px`
}

for(let slide of slider){
    slide.addEventListener('input', () => {
        let value = slide.value;
        let color = `linear-gradient(90deg, #6fbebc ${value}%, 	#e6e4e4  ${value}%)`
        slide.style.background = color
        limitSlider(value, slide , color)
    })

    let value2 = slide.value;
    let color2 = `linear-gradient(90deg, #6fbebc ${value2}%, 	#e6e4e4  ${value2}%)`
    slide.style.background = color2
    limitSlider(value2, slide , color2)

    function limitSlider(value, slide, color){
        if(value < 4){
            slide.style.padding = '0 10px'
            slide.style.background = `linear-gradient(90deg, #6fbebc 10px, 	#e6e4e4  1%)`
        }else if(value >= 97 ){
            slide.style.padding = '0 10px'
            slide.style.background = `linear-gradient(90deg, #6fbebc 290px, #e6e4e4  1%)`
        }else{
            slide.style.padding = '0px'
            slide.style.background = color
        }
    }
}

ghostSlide.addEventListener('input', () => {
    let value = ghostSlide.value;
    let color = `linear-gradient(90deg, #6fbebc ${value * 100}%, 	#e6e4e4  ${value * 100}%)`
    ghostSlide.style.background = color
    limitSliderGhost(value, ghostSlide, color)
    changeValueOfGhost()
})

let ghsotValue = ghostSlide.value;
let ghostColor = `linear-gradient(90deg, #6fbebc ${ghsotValue * 105}%, 	#e6e4e4  ${ghsotValue * 100}%)`
ghostSlide.style.background = ghostColor

function changeValueOfGhost(){
    const {min, max, value} = ghostSlide
    const total = Number(max) - Number(min)
    const perc = (Number(value) - Number(min)) / total
  
    ghostBubble.style.left = `${perc * 100}%`
    ghostBubble.style.transform = `translateX(-${perc * 70}%)`
    ghostBubble.textContent = `${value}`
}


function limitSliderGhost(value, ghostSlide, color){
    if(value <= 0.04){
        ghostSlide.style.padding = '0 10px'
        ghostSlide.style.background = `linear-gradient(90deg, #6fbebc 10px, 	#e6e4e4  1%)`
    }else if(value >= 0.97 ){
        ghostSlide.style.padding = '0 10px'
        ghostSlide.style.background = `linear-gradient(90deg, #6fbebc 290px, #e6e4e4  1%)`
    }else{
        ghostSlide.style.padding = '0px'
        ghostSlide.style.background = color
    }
}

const typeItem = document.querySelectorAll('.type-item'),
      typeButton = document.querySelector('.type-btn');
let inset = document.querySelectorAll('.inset')
const readyBoxes = document.querySelectorAll('.ready_box-item')

readyBoxes.forEach(item => {

    let shadow = window.getComputedStyle(item).boxShadow
    item.addEventListener('click', changeBoxToReady)
    function changeBoxToReady(){

        block.style.boxShadow = shadow
        webkitField.innerHTML = '-webkit-box-shadow:'
        mozField.innerHTML = '-moz-box-shadow:'
        defaultField.innerHTML = 'box-shadow:'
        let pixels = []

        pixels.push(shadow.split(' ')[4])
        pixels.push(shadow.split(' ')[5])
        pixels.push(shadow.split(' ')[6])
        pixels.push(shadow.split(' ')[7])

        for(let i = 0; i < 4; i++){
            let webkit = webkitNums[i]

            webkit.innerHTML = pixels[i]
            webkit.innerHTML = pixels[i]
            webkit.innerHTML = pixels[i]
            webkit.innerHTML = pixels[i]
        }

        for(let i = 0; i < 4; i++){
            let moz = mozNums[i]

            moz.innerHTML = pixels[i]
            moz.innerHTML = pixels[i]
            moz.innerHTML = pixels[i]
            moz.innerHTML = pixels[i]
        }

        for(let i = 0; i < 4; i++){
            let defaults = defaultNums[i]

            defaults.innerHTML = pixels[i]
            defaults.innerHTML = pixels[i]
            defaults.innerHTML = pixels[i]
            defaults.innerHTML = pixels[i]
        }

        if(shadow.includes('inset')){
            for(let i = 0; i < inset.length; i++){
                inset[i].innerHTML = 'inset'
            }
        }

        if(!shadow.includes('inset')){
            for(let i = 0; i < inset.length; i++){
                inset[i].innerHTML = ''
            }
        }

        if(inset[0].innerHTML !== ''){
            typeButton.style.left = '15px'
            typeButton.classList.add('inner')
            if(typeButton.classList.contains('outer')){
                typeButton.classList.remove('outer')
            }
        }else{
            typeButton.style.left = '0px'
            typeButton.classList.add('outer')
            if(typeButton.classList.contains('inner')){
                typeButton.classList.remove('inner')
            }
        }
    }
});


typeItem.forEach(item => {
    item.addEventListener('click', changeInset)
})

typeButton.addEventListener('click', changeInset)

function changeInset(){
    let leftOffset = window.getComputedStyle(typeButton).left
    let parent = typeButton.parentElement
    let parentBackground = window.getComputedStyle(parent).backgroundColor
    
    switch(leftOffset){
        case '0px':
            typeButton.style.left = '15px'
            typeButton.classList.add('inner')
            if(typeButton.classList.contains('outer')){
                typeButton.classList.remove('outer')
            }
            break;
        case '15px':
            typeButton.style.left = '0px'
            typeButton.classList.add('outer')
            if(typeButton.classList.contains('inner')){
                typeButton.classList.remove('inner')
            }
            break;
    }

    switch(parentBackground){
        case 'rgba(0, 0, 0, 0)':
            parent.style.background = 'rgb(235,235,235)'
            break;
        default:
            parent.style.background = 'rgba(0, 0, 0, 0)'
            break;
    }

}
        
let sample = [];

const hOffset = document.querySelector('.hOffset'),
      vOffset = document.querySelector('.vOffset'),
      blur = document.querySelector('.blur'),
      stretching = document.querySelector('.stretching');


const hOffsetNumber = document.querySelectorAll('.hOffset_number'),
      vOffsetNumber = document.querySelectorAll('.vOffset_number'),
      blurNumber = document.querySelectorAll('.blur_number'),
      stretchingNumber = document.querySelectorAll('.stretching_number');

      sample[0] = `${hOffset.value}px`;
      sample[1] = `${vOffset.value}px`;
      sample[2] = `${blur.value}px`;
      sample[3] = `${stretching.value}px`;
      sample[4] = 'rgba(34, 60, 80, 0.2)'

      hOffset.addEventListener('input', () => {
        for(let i = 0; i < hOffsetNumber.length; i++){
            hOffsetNumber[i].innerHTML = `${hOffset.value}px`;
            sample[0] = `${hOffset.value}px`;
            block.style.boxShadow = sample.join(' ')
        }


      })

      vOffset.addEventListener('input', () => {
        for(let i = 0; i < hOffsetNumber.length; i++){
            vOffsetNumber[i].innerHTML = `${vOffset.value}px`;
            sample[1] = `${vOffset.value}px`;
            block.style.boxShadow = sample.join(' ')
        }
      })

      blur.addEventListener('input', () => {
        for(let i = 0; i < hOffsetNumber.length; i++){
            blurNumber[i].innerHTML = `${blur.value}px`;
            sample[2] = `${blur.value}px`;
            block.style.boxShadow = sample.join(' ')

        }
      })

      stretching.addEventListener('input', () => {
        for(let i = 0; i < hOffsetNumber.length; i++){
            stretchingNumber[i].innerHTML = `${stretching.value}px`;
            sample[3] = `${stretching.value}px`;
            block.style.boxShadow = sample.join(' ')

        }
      })

typeItem.forEach(item => {
    item.addEventListener('click', () => {
        if(typeButton.classList.contains('inner')){
            for(let i = 0; i < inset.length; i++){
                inset[i].innerHTML = 'inset'
                sample[5] = 'inset'
            }
        }else{
            for(let i = 0; i < inset.length; i++){
                inset[i].innerHTML = ''
                sample.splice(5, 1)
            }
        }
    
        block.style.boxShadow = sample.join(' ')
    })
})
typeButton.addEventListener('click', () => {
    if(typeButton.classList.contains('inner')){
        for(let i = 0; i < inset.length; i++){
            inset[i].innerHTML = 'inset'
            sample[5] = 'inset'
        }
    }else{
        for(let i = 0; i < inset.length; i++){
            inset[i].innerHTML = ''
            sample.splice(5, 1)
        }
    }

    block.style.boxShadow = sample.join(' ')
})

let y = '0.2)'

const shadowColor = document.querySelector('.color')
const rgbaNums = document.querySelectorAll('.rgba_numbers')
shadowColor.addEventListener('input', () => {
    let color = toRGB(shadowColor.value).replace('rgba', '')
    rgbaNums.forEach(item => {
        item.innerHTML = color
    })
    sample[4] = `rgba${color}`
    block.style.boxShadow = sample.join(' ')
})

function toRGB(hex) {      
    return "rgba(" + hex.match(/[^#]./g).map(ff => parseInt(ff, 16)) + ',' + y;
}

ghostSlide.addEventListener('input', () => {
    let color = toRGB(shadowColor.value).replace('rgba', '')
    y = ghostSlide.value + ')'
    sample[4] = `rgba${color}`
    block.style.boxShadow = sample.join(' ')
})


      
const castomizeBackground = document.querySelector('.background'),
      castomizeBox = document.querySelector('.box')


castomizeBackground.addEventListener('input', changeBackground)
castomizeBox.addEventListener('input', changeBox)


function changeBackground(){
    let color = this.value
    const background = document.querySelector('.result')
    background.style.backgroundColor = color
}

function changeBox(){
    let color = this.value
    const box = document.querySelector('.block')
    box.style.backgroundColor = color
}




// slider.forEach(item => {
//     item.addEventListener('input', () => {
//         const {min, max, value} = item
//         const total = Number(max) - Number(min)
//         const perc = (Number(value) - Number(min)) / total

//         for(let i = 0; i < rangeBubbles.length; i++){
//             let rangeBubble = rangeBubbles[i]

//             rangeBubble.style.left = `${perc * 100}%`
//             rangeBubble.textContent = value
//         }
//     })
// })

