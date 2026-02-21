// --- БАЗА ДАННЫХ СОБЫТИЙ ---
const schoolEvents = [
    {
        id: "xmas26",
        date: "07 января 2026",
        title: "Рождественский праздник",
        text: "<p>В светлый праздник Рождества Христова, по завершении Божественной литургии, церковный двор кафедрального собора озарился радостью детских улыбок. Воспитанники школы «Ковчег» представили праздничную программу, в которой гармонично сплелись духовные песнопения и театральные зарисовки, славящие пришествие в мир Спасителя.</p><p>Особую теплоту празднику придало участие воспитанников Центра образования, реабилитации и оздоровления. Завершилось торжество традиционной чайной трапезой с домашними пирогами, приготовленными с любовью родителями наших учеников.</p>",
        cover: "/sobor_Rozhdestva/images/event-xmas26-1.jpg",
        category: "school",
        gallery: [
            { src: "/sobor_Rozhdestva/images/event-xmas26-1.jpg", caption: "Рождественский вертеп" },
            { src: "/sobor_Rozhdestva/images/event-xmas26-2.jpg", caption: "Выступление хора" },
            { src: "/sobor_Rozhdestva/images/event-xmas26-3.jpg", caption: "Сценка рождества" },
            { src: "/sobor_Rozhdestva/images/event-xmas26-4.jpg", caption: "Праздничный концерт" },
            { src: "/sobor_Rozhdestva/images/event-xmas26-5.jpg", caption: "Гости праздника" },
            { src: "/sobor_Rozhdestva/images/event-xmas26-6.jpg", caption: "Вручение подарков" },
            { src: "/sobor_Rozhdestva/images/event-xmas26-7.jpg", caption: "Общее фото" }
        ]
    },
    {
        id: "grad25",
        date: "11 мая 2025",
        title: "Выпускной акт в воскресной школе",
        text: "<p>В стенах Христорождественского собора состоялось торжественное чествование выпускников воскресной школы «Ковчег». Этот день стал итогом многолетнего пути духовного возрастания юных христиан.</p><p>Директор школы Ирина Викторовна Заярина и духовник протоиерей Владимир Максимчук обратились к выпускникам с напутственным словом, напомнив, что окончание школы — это лишь начало осознанной жизни в Церкви. Каждому выпускнику были вручены памятные подарки, которые будут напоминать им о годах, проведенных под покровом храма.</p>",
        cover: "/sobor_Rozhdestva/images/event-grad25-1.jpg",
        category: "school",
        gallery: [
            { src: "/sobor_Rozhdestva/images/event-grad25-1.jpg", caption: "Торжественная часть" },
            { src: "/sobor_Rozhdestva/images/event-grad25-2.jpg", caption: "Вручение свидетельств" },
            { src: "/sobor_Rozhdestva/images/event-grad25-3.jpg", caption: "Напутственное слово" },
            { src: "/sobor_Rozhdestva/images/event-grad25-4.jpg", caption: "Поздравление родителей" },
            { src: "/sobor_Rozhdestva/images/event-grad25-5.jpg", caption: "Фото на память" }
        ]
    },
    {
        id: "easter25",
        date: "20 апреля 2025",
        title: "Пасхальный утренник",
        text: "<p>В день Светлого Христова Воскресения приход собора наполнился пасхальной радостью. Воспитанники школы подготовили концерт, прославляющий Победителя смерти — Христа Жизнодавца.</p><p>Младшая группа трогательно исполнила театральную инсценировку, а старшие воспитанники порадовали прихожан духовными кантами. Особой честью для детей стала встреча с Высокопреосвященнейшим Арсением, митрополитом Липецким и Задонским, который преподал всем архипастырское благословение и вручил пасхальные дары.</p>",
        cover: "/sobor_Rozhdestva/images/event-easter25-1.jpg",
        category: "school",
        gallery: [
            { src: "/sobor_Rozhdestva/images/event-easter25-1.jpg", caption: "Христос Воскресе!" },
            { src: "/sobor_Rozhdestva/images/event-easter25-2.jpg", caption: "Пасхальная сценка" },
            { src: "/sobor_Rozhdestva/images/event-easter25-3.jpg", caption: "Детский хор" },
            { src: "/sobor_Rozhdestva/images/event-easter25-4.jpg", caption: "Зрители концерта" },
            { src: "/sobor_Rozhdestva/images/event-easter25-5.jpg", caption: "Встреча Владыки" },
            { src: "/sobor_Rozhdestva/images/event-easter25-6.jpg", caption: "Благословение детей" },
            { src: "/sobor_Rozhdestva/images/event-easter25-7.jpg", caption: "Вручение подарков" },
            { src: "/sobor_Rozhdestva/images/event-easter25-8.jpg", caption: "Пасхальная радость" }
        ]
    },
    {
        id: "maslenitsa25",
        date: "02 марта 2025",
        title: "Широкая Масленица и благотворительная ярмарка",
        text: "<p>В Прощеное воскресенье, предваряющее начало Великого поста, воспитанники школы организовали традиционную благотворительную ярмарку. С особым усердием и любовью дети, совместно с родителями и педагогами, подготовили угощения для прихожан.</p><p>Горячий чай из самовара, румяные блины, испеченные прямо на соборной площади, и домашняя выпечка создали атмосферу единения и семейного тепла. Все собранные средства были направлены на нужды воскресной школы и социальное служение.</p>",
        cover: "/sobor_Rozhdestva/images/event-maslenitsa25-1.jpg",
        category: "school",
        gallery: [
            { src: "/sobor_Rozhdestva/images/event-maslenitsa25-1.jpg", caption: "Начало ярмарки" },
            { src: "/sobor_Rozhdestva/images/event-maslenitsa25-2.jpg", caption: "Угощение блинами" },
            { src: "/sobor_Rozhdestva/images/event-maslenitsa25-3.jpg", caption: "Детское творчество" },
            { src: "/sobor_Rozhdestva/images/event-maslenitsa25-4.jpg", caption: "Игры на свежем воздухе" },
            { src: "/sobor_Rozhdestva/images/event-maslenitsa25-5.jpg", caption: "Общее веселье" },
            { src: "/sobor_Rozhdestva/images/event-maslenitsa25-6.jpg", caption: "Гости праздника" },
            { src: "/sobor_Rozhdestva/images/event-maslenitsa25-7.jpg", caption: "Волонтеры школы" },
            { src: "/sobor_Rozhdestva/images/event-maslenitsa25-8.jpg", caption: "Традиционные забавы" },
            { src: "/sobor_Rozhdestva/images/event-maslenitsa25-9.jpg", caption: "Подготовка к посту" },
            { src: "/sobor_Rozhdestva/images/event-maslenitsa25-10.jpg", caption: "Завершение праздника" }
        ]
    },
    {
        id: "occnt25",
        date: "08 января 2025",
        title: "Рождественский концерт в ОЦКНТ",
        text: "<p>Вокальный ансамбль воскресной школы «Ковчег» принял участие в большом епархиальном концерте в Областном центре культуры. Выступая в составе Архиерейского хора собора, наши воспитанники исполнили трогательную «Рождественскую песню» (муз. И. Цеслюкевич).</p><p>Участие в подобных мероприятиях не только развивает музыкальные таланты детей, но и приобщает их к высокой духовной культуре, позволяя нести благую весть о Родившемся Христе широкой аудитории.</p>",
        cover: "/sobor_Rozhdestva/images/event-occnt25-1.jpg",
        category: "school",
        gallery: [
            { src: "/sobor_Rozhdestva/images/event-occnt25-1.jpg", caption: "Выступление на сцене ОЦКНТ" },
            { src: "/sobor_Rozhdestva/images/event-occnt25-2.jpg", caption: "Архиерейский хор и дети" }
        ]
    }
];

// --- ЛОГИКА ОТРИСОВКИ ---

function renderNews(containerId, limit = null) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = '';
    // Если лимит задан (для главной), берем часть, иначе (для новостей) все
    const eventsToRender = limit ? schoolEvents.slice(0, limit) : schoolEvents;

    eventsToRender.forEach(event => {
        html += `
            <article class="event-card">
                <div class="event-date">${event.date}</div>
                <h3 class="event-title">${event.title}</h3>
                
                <div class="event-image">
                    <a href="/sobor_Rozhdestva/school/news/${event.id}/index.html" class="img-link">
                        <img src="${event.cover}" alt="${event.title}">
                    </a>
                </div>
                
                <div class="event-content">
                    ${event.text.split('</p>')[0] + '</p>'} <!-- Берем только первый абзац для превью -->
                </div>

                <div class="event-footer">
                    <a href="/sobor_Rozhdestva/school/news/${event.id}/index.html" class="btn-gold-sm">
                        Читать далее
                    </a>
                </div>
            </article>
        `;
    });

    container.innerHTML = html;
}

// Запуск при загрузке
document.addEventListener('DOMContentLoaded', () => {
    // Если мы на главной странице школы
    if (document.getElementById('events-container')) {
        renderNews('events-container', 3); // Показываем 3 последние
    }
    // Если мы на странице всех новостей
    if (document.getElementById('all-news-container')) {
        renderNews('all-news-container'); // Показываем все
    }
});
