import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'td-compass',
  templateUrl: './compass.component.html',
  styleUrls: ['./compass.component.scss']
})

export class CompassComponent implements OnInit {
  mainBoard: HTMLElement;
  drawingBoard: HTMLElement;

  strPath: any;
  currentDrawing: any = null;
  isDrawingMode = false;
  wbEvent: any;
  point: any;


  constructor() {

  }

  ngOnInit(): void {
    this.events();
  }

  events() {
    this.drawingBoard = document.getElementById('drawCompass');
    this.mainBoard = document.getElementById('mainBoard')
    console.log(this.mainBoard)
    this.mainBoard.addEventListener('mousemove', this.onMouseMove.bind(this), false);
    this.mainBoard.addEventListener('mousedown', this.onMouseDown.bind(this));
    this.mainBoard.addEventListener('mouseup', this.onMouseUp.bind(this));
    // this.mainBoard.addEventListener("mousemove", function(){
    //   document.getElementById("demo").innerHTML = "Hello World!";
    // });
  }
  onMouseDown(event) {

    this.wbEvent = event;
    this.isDrawingMode = true;
    console.log(event.type)

    this.point = this.getMousePoint();
    this.currentDrawing = document.createElementNS('http://www.w3.org/1999/xhtml', 'path');
    this.currentDrawing.setAttributeNS(null, 'stroke-width', '2');
    this.currentDrawing.setAttributeNS(null, 'id', 'test-path');
    this.currentDrawing.setAttributeNS(null, 'stroke', 'red');
    this.currentDrawing.setAttributeNS(null, 'fill', 'none');
    this.strPath = 'M' + this.point.x + ' ' + this.point.y;
    this.currentDrawing.setAttributeNS(null, 'd', this.strPath);
    this.drawingBoard.appendChild(this.currentDrawing);

  }


  onMouseMove(event) {
    if (this.isDrawingMode) {
      this.wbEvent = event;
      this.point = this.getMousePoint();
      this.strPath += ' L' + this.point.x + ' ' + this.point.y;
      this.currentDrawing.setAttributeNS(null, 'd', this.strPath);
    }
  }

  onMouseUp() {

    this.currentDrawing = null;
    this.isDrawingMode = false;
  }

  getMousePoint() {
    const myX = this.wbEvent.pageX;
    const myY = this.wbEvent.pageY;
    return { x: myX, y: myY }
  }


}
