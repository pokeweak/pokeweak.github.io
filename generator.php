<?php 
    $url = file_get_contents('pokemon.json');
    $data = json_decode($url, true);
?>
<!DOCTYPE html>
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <title>Pokeweak for Pokémon GO</title>
        <meta name="description" content="">
        <meta name="HandheldFriendly" content="True">
        <meta name="MobileOptimized" content="320">
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, minimal-ui">
        <meta http-equiv="cleartype" content="on">
        <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-icon.png">
        <link rel="icon" type="image/png" href="favicons/favicon-32x32.png" sizes="32x32">
        <link rel="icon" type="image/png" href="favicons/favicon-16x16.png" sizes="16x16">
        <link rel="manifest" href="favicons/manifest.json">
        <link rel="mask-icon" href="favicons/safari-pinned-tab.svg" color="#5bbad5">
        <meta name="theme-color" content="#ffffff">

        <link rel="stylesheet" href="css/style.css">
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700' rel='stylesheet' type='text/css'>
        
        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-82318527-1', 'auto');
          ga('send', 'pageview');

        </script>
    </head>
    <body>
        <div class="navbar">
            <h1>Pokeweak</h1>
            <div class="searchbar-container">
                <div class="searchbar">
                    <img class="close-icon" src="images/close_icon.svg">
                    <form id="form">
                        <input type="text" id="pokemon" name="pokemon" placeholder="Search by name">
                    </form>
                </div>
            </div>
        </div>
        <div class="content">
           <?php foreach($data as $data){ ?>
            <div class="cell expanded">
                <div class="color-detail" style="background-color: <?php echo $data['colorHex'] ?>"></div>
                <div class="pk-img">
                    <img src="images/pk_assets/<?php echo $data['number']; ?>.png">
                </div>
                <div class="info">
                    <div class="number">#<?php echo str_pad($data['number'], 3, '0', STR_PAD_LEFT);  ?></div>
                    <h2 class="name"><?php echo $data['name']; ?></h2>
                    <div class="type-container">
                        <?php $i = 0; foreach($data['types'] as $types){  $i++; ?>
                          <?php if($i == 2){ echo '/'; } ?>  <div class="type <?php echo $types; ?>"></div> 
                        <?php  }?>
                    </div>
                    <?php if($data['weaknesses']){ ?>
                        <h3>Weaknesses</h3>
                        <div class="tags-container">
                            <?php foreach($data['weaknesses'] as $weaknesses){ ?>
                                <div class="tags-type <?php echo $weaknesses; ?>"></div>
                            <?php  }?>
                        </div>
                    <?php  } ?>
                    <?php if($data['strengths']){ ?>
                        <h3>Strengths</h3>
                        <div class="tags-container">
                            <?php foreach($data['strengths'] as $strengths){ ?>
                                <div class="tags-type <?php echo $strengths; ?>"></div>
                            <?php  } ?>
                        </div>
                    <?php  } ?>
                </div>
            </div>
            <?php } ?>
        </div>
        
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.0/jquery-ui.js"></script>

    <script src="js/main.js"></script>

    </body>
    

</html>