    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript">
    
    
    // var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=cook&api-key=7FVBPfr9vnJxAUu1QPdv1mIibAxTChrX"
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+""+"&api-key=7FVBPfr9vnJxAUu1QPdv1mIibAxTChrX"
    var searchTerm = "cook";
    var numRecord = 6;
    var startYear = 2010;
    var endYear = 2020;

    $(document).ready(function(){
        
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            

            
            console.log(response);
            console.log(response.response.docs[0].pub_date);
            
        })
        
        $("#search").on("click", function(e){
            console.log(searchTerm, numRecord, startYear, endYear);
            // $(queryURL).append(searchTerm);
        })
        
    }) 

    
    </script>
