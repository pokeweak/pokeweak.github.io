<?php 
    $url = file_get_contents('pokemon.json');
    $data = json_decode($url, true);
    $pk = json_decode($url, true);
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
        
        <meta name="apple-mobile-web-app-status-bar-style" content="white">
        <meta name="apple-mobile-web-app-title" content="Pokeweak">

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
        <div class="wrapper-fixed">
            <div class="overlay"></div>
            <div class="content-side">
                <img class="back" src="images/close_icon_white.svg">
                <div class="pk-img">
                    <img src="images/pk_assets/<?php echo $pk[2]['number']; ?>.png">
                    <div class="color-detail" style="background-color: <?php echo $pk[2]['colorHex'] ?>"></div>
                </div>
                <div class="content-side-info">
                    <div class="number">#<?php echo str_pad($pk[2]['number'], 3, '0', STR_PAD_LEFT);  ?></div>
                    <div class="name"><?php echo $pk[2]['name']; ?></div>
                    <div class="type-container">
                        <?php $i = 0; foreach($pk[2]['types'] as $types){  $i++; ?>
                        <div class="tags-type <?php echo $types; ?>"></div> 
                        <?php  }?>
                    </div>
                    <div class="description">
                        <p>There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.</p>
                    </div>
                    <?php if($pk[2]['weaknesses']){ ?>
                    <h3>Weaknesses</h3>
                    <div class="tags-container">
                        <?php foreach($pk[2]['weaknesses'] as $weaknesses){ ?>
                            <div class="tags-type <?php echo $weaknesses; ?>"></div>
                        <?php  }?>
                    </div>
                    <?php  } ?>
                    <?php if($pk[2]['strengths']){ ?>
                    <h3>Strengths</h3>
                    <div class="tags-container">
                        <?php foreach($pk[2]['strengths'] as $strengths){ ?>
                            <div class="tags-type <?php echo $strengths; ?>"></div>
                        <?php  }?>
                    </div>
                    <?php  } ?>
                </div>
            </div>
        </div>
        
        <div class="navbar">
            <div class="searchbar-container">
                <img class="logo" src="images/logo.svg">
                <div class="searchbar">
                    <img class="search-icon" src="images/search_icon.svg">
                    <img class="close-icon" src="images/close_icon.svg">
                    <form id="form">
                        <input type="text" id="pokemon" name="pokemon" placeholder="Search by name">
                    </form>
                </div>
            </div>
        </div>
        <div class="content">
           <?php foreach($data as $data){ ?>
            <div class="card">
                <div class="pk-container">
                    <div class="pk-img">
                        <img src="images/pk_assets/<?php echo $data['number']; ?>.png">
                        <div class="color-detail" style="background-color: <?php echo $data['colorHex'] ?>"></div>
                    </div>
                    <h2 class="name"><?php echo $data['name']; ?></h2>
                    <div class="number">#<?php echo str_pad($data['number'], 3, '0', STR_PAD_LEFT);  ?></div>
                </div>
            </div>
            <?php } ?>
        </div>
        <div class="footer">
            <div class="open-source">
                <p>Open source project at:</p>
                <a href="https://github.com/pokeweak/pokeweak.github.io" target="_blank">
                    <svg aria-hidden="true" class="github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
                </a>
            </div>
        </div>
        
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.0/jquery-ui.js"></script>

    <script src="js/main.js"></script>

    </body>
    

</html>