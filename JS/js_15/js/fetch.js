//- Зробити сторінку з кнопкою, при натиску на кнопку робиться запит (fetch) до 
// http swapi.dev/api/planets/1/ та виводиться картка (html розмітка довільна) з даними з запиту, дані з масиву які мають лінк треба вивести в тег А і додати лінк в атрибут href

window.onload = function(){
    let btn = document.querySelector('button')
    btn.onclick = function (){
        fetch('https://swapi.dev/api/planets/1/')
        .then(response => response.json())
        .then(data => {
            let planetInfo = document.querySelector('.infPl');
            let planetName = data.name;
            let planetRotationPeriod = data.rotation_period;
            let planetOrbitalPeriod = data.orbital_period;
            let planetDiameter = data.diameter;
            let planetClimate = data.climate;
            let planetGravity = data.gravity;
            let planetTerrain = data.terrain;
            let planetSurfaceWater = data.surface_water;
            let planetPopulation = data.population;
            let planetResidents = data.residents;

            let residentsList = '';
            if (planetResidents.length > 0) {
                residentsList = '<ul>';
                planetResidents.forEach(resident => {
                    residentsList += `<li><a href="${resident}">${resident}</a></li>`;
                });
                residentsList += '</ul>';
            } else {
                residentsList = 'Немає жителів';
            }

            const planetCard = `
                <div>
                    <h2>${planetName}</h2>
                    <p><strong>Період обертання:</strong> ${planetRotationPeriod}</p>
                    <p><strong>Орбітальний період:</strong> ${planetOrbitalPeriod}</p>
                    <p><strong>Діаметр:</strong> ${planetDiameter}</p>
                    <p><strong>Клімат:</strong> ${planetClimate}</p>
                    <p><strong>Гравітація:</strong> ${planetGravity}</p>
                    <p><strong>Місцевість:</strong> ${planetTerrain}</p>
                    <p><strong>Поверхневі води:</strong> ${planetSurfaceWater}</p>
                    <p><strong>Населення:</strong> ${planetPopulation}</p>
                    <p><strong>Жителі:</strong> ${residentsList}</p>
                </div>
            `;

            planetInfo.innerHTML = planetCard;
        })
        .catch(error => {
            console.error('Виникла помилка:', error);
        })        
    }
}

