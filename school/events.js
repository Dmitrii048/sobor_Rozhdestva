// Массив событий воскресной школы "Ковчег"
const schoolEvents = [
    {
        id: "xmas26",
        date: "25 декабря 2026 года",
        title: "Рождественский праздник",
        text: `
            <p>В праздник Рождества Христова, по завершении богослужения в церковном дворе Христо-Рождественского кафедрального собора г. Липецка состоялся праздничный концерт.</p>
            <p>Мероприятие, организованное воспитанниками воскресной школы «Ковчег», было посвящено Рождеству Христову. В программе прозвучали церковные песнопения, стихи и песни духовного содержания; дети порадовали зрителей яркими танцевальными композициями.</p>
            <p>В мероприятии приняли участие воспитанники Центра образования, реабилитации и оздоровления. Вторая часть концерта была посвящена учебе: дети разгадывали загадки и пытались понять, что преподаватели спрятали в черном ящике.</p>
            <p>Праздник завершился чайной трапезой с пирогами, которые заботливо приготовили мамы и бабушки воспитанников.</p>
        `,
        cover: "../images/event-xmas26-1.jpg",
        gallery: [
            { src: "../images/event-xmas26-1.jpg", caption: "Рождественский праздник в соборе" },
            { src: "../images/event-xmas26-2.jpg", caption: "Дети исполняют рождественские песнопения" },
            { src: "../images/event-xmas26-3.jpg", caption: "Театральная инсценировка Рождества" },
            { src: "../images/event-xmas26-4.jpg", caption: "Праздничный концерт воспитанников школы" },
            { src: "../images/event-xmas26-5.jpg", caption: "Рождественская ярмарка" },
            { src: "../images/event-xmas26-6.jpg", caption: "Праздничная трапеза после концерта" },
            { src: "../images/event-xmas26-7.jpg", caption: "Поздравление детей настоятелем собора" }
        ]
    },
    {
        id: "sept25",
        date: "21 сентября 2025 года",
        title: "Начало нового учебного года",
        text: `
            <p>В праздник Рождества Пресвятой Богородицы, по завершении богослужения в церковном дворе Христо-Рождественского кафедрального собора г. Липецка состоялся праздничный концерт.</p>
            <p>Мероприятие, организованное воспитанниками воскресной школы «Ковчег», было посвящено первому двунадесятому празднику и началу нового учебного года. В программе прозвучали церковные песнопения, стихи и песни духовного содержания; дети порадовали зрителей яркими танцевальными композициями.</p>
            <p>В мероприятии приняла участие воспитанница Центра образования, реабилитации и оздоровления Авраскина Кира, которая исполнила песни о Богородице. Вторая часть концерта была посвящена учебе: дети разгадывали загадки и пытались понять, что преподаватели спрятали в черном ящике.</p>
            <p>Праздник завершился чайной трапезой с пирогами, которые заботливо приготовили мамы и бабушки воспитанников.</p>
        `,
        cover: "../images/event-sept25-1.jpg",
        gallery: [
            { src: "../images/event-sept25-1.jpg", caption: "Концерт в честь Рождества Пресвятой Богородицы" },
            { src: "../images/event-sept25-2.jpg", caption: "Дети исполняют танцевальные композиции" },
            { src: "../images/event-sept25-3.jpg", caption: "Чайная трапеза после концерта" }
        ]
    },
    {
        id: "grad25",
        date: "11 мая 2025 года",
        title: "В воскресной школе чествовали выпускников",
        text: `
            <p>В воскресной школе «Ковчег» кафедрального собора Рождества Христова г. Липецка чествовали выпускников.</p>
            <p>Директор школы Ирина Викторовна, преподаватели и родители выпускников вспоминали годы обучения, которые, без сомнения, будут крепким фундаментом в жизни ребят.</p>
            <p>Выпускникам были сказаны теплые напутственные слова и вручены памятные подарки. В этот день был отмечен высокий уровень подготовки учеников, глубокие знания основ православной веры и традиций.</p>
            <p>Настоятель собора протоиерей Василий Бильчук отметил, что воспитанники школы стали примером для младших учеников и достойными членами церковного прихода.</p>
        `,
        cover: "../images/event-grad25-1.jpg",
        gallery: [
            { src: "../images/event-grad25-1.jpg", caption: "Торжественная церемония чествования выпускников" },
            { src: "../images/event-grad25-2.jpg", caption: "Памятные подарки выпускникам" },
            { src: "../images/event-grad25-3.jpg", caption: "Выпускники со своими педагогами" },
            { src: "../images/event-grad25-4.jpg", caption: "Праздничное чаепитие после церемонии" },
            { src: "../images/event-grad25-5.jpg", caption: "Фотография на память со всеми выпускниками" }
        ]
    },
    {
        id: "easter25",
        date: "20 апреля 2025 года",
        title: "Пасхальный утренник",
        text: `
            <p>В праздник Светлого Христова Воскресения, на приходе кафедрального собора состоялся пасхальный утренник воспитанников воскресной школы «Ковчег».</p>
            <p>В концерте прозвучали стихи и песни духовного содержания, прославляющие Воскресение Христово; дети младшей возрастной группы представили вниманию прихожан театральную инсценировку.</p>
            <p>В завершение праздника детей и преподавателей поздравили настоятель кафедрального собора протоиерей Василий Бильчук и ключарь собора, духовник воскресной школы протоиерей Владимир Максимчук. На радостный возглас священников «Христос Воскресе!» под сводами собора прозвучал дружный хор детских голосов: «Воистину Воскресе!».</p>
            <p>В этот памятный день воспитанники встретили пасхальными приветствиями Высокопреосвященнейшего Арсения, митрополита Липецкого и Задонского. Владыка вручил детям пасхальные подарки.</p>
        `,
        cover: "../images/event-easter25-1.jpg",
        gallery: [
            { src: "../images/event-easter25-1.jpg", caption: "Пасхальный утренник воспитанников" },
            { src: "../images/event-easter25-2.jpg", caption: "Театральная инсценировка младшей группы" },
            { src: "../images/event-easter25-3.jpg", caption: "Дети дарят цветы священникам" },
            { src: "../images/event-easter25-4.jpg", caption: "Пасхальная ярмарка на территории собора" },
            { src: "../images/event-easter25-5.jpg", caption: "Владыка Арсений благословляет детей" },
            { src: "../images/event-easter25-6.jpg", caption: "Детский хор исполняет пасхальные песни" },
            { src: "../images/event-easter25-7.jpg", caption: "Праздничная трапеза после богослужения" },
            { src: "../images/event-easter25-8.jpg", caption: "Фотография на память со всеми участниками" }
        ]
    },
    {
        id: "maslenitsa25",
        date: "2 марта 2025 года",
        title: "Масленичная ярмарка",
        text: `
            <p>В Прощеное воскресенье, воспитанники воскресной школы «Ковчег» организовали и провели традиционную масленичную ярмарку. В организации праздничного мероприятия дети проявили особое усердие и любовь к общему делу.</p>
            <p>Под руководством преподавателей и родителей они приготовили разнообразную выпечку и ароматный чай. По завершении Литургии прихожане с удовольствием отведали блины и блинчики, которые пеклись во дворе храма, пирожки, пирожные, оладьи и пончики.</p>
            <p>Посетители ярмарки могли отведать и постную продукцию на предстоящий пост: винегрет, коврижки, хлеб, постные кексы, блины, разнообразную консервированную продукцию. В большом ассортименте были представлены детские поделки.</p>
            <p>«Масленичная ярмарка стала традиционным мероприятием, к которому дети и родители воскресной школы готовятся с нескрываемой радостью, - рассказывает директор школы Ирина Викторовна Заярина. – Это время, когда мы чувствуем себя единой, дружной семьей; ведь наше усердие приносит радость прихожанам храма».</p>
        `,
        cover: "../images/event-maslenitsa25-1.jpg",
        gallery: [
            { src: "../images/event-maslenitsa25-1.jpg", caption: "Масленичная ярмарка на территории собора" },
            { src: "../images/event-maslenitsa25-2.jpg", caption: "Дети готовят выпечку для ярмарки" },
            { src: "../images/event-maslenitsa25-3.jpg", caption: "Постная продукция на масленичной ярмарке" },
            { src: "../images/event-maslenitsa25-4.jpg", caption: "Детские поделки на ярмарке" },
            { src: "../images/event-maslenitsa25-5.jpg", caption: "Катание на санях с горки" },
            { src: "../images/event-maslenitsa25-6.jpg", caption: "Праздничные игры для детей" },
            { src: "../images/event-maslenitsa25-7.jpg", caption: "Сжигание чучела Масленицы" },
            { src: "../images/event-maslenitsa25-8.jpg", caption: "Праздничная трапеза после ярмарки" },
            { src: "../images/event-maslenitsa25-9.jpg", caption: "Дети в народных костюмах" },
            { src: "../images/event-maslenitsa25-10.jpg", caption: "Фотография на память со всеми участниками" }
        ]
    },
    {
        id: "occnt25",
        date: "8 января 2025 года",
        title: "Рождественский концерт в ОЦКНТ",
        text: `
            <p>Состоялся Рождественский концерт в ОЦКНТ. Вокальный ансамбль Воскресной школы "Ковчег" при Христо-Рождественском соборе участвовали в концерте в составе Архиерейского хора Собора.</p>
            <p>Исполняли музыкальную композицию "Рождественская песня" слова и музыка И. Цеслюкевич. Концертмейстер - Галина Решетникова.</p>
            <p>Духовная музыка как часть музыкальной культуры обладает огромным воспитательным потенциалом. Она помогает детям глубже понять смысл православных праздников и приобщиться к традициям Церкви.</p>
            <p>Выступление воспитанников воскресной школы было тепло встречено зрителями. Директор школы Ирина Викторовна Заярина отметила, что участие в таких мероприятиях способствует духовному и творческому развитию детей.</p>
        `,
        cover: "../images/event-occnt25-1.jpg",
        gallery: [
            { src: "../images/event-occnt25-1.jpg", caption: "Рождественский концерт в ОЦКНТ" },
            { src: "../images/event-occnt25-2.jpg", caption: "Вокальный ансамбль воскресной школы" }
        ]
    }
];

// Функция для отображения событий на главной странице школы
function renderEvents() {
    const eventsContainer = document.getElementById('events-container');
    if (!eventsContainer) return;
    
    let html = '';
    schoolEvents.forEach(event => {
        html += `
            <article class="event-card" id="event-${event.id}">
                <div class="event-header">
                    <span class="event-date">${event.date}</span>
                </div>
                <h3 class="event-title">${event.title}</h3>
                <div class="event-image">
                    <a href="news/${event.id}/">
                        <img src="${event.cover}" alt="${event.title}">
                    </a>
                </div>
                <div class="event-content">${event.text.substring(0, 200)}...</div>
                <div class="event-footer">
                    <a href="news/${event.id}/" class="btn-read-more">Читать далее →</a>
                </div>
            </article>
        `;
    });
    
    eventsContainer.innerHTML = html;
}

// Функция для отображения полной новости на отдельной странице
function renderFullNews() {
    // Получаем ID новости из URL
    const pathParts = window.location.pathname.split('/');
    const newsId = pathParts[pathParts.length - 2]; // Получаем ID из URL
    
    if (!newsId) {
        document.getElementById('news-content').innerHTML = `
            <div class="news-error">
                <h2>Ошибка</h2>
                <p>Новость не найдена. Проверьте правильность ссылки или вернитесь на <a href="../index.html">главную страницу</a>.</p>
            </div>
        `;
        return;
    }
    
    // Находим новость по ID
    const news = schoolEvents.find(event => event.id === newsId);
    
    if (!news) {
        document.getElementById('news-content').innerHTML = `
            <div class="news-error">
                <h2>Ошибка</h2>
                <p>Новость не найдена. Проверьте правильность ссылки или вернитесь на <a href="../index.html">главную страницу</a>.</p>
            </div>
        `;
        return;
    }
    
    // Формируем HTML для полной новости
    let galleryHTML = '';
    
    if (news.gallery && news.gallery.length > 0) {
        galleryHTML = `
            <div class="news-gallery">
                <h3 class="gallery-title">Фотогалерея</h3>
                <div class="gallery-grid">
                    ${news.gallery.map((img, index) => `
                        <a href="${img.src}" data-fancybox="gallery" data-caption="${img.caption}">
                            <img src="${img.src}" alt="${img.caption}">
                        </a>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    const newsHTML = `
        <div class="news-header">
            <span class="news-date">${news.date}</span>
            <h1 class="news-title">${news.title}</h1>
        </div>
        <div class="news-cover">
            <img src="${news.cover}" alt="${news.title}">
        </div>
        <div class="news-body">
            ${news.text}
        </div>
        ${galleryHTML}
        <div class="news-footer">
            <a href="../index.html" class="btn-back">← Вернуться к списку новостей</a>
        </div>
    `;
    
    document.getElementById('news-content').innerHTML = newsHTML;
}

// Функция для инициализации Fancybox
function initFancybox() {
    // Проверяем, загружена ли библиотека Fancybox
    if (typeof Fancybox === 'undefined') {
        // Если Fancybox не загружена, загружаем ее
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4/dist/fancybox.css';
        document.head.appendChild(link);
        
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4/dist/fancybox.umd.js';
        script.onload = function() {
            // Инициализируем Fancybox после загрузки
            Fancybox.bind('[data-fancybox]', {
                Toolbar: {
                    display: {
                        left: ['infobar'],
                        right: ['zoom', 'slideShow', 'fullScreen', 'thumbs', 'close']
                    }
                },
                Carousel: {
                    infinite: true
                }
            });
        };
        document.body.appendChild(script);
    } else {
        // Если Fancybox уже загружена, инициализируем
        Fancybox.bind('[data-fancybox]', {
            Toolbar: {
                display: {
                    left: ['infobar'],
                    right: ['zoom', 'slideShow', 'fullScreen', 'thumbs', 'close']
                }
            },
            Carousel: {
                infinite: true
            }
        });
    }
}

// Определяем, на какой странице мы находимся
function isNewsPage() {
    const path = window.location.pathname;
    return path.includes('/news/') && path.endsWith('/');
}

// Запускаем соответствующую функцию в зависимости от страницы
document.addEventListener('DOMContentLoaded', () => {
    if (isNewsPage()) {
        renderFullNews();
        initFancybox();
    } else {
        renderEvents();
    }
    
    // Инициализация прелоадера
    setTimeout(() => {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.classList.add('done');
        }
    }, 500);
});
