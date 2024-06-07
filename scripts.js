const list = document.querySelector ('ul')

const buttonShowAll = document.querySelector('.showAll')
const buttonMapAll = document.querySelector('.mapAll')
const buttonSumAll = document.querySelector('.sumAll')
const buttonFilter = document.querySelector('.filter')

function formatCurrency(value){
    const newValue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    })

    return newValue
}


function showAll(productArray) {
    let myLi = ''

    productArray.forEach((product) => {
        myLi += `
            <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class="itemPrice">R$ ${formatCurrency(product.price)}</p>
            </li>
        `
    })

    list.innerHTML = myLi
}

function mapAll () {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
       
    }))
    
    showAll(newPrices)
}

function sumAll () {
    const totalValue = menuOptions.reduce( (acc, curr) => acc + curr.price , 0)
    
    
    list.innerHTML = `
        <li>
            <p>O valor total dos itens é R$ ${formatCurrency(totalValue)}</p>
        </li>
    `   
}

function filter () {
    const newProducts = menuOptions.filter(product => product.vegan === true)

    showAll(newProducts)
}


buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAll)
buttonSumAll.addEventListener('click', sumAll)
buttonFilter.addEventListener('click', filter)