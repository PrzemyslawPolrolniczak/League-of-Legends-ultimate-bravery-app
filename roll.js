/* Version 1
 * Ostatni champ jaki wyszedł : Kayn
 * 06.08.2017
 * by Przemek
 */

var a = ['Aatrox', 'Ahri', 'Akali', 'Alistar', 'Amumu', 'Anivia', 'Annie', 'Ashe', 'Aurelion Sol', 'Azir', 'Bard', 'Blitzcrank', 'Brand', 'Braum', 'Caitlyn', 'Camille', 'Cassiopeia', "Cho'Gath", 'Corki', 'Darius', 'Diana', 'Dr. Mundo', 'Draven', 'Ekko', 'Elise', 'Evelynn', 'Ezreal', 'Fiddlesticks', 'Fiora', 'Fizz', 'Galio', 'Gangplank', 'Garen', 'Gnar', 'Gragas', 'Hecarim', 'Heimerdinger', 'Illaoi', 'Irelia', 'Ivern', 'Janna', 'Jarvan IV', 'Jax', 'Jayce', 'Jhin', 'Jinx', 'Kalista', 'Karma', 'Karthus', 'Kassadin', 'Katarina', 'Kayle', 'Kayn', 'Kennen', "Kha'Zix", 'Kindred', 'Kled', "Kog'Maw", 'LeBlanc', 'Lee Sin', 'Leona', 'Lissandra', 'Lucian', 'Lulu', 'Lux', 'Malphite', 'Malzahar', 'Maokai', 'Master Yi', 'Miss Fortune', 'Mordekaiser', 'Morgana', 'Nami', 'Nasus', 'Nautilus', 'Nidalee', 'Nocturne', 'Nunu', 'Olaf', 'Orianna', 'Pantheon', 'Poppy', 'Quinn', 'Rakan', 'Rammus', "Rek'Sai", 'Renekton', 'Rengar', 'Riven', 'Rumble', 'Ryze', 'Sejuani', 'Shaco', 'Shen', 'Shyvana', 'Singed', 'Sion', 'Sivir', 'Skarner', 'Sona', 'Soraka', 'Swain', 'Syndra', 'Tahm Kench', 'Taliyah', 'Talon', 'Taric', 'Teemo', 'Thresh', 'Tristana', 'Trundle', 'Tryndamere', 'Twisted Fate', 'Twitch', 'Udyr', 'Urgot', 'Varus', 'Vayne', 'Veigar', "Vel'Koz", 'Vi', 'Viktor', 'Vladimir', 'Volibear', 'Warwick', 'Wukong', 'Xayah', 'Xerath', 'Xin Zhao', 'Yasuo', 'Yorick', 'Zac', 'Zed', 'Ziggs', 'Zilean', 'Zyra'];
var b = ['Top', 'Mid', 'ADC', 'Jungle', 'Support', 'Fill'];
var c = ['AD', 'AP', 'Full Tank', 'Movement Speed', 'Offtank AD', 'Offtank AP'];
var d = ['Flash', 'Ghost', 'Smite', 'Cleanse', 'Clarity', 'Heal', 'Ingnite', 'Barrier', 'Exhaust', 'Teleport'];
var champion = a[Math.floor(a.length * Math.random())];
var build = c[Math.floor(c.length * Math.random())];

var role = function ultimateBravery() {
    
    var role1RNG = Math.floor(Math.random() * b.length);
    var role1 = b[role1RNG];
    b.splice(role1RNG, 1);
    
    var role2RNG = Math.floor(Math.random() * b.length);
    var role2 = b[role2RNG];
    
    if (role1 == 'Fill') {
        return role1
    } else {
        return role1 + ' / ' + role2;
    }
}

var summoners = function summonersSpells() {
    var summ1RNG = Math.floor(Math.random() * d.length);
    var summ1 = d[summ1RNG];
    d.splice(summ1RNG,1);
    
    var summ2RNG = Math.floor(Math.random() * d.length);
    var summ2 = d[summ2RNG];
    
    return summ1 + " / " + summ2;
}

console.log('***********');
console.log('');
console.log('Champion:  '+champion);
console.log('Role:      '+role());
console.log('Build:     '+build);
console.log('Summoners: '+summoners());
console.log('');
console.log('**********');


const remote = require('electron').remote;

function finish(){
    var window = remote.getCurrentWindow();
    window.close();  
}