
//Dinamic nav bar
//https://github.com/leinedam
//http://sangoidesign.com/
//made by Madeleine Sangoi
//Under MIT License


var title = "FCC Widgets";


var navbarComponets =[

    '<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">',
        '<div class="navbar-header">',
            '<a class="navbar-brand" href="#">'+ title +'</a>',
        '</div>',

        '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">',
            '<span class="sr-only">Toggle navigation</span>',
            '<span class="icon-bar"></span>',
            '<span class="icon-bar"></span>',
            '<span class="icon-bar"></span>',
        '</button>',

        '<ul class="nav navbar-right navbar-top-links">',
            '<li class="dropdown">',
                '<a class="dropdown-toggle" data-toggle="dropdown" href="#">',
                     'Code<b class="caret"></b>',
                '</a>',
                '<ul class="dropdown-menu dropdown-user">',
                    '<li><a href="#"><i class="fa fa-github-alt" aria-hidden="true"></i>GitHub Repo</a>',
                    '</li>',
                    '<li><a href="#"><i class="fa fa-download" aria-hidden="true"></i>Download</a>',
                    '</li>',
                '</ul>',
            '</li>',
        '</ul>',

        '<div class="navbar-default sidebar" role="navigation">',
            '<div class="sidebar-nav navbar-collapse">',

                '<ul class="nav " id="side-menu">',
               
                   '<li>',
                        '<a href="../index.html" >About</a>',
                    '</li>',

                    '<li class="active">',
                        '<a href="#">Widgets<span class="fa arrow"></span></a>',
                        '<ul class="nav nav-second-level">',
                            '<li >',
                                '<a href="local-weather.html">Local Weather</a>',
                            '</li>',
                            '<li>',
                                '<a href="wikipedia-searcher.html">Wikipedia Viewer</a>',
                            '</li>',
                            '<li>',
                                '<a href="quote-machine.html">Random Quote Machine</a>',
                            '</li>',
                            '<li>',
                                '<a href="calculator.html">Calculator </a>',
                            '</li>',
                        '</ul>',
                    '</li>',
                '</ul>',
            '</div>',
        '</div>',
    '</nav>'


].join("\n");



$("#wrapper").append(navbarComponets);
