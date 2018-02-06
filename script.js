
var tweetUrl = "https://twitter.com/intent/tweet/?text=";
 var quote = document.getElementById("quote");
 var author = document.getElementById("author");
 var tweet = document.getElementById("tweet");

 //set default quote href
 tweet.href = tweetUrl + "I believe the target of anything in life should be to do it so well that it becomes an art";

var getElementDOMs = function () {
    var iElements = [];
    var social = document.getElementsByClassName('social');

    for (var key in social) {
        if (social.hasOwnProperty(key)) {
            iElements.push(social[key]);
        }
    }
    return {
        button:  document.getElementById('button'),
        jumbotron:  document.getElementsByClassName('jumbotron')[0],
        quoteText: document.getElementById('quote'),
        firstIElement: iElements[0]
    };
};

var getColorNumbers = function () {    
    return {
        r: Math.floor(Math.random() * 257),
        g: Math.floor(Math.random() * 257),
        b: Math.floor(Math.random() * 257)
    };
};

var generateRGB = function() {
    var numbers = getColorNumbers();
    return "rgb(" + numbers.r + ", " + numbers.g + ", "  + numbers.b + ")";
};

var fetchQuotes = function() {   
    fetch("https://talaikis.com/api/quotes/random/")
    .then(function(response){        
        return response.json();
    }).then(function(data){
        quote.innerHTML = data.quote;
        author.innerHTML = data.author;
        tweet.href = tweetUrl + data.quote;

        var color = generateRGB();
        var doms = getElementDOMs();

        setTimeout(function () {
            doms.jumbotron.classList.add("new-border");
            doms.jumbotron.style.borderColor = color;
            doms.firstIElement.style.color = color;
            doms.quoteText.style.color = color;
        }, 300);
    
        doms.jumbotron.classList.remove("new-border");
    }).catch(function(error){
      return error;  
    });
}


button.addEventListener('click', function (e) {    
        fetchQuotes();   
});

