import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherRulesListComponent } from './other-rules-list.component';

describe('OtherRulesListComponent', () => {
  let component: OtherRulesListComponent;
  let fixture: ComponentFixture<OtherRulesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherRulesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherRulesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
