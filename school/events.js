const schoolEvents =[
    {
        id: "xmas26",
        date: "7 Января 2026",
        title: "Рождественский детский концерт",
        desc: "В престольный праздник состоялся торжественный концерт. Сводный хор исполнил праздничный тропарь. Дети подготовили трогательные сценки и песни, а после выступления получили подарки от митрополита Арсения.",
        cover: "../images/event-xmas26-1.jpg",
        gallery:
    },
    {
        id: "sept25",
        date: "21 Сентября 2025",
        title: "Начало учебного года",
        desc: "В праздник Рождества Пресвятой Богородицы во дворе собора прошел концерт. Выступали воспитанники Центра реабилитации. Праздник завершился теплой чайной трапезой с пирогами.",
        cover: "../images/event-sept25-1.jpg",
        gallery:
    },
    {
        id: "grad25",
        date: "Май 2025",
        title: "Чествование выпускников",
        desc: "Торжественное подведение итогов обучения старшей группы. Воспитанникам были вручены свидетельства об окончании воскресной школы и памятные подарки.",
        cover: "../images/event-grad25-1.jpg",
        gallery:
    },
    {
        id: "easter25",
        date: "20 Апреля 2025",
        title: "Пасхальный утренник",
        desc: "Дети младшей группы представили театральную инсценировку, прославляющую Воскресение Христово. Под сводами собора дружно звучало: «Воистину Воскресе!».",
        cover: "../images/event-easter25-1.jpg",
        gallery:
    },
    {
        id: "maslenitsa25",
        date: "2 Марта 2025",
        title: "Масленичная ярмарка",
        desc: "В Прощеное воскресенье дети и родители организовали ярмарку во дворе храма. Прихожане угощались свежими блинами, домашней выпечкой и приобретали поделки.",
        cover: "../images/event-maslenitsa25-1.jpg",
        gallery:
    },
    {
        id: "occnt25",
        date: "8 Января 2025",
        title: "Концерт в ОЦКНТ",
        desc: "Вокальный ансамбль Воскресной школы принял участие в большом городском концерте совместно с Архиерейским хором собора, исполнив «Рождественскую песню».",
        cover: "../images/event-occnt25-1.jpg",
        gallery:
    }
];

// --- МАГИЯ: СКРИПТ, КОТОРЫЙ РИСУЕТ HTML НА ОСНОВЕ ДАННЫХ ВЫШЕ ---
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("events-container");
    if (!container) return;

    let html = "";
    
    schoolEvents.forEach(event => {
        // Создаем скрытые ссылки для дополнительных фоток (галерея)
        let galleryHtml = "";
        if (event.gallery && event.gallery.length > 0) {
            event.gallery.forEach(imgUrl => {
                galleryHtml += `<a href="${imgUrl}" data-fancybox="gallery-${event.id}" style="display:none;"></a>`;
            });
        }

        // Рисуем саму карточку
        html += `
            <div class="event-card">
                <a href="${event.cover}" class="event-img-wrapper" data-fancybox="gallery-${event.id}" data-caption="${event.title}">
                    <img src="${event.cover}" alt="${event.title}">
                </a>
                ${galleryHtml}
                <div class="event-content">
                    <span class="event-date">${event.date}</span>
                    <h4 class="event-title">${event.title}</h4>
                    <p class="event-desc">${event.desc}</p>
                </div>
            </div>
        `;
    });

    // Вставляем всё на страницу
    container.innerHTML = html;
});
