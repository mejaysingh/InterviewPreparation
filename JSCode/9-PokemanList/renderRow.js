const pokemonTable = document.getElementById('pokemon-table')

export function renderRow(data){
    const trEl = document.createElement('tr');
    const tdNameEl = document.createElement('td');
    const tdPowerEl = document.createElement('td');

    tdNameEl.textContent = data.name
    tdPowerEl.textContent = data.abilities.map((row) => row.ability.name)

    trEl.appendChild(tdNameEl)
    trEl.appendChild(tdPowerEl)
    pokemonTable.appendChild(trEl)
}

/*<tr>
    <td>test</td>
    <td>power</td>
</tr>
<tr>
    <td>test</td>
    <td>power</td>
</tr> */