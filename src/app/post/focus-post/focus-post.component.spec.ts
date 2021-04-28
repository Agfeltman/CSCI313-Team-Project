import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusPostComponent } from './focus-post.component';

describe('FocusPostComponent', () => {
  let component: FocusPostComponent;
  let fixture: ComponentFixture<FocusPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FocusPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
