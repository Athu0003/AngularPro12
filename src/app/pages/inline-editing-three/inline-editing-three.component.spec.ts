import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineEditingThreeComponent } from './inline-editing-three.component';

describe('InlineEditingThreeComponent', () => {
  let component: InlineEditingThreeComponent;
  let fixture: ComponentFixture<InlineEditingThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineEditingThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineEditingThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
