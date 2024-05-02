

class Calebe{
    constructor (site){
        this.site = site;
    }

    exibirSite (){
        window.open(this.site);
    }
}

var novoCalebe = new Calebe ("https://www.tiktok.com/@endrick/video/7355302397683698950?lang=pt-BR");
novoCalebe.exibirSite();
