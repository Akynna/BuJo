import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonContent, Platform } from '@ionic/angular';

@Component({
  selector: 'app-year',
  templateUrl: './year.page.html',
  styleUrls: ['./year.page.scss'],
})
export class YearPage implements OnInit {

  @ViewChild('imageCanvas', {static: false}) canvas: ElementRef;
  canvasElement: any;
  private ctx: CanvasRenderingContext2D;
  private position: DOMRect;

  @ViewChild(IonContent, {static: false}) content: IonContent;

  saveX: number;
  saveY: number;

  offsetX: number;
  offsetY: number;

  isDown: boolean;

  selectedColor = '#000000';

  @ViewChild('fixedContainer', {static: false}) fixedContainer: any;

  constructor(private plt: Platform) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    // https://github.com/ionic-team/ionic/issues/9071#issuecomment-362920591
    // Get the height of the fixed item
    //let itemHeight = this.fixedContainer.nativeElement.offsetHeight;

    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.position = this.canvas.nativeElement.getBoundingClientRect();

    this.offsetX = this.position.left;
    this.offsetY = this.position.top;
 
    // Add preexisting scroll margin to fixed container size
    //itemHeight = Number.parseFloat(scroll.style.marginTop.replace("px", "")) + itemHeight;
    //scroll.style.marginTop = itemHeight + 'px';
  }
 
  ionViewDidLoad() {
    // Set the Canvas Element and its size
    /*this.canvasElement = this.canvas.nativeElement;
    this.canvasElement.width = this.plt.width() + '';
    this.canvasElement.height = 200;*/

  }

  startDrawing(ev) {
    //var canvasPosition = this.canvasElement.getBoundingClientRect();
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.position = this.canvas.nativeElement.getBoundingClientRect();

    console.log("start drawing");
    this.saveX = ev.touches[0].pageX - this.position.x;
    this.saveY = ev.touches[0].pageY - this.position.y;
        
    var width = this.position.right - this.offsetX;

    if (this.canvas.nativeElement.width != width) {
      var height = this.position.bottom - this.offsetY;
      this.saveX = this.saveX * (this.canvas.nativeElement.width / width);
      this.saveY = this.saveY * (this.canvas.nativeElement.height / height);
    }

    console.log(ev);
  }

  startDrawingMouse(ev) {
    //var canvasPosition = this.canvasElement.getBoundingClientRect();
    this.isDown = true;
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.position = this.canvas.nativeElement.getBoundingClientRect();
    console.log("start drawing");

    this.saveX = ev.pageX - this.offsetX;
    this.saveY = ev.pageY - this.offsetY;
    
    var width = this.position.right - this.offsetX;

    if (this.canvas.nativeElement.width != width) {
      var height = this.position.bottom - this.offsetY;
      this.saveX = this.saveX * (this.canvas.nativeElement.width / width);
      this.saveY = this.saveY * (this.canvas.nativeElement.height / height);
    }

    /*this.saveX = ev.pageX - this.position.x;
    this.saveY = ev.pageY - this.position.y;*/

    console.log("dakjsdsakd");
  }

  stopDrawingMouse() {
    this.isDown = false;
  }

  moved(ev) {
    console.log("moving");

    var currentX = ev.touches[0].pageX - this.position.x;
    var currentY = ev.touches[0].pageY - this.position.y;

    var width = this.position.right - this.offsetX;

    if (this.canvas.nativeElement.width != width) {
      var height = this.position.bottom - this.offsetY;
      currentX = currentX * (this.canvas.nativeElement.width / width);
      currentY = currentY * (this.canvas.nativeElement.height / height);
    }

    this.ctx.lineJoin = "round";
    this.ctx.strokeStyle = this.selectedColor;
    this.ctx.lineWidth = 2;

    this.ctx.beginPath();
    this.ctx.moveTo(this.saveX, this.saveY);
    this.ctx.lineTo(currentX, currentY);
    this.ctx.closePath();

    this.ctx.stroke();

    this.saveX = currentX;
    this.saveY = currentY;
  }

  movedMouse(ev) {
    if (this.isDown)
    {
      console.log("moving");
      /*const currentX = ev.pageX - this.position.x;
      const currentY = ev.pageY - this.position.y;*/
      this.ctx = this.canvas.nativeElement.getContext('2d');
      this.position = this.canvas.nativeElement.getBoundingClientRect();
  
      var currentX = ev.pageX - this.offsetX;
      var currentY = ev.pageY - this.offsetY;
  
      var width = this.position.right - this.offsetX;
  
      if (this.canvas.nativeElement.width != width) {
        var height = this.position.bottom - this.offsetY;
        currentX = currentX * (this.canvas.nativeElement.width / width);
        currentY = currentY * (this.canvas.nativeElement.height / height);
      }
  
      this.ctx.lineJoin = "round";
      this.ctx.strokeStyle = this.selectedColor;
      this.ctx.lineWidth = 2;
  
      this.ctx.beginPath();
      this.ctx.moveTo(this.saveX, this.saveY);
      this.ctx.lineTo(currentX, currentY);
      this.ctx.closePath();
  
      this.ctx.stroke();
  
      this.saveX = currentX;
      this.saveY = currentY;
    }
  }

}
