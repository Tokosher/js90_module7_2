// ******************************Lazy Loading****************************** \\

// Тестовий масив для lazy-loading
// const cats = [
//     "https://i.ytimg.com/vi/iKA6ZXpGcGQ/maxresdefault.jpg",
//     "https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg",
//     "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg",
//     "https://i.guim.co.uk/img/media/941093798b256e5d1aa6246a08824bc86f62a31f/0_0_5000_3000/master/5000.jpg?width=1300&quality=85&fit=max&s=ea672fb16df8634901283252059baaf8",
//     "https://nypost.com/wp-content/uploads/sites/2/2022/06/reddit-cats-judging-looks-00.jpg?quality=75&strip=all",
//     "https://gdb.voanews.com/09690000-0a00-0242-5408-08da76ebde16_cx0_cy3_cw99_w1200_r1.jpg",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCK8yYjQ6igjrAJyCyXUwV6U7RDkLVc4FVnQ&usqp=CAU",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU",
//     "https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU",
//     "https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU",
//     "https://assets.globalwildlife.org/m/3b6039a74fd067ea/webimage-Tigrinia.jpg",
//     "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg",
//     "https://www.nhm.ac.uk/content/dam/nhmwww/discover/wild-cats/margay-two-column.jpg.thumb.768.768.jpg",
//     "https://irs.www.warnerbros.com/gallery-v2-jpeg/cats__dogs_photo_12-14571309.jpg",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyGk9Ds3bdd4B404EcoMDrVUKnU5u9KABOg&usqp=CAU",
//   ];

//   const list = document.querySelector('.js-cats');

//   const markup = cats.map(img => {
//     return `<li>
//     <img src="${img}" loading="lazy" width="300" />
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, exercitationem perferendis illum, inventore quos provident dolor tempora odit dolores cum, ducimus perspiciatis. Eum soluta debitis quo a blanditiis non dolorum!</p>
//     </li>`
//   }).join('');

//   list.innerHTML = markup;





// *****************************Throttle & Debounce***************************** \\


const input = document.querySelector('input');

// input.addEventListener('input', 
// _.throttle(
//     handleSearch, 
//     3000,
//     {
//         leading: true, // by default
//         trailing: true // by default
//     }));

// function handleSearch (event) {
//     console.log(event.target.value)
// }

// input.addEventListener('input', 
// _.debounce(
//     handleSearch, 
//     500,
//     {
//         leading: false, // by default
//         trailing: true // by default
//     }));

// function handleSearch (event) {
//     console.log(event.target.value)
// }









// ************************************Практика************************************ \\

// Потрібно створити гру хрестики нулики.
// Відмалюй розмітку ігрового поля для контейнера з класом "content", для кожної клітинки застосуй клас "item"
// Реалізуй делегування подій на ігровому полі для можливості ходу.
// Скріпт має самостійно визначати переможця гри та повідомляти хто переміг
// Для історії ходів наших гравців (Х/О) потрібно щоб кожна клітинка ігрового поля містила дата атрибут id
// Створи скріпт для перевірки виграшної комбінації, список всіх можливих виграшних комбінацій знаходиться в масиві combination.
// Після визначення переможця обов'язково підготуй ігрове поле для наступної гри

const combination = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [1, 5, 9],
    [3, 5, 7],
    [3, 6, 9]
];

const content = document.querySelector('.content');
const winnerArea = document.querySelector('.winner');

content.addEventListener('click', handleClick);

createMarkup()

let currentPlayer = 'X'; // can be 'X' || 'O'
const historyX = [];
const historyO = [];
function createMarkup () {
    let markup = '';

    for (let i = 1; i <= 9; i++) {
        markup += `<div class="item" data-id="${i}"></div>`
    }

    content.innerHTML = markup;
}

function handleClick (event) {
    const targetElement = event.target;
    if (targetElement.textContent || targetElement === event.currentTarget) {
        return;
    }


    const id = +targetElement.dataset.id;
    let isWinner = false;

    if (currentPlayer === 'X') {
        historyX.push(id);
        isWinner = validateWinner(historyX);
    } else {
        historyO.push(id);
        isWinner = validateWinner(historyO);
    }

    if (isWinner) {
        const winnerMarkup = `<h1>Player - ${currentPlayer} is winner!</h1>`;

        winnerArea.innerHTML = winnerMarkup;

        resetGame();
    }

    targetElement.textContent = currentPlayer;
    
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

    // if (currentPlayer === 'X') {
    //     currentPlayer = 'O';
    // } else {
    //     currentPlayer = 'X';
    // }
}

function validateWinner (playerHistory) {
    return combination.some(winningCombination => winningCombination.every(id => playerHistory.includes(id)));
}

function resetGame () {
    currentPlayer = 'X';
    createMarkup();
    historyO.splice(0);
    historyX.splice(0);
}


// console.log(_.every([true, false, true], Boolean));