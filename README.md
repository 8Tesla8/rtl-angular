# RtlAngular

rtl text align in css

.direction{
    text-align: start;
}


specific css style which will be different in rtl
section[dir = "rtl"]{
    text-align: left;
    color: red
}

// class which will define text direction 
export class TextDirectionController {

    public textDirection: string;

    constructor() {
        this.CheckDiriction();
    }

    public CheckDiriction(): void {
        const lang = localStorage.getItem('lang');
        if (lang === 'he') { // he - hebrew language
            this.textDirection = 'rtl';
        } else {
            this.textDirection = 'ltr';
        }
    }
}

//how use it in component   
export class AppComponent {     
  title = 'rtlAngular';    

  public directionController = new TextDirectionController();  
}  

//in HTML
<section [dir] = "directionController.textDirection">
  <button class="btn">Text</button>
  <p> Text in section</p>
</section>

