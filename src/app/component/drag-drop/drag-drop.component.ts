import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements AfterViewInit {
  list1 = [1, 2, 3, 4]
  list2 = [5, 6, 7, 8]
  constructor() {
  }

  renderLi() {
    const liElement = document.querySelectorAll('li')!;
    for (let i = 0; i < liElement?.length; i++) {
      console.log(liElement?.length)
      liElement[i].setAttribute('draggable', 'true');

      liElement[i].addEventListener('dragstart', (event: DragEvent) => {
        console.log("drag start 2");
        event.dataTransfer!.setData('text/plain', liElement[i]?.textContent || '')
        event.dataTransfer!.effectAllowed = 'move'
      });

      liElement[i].addEventListener('dragend', (event: DragEvent) => {
        // console.log("drag ends 2")
      });
    }
  }
  initiateDragFn() {
    const liElement = document.querySelectorAll('li')!;
    const rightUList = document.querySelector('#ul-right')! as HTMLUListElement;
    const leftUList = document.querySelector('#ul-left')! as HTMLUListElement;

    if (rightUList && liElement && leftUList) {
      this.renderLi();

      // const list1 = [1, 2, 3, 4]
      rightUList?.addEventListener('dragover', (event: DragEvent) => {
        event.preventDefault();
      });

      leftUList?.addEventListener('dragover', (event: DragEvent) => {
        event.preventDefault();
      });

      rightUList.addEventListener('dragleave', (event: DragEvent) => { });

      rightUList.addEventListener('drop', (event: DragEvent) => {
        console.log(typeof event?.dataTransfer?.getData('text/plain'))
        let draggedElement = event?.dataTransfer?.getData('text/plain')!;
        if (this.list2.find((item: any) => item == +draggedElement)) {
          return;
        }
        this.list1 = this.list1.filter((item: any) => item != +draggedElement);
        this.list2?.push(+draggedElement);
        setTimeout(() => {
          // console.log(document.querySelectorAll('#ul-right > li')[this.list2?.length -1 ]);
          this.renderLi();
        }, 500);
      });

      leftUList.addEventListener('drop', (event: DragEvent) => {
        console.log(typeof event?.dataTransfer?.getData('text/plain'))
        let draggedElement = event?.dataTransfer?.getData('text/plain')!;

        console.log('draggedElement')
        console.log(draggedElement)
        if (this.list1.find((item: any) => item == +draggedElement)) {
          return;
        }
        this.list2 = this.list2.filter((item: any) => item != +draggedElement);
        this.list1?.push(+draggedElement);

        setTimeout(() => {
          // console.log(document.querySelectorAll('#ul-right > li')[this.list2?.length -1 ]);
          this.renderLi();
        }, 500);
      });
    }
  }

  ngAfterViewInit(): void {
    this.initiateDragFn();
  }
}
