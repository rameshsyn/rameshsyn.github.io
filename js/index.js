
// Coded By Ramesh syangtan @rameshsyn
$(document).ready(function() {
  /*
   // portfolio code structure

    project: {
      name: '',
      description: '',
      thumbnail: '',
      link: '',
      tools: [
        
      ]
   }

   */
   var portfolio = [
   {
    name: "Name Finder",
    description: 'A simple funny app that finds you a someone\'s name !',
    thumbnail: 'name-finder.png',
    link: 'https://rameshsyangtan.com.np/name-finder',
    tools: [
    'JS',
    'Jquery',
    'animate.css'
    ]
  },{
    name: 'Age Finder',
    description: 'Go a head and do some math as it instructs !',
    thumbnail: 'age-finder.png',
    link: 'https://rameshsyangtan.com.np/age-finder',
    tools: [
    'JS',
    'Jquery'
    ]
  },{
    name: 'Recipe Box',
    description: 'A simple App , added recipes will be stored in local storage , can be edited, deleted, added new.',
    thumbnail: 'recipe-box.png',
    link: 'https://codepen.io/rameshsyn/full/VjbAOm/',
    tools: [
    'React',
    'React-bootstrap',
    'Jquery',
    'ES6',
    'SCSS'
    ]
  },{
    name: 'Simon Game',
    description: 'Do as simon says, Boost your memory power',
    thumbnail: 'simon-game.png',
    link: 'https://codepen.io/rameshsyn/full/qNPvgQ',
    tools: [
    'React',
    'Jquery',
    'ES6',
    'SCSS'
    ]
  },
  {
    name: 'FCC Leaderboard',
    description: 'It shows FreeCodeCamp campers learderboard according to their browine points, Leaderboard can be viewed as last 30 days / all the time.',
    thumbnail: 'fcc-leaderboard.png',
    link: 'https://codepen.io/rameshsyn/full/mERNEj',
    tools: [
    'React',
    'SCSS',
    'Jquery',
    'animate.css'
    ]
  },
  {
    name: 'Pomodoro Clock',
    description: 'Pomodoro Clock with feature of break and session editable',
    thumbnail: 'pomodoro-clock.png',
    link: 'https://codepen.io/rameshsyn/full/gPrvGy',
    tools: [
    'Jquery',
    'animate.css',
    'JS',
    'Bootstrap'
    ]
  },
  {
    name: 'Local Weather Info',
    description: 'It shows current local weather based on latitude and longitude. It informs current temperature, weather, wind speed and so on......',
    thumbnail: 'weather-app.png',
    link: 'https://codepen.io/rameshsyn/full/zrpXbg/',
    tools: [
    'openweather.org API',
    'ipinfo.io API',
    'Bootstrap',
    'Jquery'
    ]
  },
  {
    name: '3D Calculator',
    description: 'A simple calculater which performs basic arthmetic calculation. Inputs can be done directly from keyboard',
    thumbnail: 'calculator.png',
    link: 'https://codepen.io/rameshsyn/full/dGOONN/',
    tools: [
    'CSS3',
    'Jquery',
    'animate.css'
    ]
  },
  {
    name: 'Markdown Previewer',
    description: 'Input markdown = Output markdown rendered document.',
    thumbnail: 'markdown-previewer.png',
    link: 'https://codepen.io/rameshsyn/full/dXpjMz/',
    tools: [
    'marked.js',
    'React',
    'Bootstrap',
    'ES6'
    ]
  },
  {
    name: 'Twitch.tv Streamer',
    description: 'It shows information of twitch.tv streamer (online/offline).',
    thumbnail: 'twitch-tv.png',
    link: 'https://codepen.io/rameshsyn/full/PzoEwy/',
    tools: [
    'twitch.tv API',
    'Bootstrap',
    'Jquery',
    'SCSS'
    ]
  },{
    name: 'Tic Tac Toe',
    description: 'A simple game can be played by two players. one player will be Computer and other is user . User can choose (X/O)',
    thumbnail: 'tic-tac-toe.png',
    link: 'https://codepen.io/rameshsyn/full/pbJprX/',
    tools: [
    'animate.css',
    'Jquery',
    'SCSS'        
    ]
  },
  {
    name: 'Wikipedia Viewer',
    description: 'An app to view wikipedia article',
    thumbnail: 'wikipedia-viewer.png',
    link: 'https://codepen.io/rameshsyn/full/vKBygN/',
    tools: [
    'wikipedia Open Search API',
    'Jquery'

    ]
  },
  {
    name: 'Random Quote Machine',
    description: 'This is simple app which generates quotes randomly. Quote can be tweeted',
    thumbnail: 'ran-quote-machine.png',
    link: 'https://codepen.io/rameshsyn/full/ZQENOq/',
    tools: [
    'Twitter-intent API',
    'Jquery'        
    ]
  }
  ]
  // Renders portfolio data 

  var html = '';
  portfolio.forEach(function(pf,i) {
    var tools = "";
    pf['tools'].forEach(function(tool) {
      tools += "<span>" + tool + "</span>";
    });
    html += "<div class='pf-item' id='pf-item'><img id='p" + i + " ' src='img/" + pf['thumbnail'] +  "' alt='" + pf['name'] + "' class='identifier img-responsive img-thumbnail'><a href='" + pf['link'] + "'><div class='pf-info' id='pf" + i +  "'><h2 class='pf-title'>" + pf['name'] +  "</h2> <p class='pf-description'>" + pf['description'] + "</p><h4>Tools: </h4><div class='pf-tools'>" + tools + "</div></div></a></div>";
  });
  $('.pf').html(html);
  

  // show portfolio info on mouseover
  $(".identifier").hover(function(event) {
    var id = event.target.id.split('');
    id = id.splice(1).join('');
    $("#pf" + id).slideToggle();
  });
  

  //scrolls upto portfolio
  $("#to-pf").click(function() {
    $("body").animate({
      scrollTop: $("#portfolio").offset().top
    }, "slow");
  });
  
  //scrolls upto contact
  $("#to-c").click(function() {
    $("body").animate({
      scrollTop: $("#contact").offset().top
    },"slow");
  });
  $("footer span").text(new Date().getFullYear());
  
});