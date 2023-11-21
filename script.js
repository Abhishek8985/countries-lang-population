function visual(option){
    const populationData = [
        { country: 'China', population: 1444216107 },
        { country: 'India', population: 1393409038 },
        { country: 'United States', population: 332915073 },
        { country: 'Indonesia', population: 276361783 },
        { country: 'Pakistan', population: 225199937 },
        { country: 'Brazil', population: 213993437 },
        { country: 'Nigeria', population: 211400708 },
        { country: 'Bangladesh', population: 166303498 },
        { country: 'Russia', population: 145912025 },
        { country: 'Mexico', population: 130262216 }
    ];

    const languageData = [
        { language: 'Mandarin Chinese', speakers: 918000000 },
        { language: 'Spanish', speakers: 460000000 },
        { language: 'English', speakers: 379000000 },
        { language: 'Hindi', speakers: 341000000 },
        { language: 'Arabic', speakers: 310000000 },
        { language: 'Bengali', speakers: 230000000 },
        { language: 'Portuguese', speakers: 221000000 },
        { language: 'Russian', speakers: 154000000 },
        { language: 'Urdu', speakers: 150000000 },
        { language: 'Indonesian', speakers: 140000000 }
    ];
    const change=document.querySelector('#change');
    if(option=='population'){
        change.innerHTML='populated';
        option='country';
        createBarGraph(populationData, 'population',option);
    }
    else{
        change.innerHTML='spoken';
        createBarGraph(languageData, 'speakers',option);
    }
    
}
function createBarGraph(data, property,option) {
    const vis=document.querySelector('.visualize');
    vis.innerHTML='';
    data.forEach(item => {
        const row=document.createElement('div');
        row.className='row';
        vis.append(row);
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.width = `${(item[property] / data[0][property]) * 100}%`;
        
        const countryName=document.createElement('div');
        countryName.className='countryName';
        countryName.textContent=`${item[option]}`;
        console.log(`${option}`)

        const label = document.createElement('div');
        label.className = 'label';
        label.textContent = `${item[property]}`;
        console.log(`${option}`)

        row.appendChild(countryName);
        row.appendChild(bar);
        row.appendChild(label);
    });
}