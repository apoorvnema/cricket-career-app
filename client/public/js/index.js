document.getElementById('playerForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const playerData = {};
    formData.forEach((value, key) => {
        playerData[key] = value;
    });
    axios.post('http://127.0.0.1:3000/player/add-player', playerData)
        .then(response => {
            console.log('Player data sent successfully:', response.data);
        })
        .catch(error => {
            console.error('Error sending player data:', error);
        });
});

document.getElementById('searchButton').addEventListener('click', function () {
    const searchPlayer = document.getElementById('searchPlayer').value;
    axios.get(`http://127.0.0.1:3000/player/get-player?name=${searchPlayer}`)
        .then(response => {
            const playerInfo = response.data;
            document.getElementById("playerInfo").classList.add("displayInfo");
            document.getElementById("playerInfo").classList.remove("hiddenInfo");
            document.getElementById('playerName').innerText = playerInfo.name;
            document.getElementById('playerDOB').innerText = playerInfo.dob;
            document.getElementById('playerPhotoUrl').innerHTML = `<img src="${playerInfo.photoUrl}" alt="Player Photo">`;
            document.getElementById('playerBirthplace').innerText = playerInfo.birthplace;
            document.getElementById('playerCareer').innerText = playerInfo.career;
            document.getElementById('playerMatches').innerText = playerInfo.matches;
            document.getElementById('playerScore').innerText = playerInfo.score;
            document.getElementById('playerFifties').innerText = playerInfo.fifties;
            document.getElementById('playerCenturies').innerText = playerInfo.centuries;
            document.getElementById('playerWickets').innerText = playerInfo.wickets;
            document.getElementById('playerAverage').innerText = playerInfo.average;
            const editButton = document.getElementById('editPlayerBtn');
            editButton.dataset.id = playerInfo.id;
        })
        .catch(error => {
            console.log('Error searching player:', error);
        });
});

document.getElementById("editPlayerBtn").addEventListener('click', function () {
    const playerId = this.dataset.id;
    axios.delete(`http://127.0.0.1:3000/player/edit-player/${playerId}`)
        .then(result => {
            document.getElementById('name').value = document.getElementById('playerName').innerText;
            document.getElementById('dob').value = document.getElementById('playerDOB').innerText;
            document.getElementById('photoUrl').value = document.getElementById('playerPhotoUrl').firstChild.src;
            document.getElementById('birthplace').value = document.getElementById('playerBirthplace').innerText;
            document.getElementById('career').value = document.getElementById('playerCareer').innerText;
            document.getElementById('matches').value = document.getElementById('playerMatches').innerText;
            document.getElementById('score').value = document.getElementById('playerScore').innerText;
            document.getElementById('fifties').value = document.getElementById('playerFifties').innerText;
            document.getElementById('centuries').value = document.getElementById('playerCenturies').innerText;
            document.getElementById('wickets').value = document.getElementById('playerWickets').innerText;
            document.getElementById('average').value = document.getElementById('playerAverage').innerText;
            const playerInfoSection = document.getElementById('playerInfo');
            const spanElements = playerInfoSection.querySelectorAll('span');
            spanElements.forEach(span => {
                span.innerHTML = '';
            });
            playerInfoSection.classList.add("hiddenInfo");
            playerInfoSection.classList.remove("displayInfo");
        })
        .catch(err => console.log(err))
});



