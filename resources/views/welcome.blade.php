<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <link rel="icon" href="<%= BASE_URL %>favicon.ico">
        <link rel="stylesheet" href="css/vendors/_variables.css">
        <link rel="stylesheet" href="css/vendors/chartjs/chart.css">
        <link rel="stylesheet" href="css/_custom.css">
        <link rel="stylesheet" href="css/_ie-fix.css">
        <link rel="stylesheet" href="css/_variables.css">
        <link rel="stylesheet" href="css/style.css">
        <title>CoreUI - Vue Open Source Bootstrap Admin Template</title>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-118965717-3"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        // Shared ID
        gtag('config', 'UA-118965717-3');
        // Vue.js ID.
        gtag('config', 'UA-118965717-7');
        </script>
    </head>
    <body>
        <noscript>
        <strong>We're sorry but this app doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
        </noscript>
       <div id="app">
       </div>
       <script type="text/javascript" src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
